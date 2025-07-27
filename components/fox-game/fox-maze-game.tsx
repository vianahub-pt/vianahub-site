"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Play, Pause, Square, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { NameForm } from "./name-form"
import { Ranking } from "./ranking"
import { Level1 } from "./levels/level-1"
import { Level2 } from "./levels/level-2"
import { Level3 } from "./levels/level-3"
import { Level4 } from "./levels/level-4"
import { Level5 } from "./levels/level-5"

type GameState = "name-form" | "playing" | "paused" | "ending" | "ranking"
type CellType = "empty" | "wall" | "fox" | "oasis" | "path" | "reachable"

interface Position {
  row: number
  col: number
}

interface GameStats {
  level: number
  routes: number
  time: number
}

interface RankingEntry {
  name: string
  time: number
  date: string
}

const FoxMazeGame: React.FC = () => {
  const { t } = useTranslation()
  const [gameState, setGameState] = useState<GameState>("name-form")
  const [playerName, setPlayerName] = useState("")
  const [currentLevel, setCurrentLevel] = useState(1)
  const [foxPosition, setFoxPosition] = useState<Position>({ row: 0, col: 0 })
  const [gameStats, setGameStats] = useState<GameStats>({ level: 1, routes: 0, time: 0 })
  const [startTime, setStartTime] = useState<number>(0)
  const [elapsedTime, setElapsedTime] = useState<number>(0)
  const [maze, setMaze] = useState<CellType[][]>([])
  const [reachableCells, setReachableCells] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(false)
  const [showVictory, setShowVictory] = useState(false)
  const [totalGameTime, setTotalGameTime] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const levels = [
    { component: Level1, name: "Level 1" },
    { component: Level2, name: "Level 2" },
    { component: Level3, name: "Level 3" },
    { component: Level4, name: "Level 4" },
    { component: Level5, name: "Level 5" },
  ]

  const getCurrentLevelComponent = () => {
    return levels[currentLevel - 1]?.component || Level1
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const calculateReachableCells = useCallback((maze: CellType[][], foxPos: Position): Set<string> => {
    const reachable = new Set<string>()
    const visited = new Set<string>()
    const queue: Position[] = [foxPos]

    while (queue.length > 0) {
      const current = queue.shift()!
      const key = `${current.row}-${current.col}`

      if (visited.has(key)) continue
      visited.add(key)

      if (maze[current.row]?.[current.col] !== "wall") {
        reachable.add(key)

        // Add adjacent cells
        const directions = [
          { row: -1, col: 0 }, // up
          { row: 1, col: 0 }, // down
          { row: 0, col: -1 }, // left
          { row: 0, col: 1 }, // right
        ]

        directions.forEach((dir) => {
          const newRow = current.row + dir.row
          const newCol = current.col + dir.col
          const newKey = `${newRow}-${newCol}`

          if (
            newRow >= 0 &&
            newRow < maze.length &&
            newCol >= 0 &&
            newCol < maze[0].length &&
            !visited.has(newKey) &&
            maze[newRow][newCol] !== "wall"
          ) {
            queue.push({ row: newRow, col: newCol })
          }
        })
      }
    }

    return reachable
  }, [])

  const initializeLevel = useCallback(
    async (level: number) => {
      setIsLoading(true)

      // Simulate loading time
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const LevelComponent = levels[level - 1]?.component || Level1
      const levelData = LevelComponent({})

      if (levelData && levelData.props) {
        const { initialMaze, foxStart } = levelData.props
        setMaze(initialMaze)
        setFoxPosition(foxStart)
        setReachableCells(calculateReachableCells(initialMaze, foxStart))
      }

      setIsLoading(false)
    },
    [calculateReachableCells],
  )

  const startTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    const now = Date.now()
    setStartTime(now)

    intervalRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - now) / 1000)
      setElapsedTime(elapsed)
      setGameStats((prev) => ({ ...prev, time: elapsed }))
    }, 1000)
  }, [])

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const startGame = useCallback(
    (name: string) => {
      setPlayerName(name)
      setGameState("playing")
      setCurrentLevel(1)
      setGameStats({ level: 1, routes: 0, time: 0 })
      setElapsedTime(0)
      setTotalGameTime(0)
      initializeLevel(1)
      startTimer()
    },
    [initializeLevel, startTimer],
  )

  const pauseGame = useCallback(() => {
    setGameState("paused")
    stopTimer()
  }, [stopTimer])

  const resumeGame = useCallback(() => {
    setGameState("playing")
    startTimer()
  }, [startTimer])

  const stopGame = useCallback(() => {
    setGameState("ending")
    stopTimer()

    setTimeout(() => {
      setGameState("name-form")
      setCurrentLevel(1)
      setGameStats({ level: 1, routes: 0, time: 0 })
      setElapsedTime(0)
      setTotalGameTime(0)
      setShowVictory(false)
    }, 2000)
  }, [stopTimer])

  const resetLevel = useCallback(() => {
    initializeLevel(currentLevel)
    setGameStats((prev) => ({ ...prev, routes: 0 }))
  }, [currentLevel, initializeLevel])

  const nextLevel = useCallback(() => {
    if (currentLevel < 5) {
      const newLevel = currentLevel + 1
      setCurrentLevel(newLevel)
      setGameStats((prev) => ({ ...prev, level: newLevel, routes: 0 }))
      initializeLevel(newLevel)
    }
  }, [currentLevel, initializeLevel])

  const previousLevel = useCallback(() => {
    if (currentLevel > 1) {
      const newLevel = currentLevel - 1
      setCurrentLevel(newLevel)
      setGameStats((prev) => ({ ...prev, level: newLevel, routes: 0 }))
      initializeLevel(newLevel)
    }
  }, [currentLevel, initializeLevel])

  const moveFox = useCallback(
    (newPosition: Position) => {
      const key = `${newPosition.row}-${newPosition.col}`

      if (!reachableCells.has(key)) return

      setFoxPosition(newPosition)
      setGameStats((prev) => ({ ...prev, routes: prev.routes + 1 }))

      // Check if fox reached oasis
      if (maze[newPosition.row]?.[newPosition.col] === "oasis") {
        if (currentLevel === 5) {
          // Game completed
          stopTimer()
          const finalTime = elapsedTime
          setTotalGameTime(finalTime)

          // Save to ranking
          const rankings = JSON.parse(localStorage.getItem("foxGameRankings") || "[]")
          rankings.push({
            name: playerName,
            time: finalTime,
            date: new Date().toISOString(),
          })
          rankings.sort((a: RankingEntry, b: RankingEntry) => a.time - b.time)
          localStorage.setItem("foxGameRankings", JSON.stringify(rankings.slice(0, 10)))

          setShowVictory(true)
          setTimeout(() => {
            setGameState("ranking")
          }, 3000)
        } else {
          // Next level
          setTimeout(() => {
            nextLevel()
          }, 1500)
        }
      }

      // Update reachable cells
      const newMaze = maze.map((row) => [...row])
      setReachableCells(calculateReachableCells(newMaze, newPosition))
    },
    [reachableCells, maze, currentLevel, elapsedTime, playerName, stopTimer, nextLevel, calculateReachableCells],
  )

  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (gameState === "playing") {
        moveFox({ row, col })
      }
    },
    [gameState, moveFox],
  )

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (gameState !== "playing") return

      const { row, col } = foxPosition
      let newPosition: Position | null = null

      switch (event.key) {
        case "ArrowUp":
          newPosition = { row: row - 1, col }
          break
        case "ArrowDown":
          newPosition = { row: row + 1, col }
          break
        case "ArrowLeft":
          newPosition = { row, col: col - 1 }
          break
        case "ArrowRight":
          newPosition = { row, col: col + 1 }
          break
      }

      if (newPosition) {
        event.preventDefault()
        moveFox(newPosition)
      }
    },
    [gameState, foxPosition, moveFox],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [handleKeyPress])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const renderCell = (cell: CellType, row: number, col: number) => {
    const isFox = foxPosition.row === row && foxPosition.col === col
    const isReachable = reachableCells.has(`${row}-${col}`)

    let cellClass =
      "w-8 h-8 border border-gray-300 flex items-center justify-center text-xs cursor-pointer transition-all duration-200 "

    if (cell === "wall") {
      cellClass += "bg-amber-800 border-amber-900"
    } else if (cell === "oasis") {
      cellClass += "bg-blue-400 border-blue-500"
    } else if (isFox) {
      cellClass += "bg-orange-500 border-orange-600"
    } else if (isReachable) {
      cellClass += "bg-yellow-100 border-yellow-300 hover:bg-yellow-200"
    } else {
      cellClass += "bg-yellow-50 border-yellow-200"
    }

    return (
      <div key={`${row}-${col}`} className={cellClass} onClick={() => handleCellClick(row, col)}>
        {isFox && "🦊"}
        {cell === "oasis" && "🏝️"}
        {cell === "wall" && "🏔️"}
      </div>
    )
  }

  if (gameState === "name-form") {
    return <NameForm onStart={startGame} />
  }

  if (gameState === "ranking") {
    return <Ranking onPlayAgain={() => setGameState("name-form")} />
  }

  if (gameState === "ending") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="text-2xl font-bold text-gray-800">{t("foxGame.endingTitle")}</div>
        <div className="text-gray-600">{t("foxGame.endingMessage")}</div>
        <div className="text-sm text-gray-500">{t("foxGame.endingSubtitle")}</div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      {isLoading && (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
          <div className="text-2xl font-bold text-gray-800">{t("foxGame.loading")}</div>
          <div className="text-gray-600">{t("foxGame.loadingSubtitle")}</div>
          <div className="text-sm text-gray-500">
            {t("foxGame.loadingLevel")} {currentLevel}
          </div>
        </div>
      )}

      {showVictory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="p-8 text-center space-y-4">
            <div className="text-3xl font-bold text-green-600">{t("foxGame.congratulations")}</div>
            <div className="text-lg">
              {t("foxGame.victoryMessage")} {formatTime(totalGameTime)}
            </div>
          </Card>
        </div>
      )}

      {!isLoading && (
        <>
          {/* Game Stats */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="outline" className="text-sm">
              {t("foxGame.level")}: {gameStats.level}/5
            </Badge>
            <Badge variant="outline" className="text-sm">
              {t("foxGame.routes")}: {gameStats.routes}
            </Badge>
            <Badge variant="outline" className="text-sm">
              {t("foxGame.time")}: {formatTime(elapsedTime)}
            </Badge>
            <Badge variant="outline" className="text-sm">
              {t("foxGame.you")}: {playerName}
            </Badge>
          </div>

          {/* Game Controls */}
          <div className="flex flex-wrap gap-2 justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={previousLevel}
                    disabled={currentLevel === 1 || gameState === "playing"}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("foxGame.tooltipPrevious")}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" onClick={gameState === "playing" ? pauseGame : resumeGame}>
                    {gameState === "playing" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{gameState === "playing" ? t("foxGame.tooltipPause") : t("foxGame.tooltipStart")}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" onClick={stopGame}>
                    <Square className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("foxGame.tooltipStop")}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" onClick={resetLevel}>
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("foxGame.tooltipReset")}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextLevel}
                    disabled={currentLevel === 5 || gameState === "playing"}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("foxGame.tooltipNext")}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Game Status */}
          <div className="text-center">
            <Badge variant={gameState === "playing" ? "default" : "secondary"}>
              {gameState === "playing" ? t("foxGame.playing") : t("foxGame.ending")}
            </Badge>
          </div>

          {/* Game Board */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-center">
                <div className="grid gap-0" style={{ gridTemplateColumns: `repeat(${maze[0]?.length || 0}, 1fr)` }}>
                  {maze.map((row, rowIndex) => row.map((cell, colIndex) => renderCell(cell, rowIndex, colIndex)))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Game Instructions */}
          <Card>
            <CardContent className="p-4 text-center space-y-2">
              <div className="font-semibold">{t("foxGame.howToPlay")}</div>
              <div className="text-sm text-gray-600 whitespace-pre-line">{t("foxGame.howToPlayInstructions")}</div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}

export default FoxMazeGame
