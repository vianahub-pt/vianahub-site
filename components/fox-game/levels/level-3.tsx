"use client"

import { motion } from "framer-motion"
import { level3DesktopMaze, level3MobileMaze, type Position } from "../../../data/fox-game/mazes-level-3"

interface Level3Props {
  foxPosition: Position
  cellSize: number
  isMoving: boolean
  onCellClick: (position: Position) => void
  gameStarted: boolean
  findReachableCells: (start: Position) => Set<string>
  isMobile: boolean
}

export function Level3({
  foxPosition,
  cellSize,
  isMoving,
  onCellClick,
  gameStarted,
  findReachableCells,
  isMobile,
}: Level3Props) {
  const maze = isMobile ? level3MobileMaze : level3DesktopMaze
  const reachableCells = gameStarted ? findReachableCells(foxPosition) : new Set<string>()

  const getCellContent = (x: number, y: number) => {
    // Raposa
    if (foxPosition.x === x && foxPosition.y === y) {
      return (
        <motion.img
          key={`fox-${x}-${y}`}
          src={isMobile ? "/fox-mobile.png" : "/fox-desktop.png"}
          alt="Fox"
          className="w-full h-full object-contain"
          animate={isMoving ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
        />
      )
    }

    // Oásis (fim)
    if (maze.end && maze.end.x === x && maze.end.y === y) {
      return (
        <motion.img
          src={isMobile ? "/oasis-mobile.png" : "/oasis-desktop.png"}
          alt="Oasis"
          className="w-full h-full object-contain"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      )
    }

    // Células vazias
    return (
      <img
        src={isMobile ? "/desert-mobile.png" : "/desert-desktop.png"}
        alt="Desert"
        className="w-full h-full object-contain"
      />
    )
  }

  const getCellStyle = (x: number, y: number) => {
    const isReachable = reachableCells.has(`${x},${y}`)
    const isFoxPosition = foxPosition.x === x && foxPosition.y === y
    const isEnd = maze.end && maze.end.x === x && maze.end.y === y

    let className = "border border-red-300 relative cursor-pointer transition-all duration-200 "

    if (isFoxPosition) {
      className += "ring-2 ring-purple-500 ring-offset-1 "
    } else if (isEnd) {
      className += "ring-2 ring-blue-500 ring-offset-1 "
    } else if (isReachable && gameStarted) {
      className += "ring-1 ring-green-400 bg-green-50/50 hover:bg-green-100/70 "
    } else {
      className += "hover:bg-red-50/50 "
    }

    return className
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-red-100 border-4 border-red-400 rounded-lg p-2 shadow-lg"
    >
      <div
        className="grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${maze.size.width}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${maze.size.height}, ${cellSize}px)`,
        }}
      >
        {maze.grid.map((row, y) =>
          row.map((cell, x) => {
            if (cell === 1) {
              // Parede
              return (
                <div
                  key={`${x}-${y}`}
                  className="bg-red-800 border border-red-900"
                  style={{ width: cellSize, height: cellSize }}
                />
              )
            }

            // Célula caminhável
            return (
              <div
                key={`${x}-${y}`}
                className={getCellStyle(x, y)}
                style={{ width: cellSize, height: cellSize }}
                onClick={() => onCellClick({ x, y })}
              >
                {getCellContent(x, y)}
              </div>
            )
          }),
        )}
      </div>
    </motion.div>
  )
}
