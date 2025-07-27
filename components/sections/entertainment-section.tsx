"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useTranslation } from "@/contexts/translation-context"

const games = [
  {
    id: 1,
    name: "Snake Game",
    description: "Jogo clássico da cobrinha",
    component: () => <SnakeGame />,
  },
  {
    id: 2,
    name: "Memory Game",
    description: "Jogo da memória com cartas",
    component: () => <MemoryGame />,
  },
  {
    id: 3,
    name: "Tic Tac Toe",
    description: "Jogo da velha clássico",
    component: () => <TicTacToe />,
  },
]

function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameState, setGameState] = useState<"playing" | "paused" | "gameOver">("paused")
  const [score, setScore] = useState(0)
  const gameLoopRef = useRef<number>()

  const GRID_SIZE = 20
  const CANVAS_SIZE = 400

  const [snake, setSnake] = useState([{ x: 200, y: 200 }])
  const [food, setFood] = useState({ x: 100, y: 100 })
  const [direction, setDirection] = useState({ x: 0, y: 0 })

  const generateFood = () => {
    const x = Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE)) * GRID_SIZE
    const y = Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE)) * GRID_SIZE
    return { x, y }
  }

  const gameLoop = () => {
    if (gameState !== "playing") return

    setSnake((prevSnake) => {
      const newSnake = [...prevSnake]
      const head = { ...newSnake[0] }

      head.x += direction.x
      head.y += direction.y

      // Check wall collision
      if (head.x < 0 || head.x >= CANVAS_SIZE || head.y < 0 || head.y >= CANVAS_SIZE) {
        setGameState("gameOver")
        return prevSnake
      }

      // Check self collision
      if (newSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
        setGameState("gameOver")
        return prevSnake
      }

      newSnake.unshift(head)

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 10)
        setFood(generateFood())
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }

  useEffect(() => {
    if (gameState === "playing") {
      gameLoopRef.current = window.setInterval(gameLoop, 150)
    } else {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current)
      }
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current)
      }
    }
  }, [gameState, direction, food])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

    // Draw snake
    ctx.fillStyle = "#0f0"
    snake.forEach((segment) => {
      ctx.fillRect(segment.x, segment.y, GRID_SIZE - 2, GRID_SIZE - 2)
    })

    // Draw food
    ctx.fillStyle = "#f00"
    ctx.fillRect(food.x, food.y, GRID_SIZE - 2, GRID_SIZE - 2)
  }, [snake, food])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameState !== "playing") return

      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -GRID_SIZE })
          break
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: GRID_SIZE })
          break
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -GRID_SIZE, y: 0 })
          break
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: GRID_SIZE, y: 0 })
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [direction, gameState])

  const startGame = () => {
    setGameState("playing")
    setDirection({ x: GRID_SIZE, y: 0 })
  }

  const pauseGame = () => {
    setGameState("paused")
  }

  const resetGame = () => {
    setGameState("paused")
    setSnake([{ x: 200, y: 200 }])
    setFood(generateFood())
    setDirection({ x: 0, y: 0 })
    setScore(0)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-lg font-semibold">Score: {score}</div>
      <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} className="border-2 border-gray-300" />
      <div className="flex space-x-2">
        {gameState === "paused" && (
          <Button onClick={startGame} size="sm">
            <Play className="h-4 w-4" />
          </Button>
        )}
        {gameState === "playing" && (
          <Button onClick={pauseGame} size="sm">
            <Pause className="h-4 w-4" />
          </Button>
        )}
        <Button onClick={resetGame} size="sm">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
      {gameState === "gameOver" && <div className="text-red-500 font-semibold">Game Over!</div>}
      <div className="text-sm text-gray-600">Use arrow keys to control</div>
    </div>
  )
}

function MemoryGame() {
  const [cards, setCards] = useState<{ id: number; value: string; flipped: boolean; matched: boolean }[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  const cardValues = ["🎮", "🎯", "🎲", "🎪", "🎨", "🎭", "🎪", "🎵"]

  const initializeGame = () => {
    const shuffledCards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        flipped: false,
        matched: false,
      }))
    setCards(shuffledCards)
    setFlippedCards([])
    setMoves(0)
    setGameWon(false)
  }

  useEffect(() => {
    initializeGame()
  }, [])

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards
      if (cards[first].value === cards[second].value) {
        setCards((prev) =>
          prev.map((card) => (card.id === first || card.id === second ? { ...card, matched: true } : card)),
        )
      }

      setTimeout(() => {
        setCards((prev) => prev.map((card) => (card.matched ? card : { ...card, flipped: false })))
        setFlippedCards([])
      }, 1000)

      setMoves((prev) => prev + 1)
    }
  }, [flippedCards, cards])

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setGameWon(true)
    }
  }, [cards])

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].flipped || cards[id].matched) return

    setCards((prev) => prev.map((card) => (card.id === id ? { ...card, flipped: true } : card)))
    setFlippedCards((prev) => [...prev, id])
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4">
        <div className="text-lg font-semibold">Moves: {moves}</div>
        <Button onClick={initializeGame} size="sm">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`w-16 h-16 flex items-center justify-center text-2xl cursor-pointer rounded-lg border-2 transition-all ${
              card.flipped || card.matched
                ? "bg-white border-blue-500"
                : "bg-gray-300 border-gray-400 hover:bg-gray-200"
            }`}
          >
            {card.flipped || card.matched ? card.value : "?"}
          </div>
        ))}
      </div>
      {gameWon && (
        <div className="text-green-500 font-semibold text-xl">Congratulations! You won in {moves} moves!</div>
      )}
    </div>
  )
}

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState<string | null>(null)

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (index: number) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? "X" : "O"
    setBoard(newBoard)
    setIsXNext(!isXNext)

    const gameWinner = calculateWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
  }

  const isDraw = !winner && board.every((square) => square !== null)

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-semibold">
          {winner ? `Winner: ${winner}` : isDraw ? "It's a draw!" : `Next player: ${isXNext ? "X" : "O"}`}
        </div>
        <Button onClick={resetGame} size="sm">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {board.map((square, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-16 h-16 text-2xl font-bold border-2 border-gray-400 hover:bg-gray-100 transition-colors"
          >
            {square}
          </button>
        ))}
      </div>
    </div>
  )
}

export function EntertainmentSection() {
  const { t } = useTranslation()
  const [selectedGame, setSelectedGame] = useState(0)

  return (
    <section className="py-20 bg-viana-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("entertainment.title")}</h2>
          <p className="text-xl text-viana-gray max-w-3xl mx-auto">
            Relaxe um pouco com nossos jogos enquanto navega pelo site
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 space-x-4">
            {games.map((game, index) => (
              <Button
                key={game.id}
                onClick={() => setSelectedGame(index)}
                variant={selectedGame === index ? "default" : "outline"}
                className={selectedGame === index ? "bg-viana-orange hover:bg-viana-yellow" : ""}
              >
                {game.name}
              </Button>
            ))}
          </div>

          <Card className="p-8">
            <CardContent>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-viana-black mb-2">{games[selectedGame].name}</h3>
                <p className="text-viana-gray">{games[selectedGame].description}</p>
              </div>
              <div className="flex justify-center">
                {games[selectedGame].component && games[selectedGame].component()}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
