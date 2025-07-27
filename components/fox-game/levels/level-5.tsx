"use client"

import { motion } from "framer-motion"
import { level5Desktop, level5Mobile } from "../../../data/fox-game/mazes-level-5"
import type { Position } from "../../../data/fox-game/mazes"

interface Level5Props {
  foxPosition: Position
  cellSize: number
  isMoving: boolean
  onCellClick: (position: Position) => void
  gameStarted: boolean
  findReachableCells: (start: Position) => Set<string>
  isMobile: boolean
}

export function Level5({
  foxPosition,
  cellSize,
  isMoving,
  onCellClick,
  gameStarted,
  findReachableCells,
  isMobile,
}: Level5Props) {
  const maze = isMobile ? level5Mobile : level5Desktop
  const reachableCells = gameStarted ? findReachableCells(foxPosition) : new Set<string>()

  const handleCellClick = (x: number, y: number) => {
    if (!gameStarted || isMoving) return
    onCellClick({ x, y })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center"
    >
      <div
        className="grid border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg bg-yellow-100"
        style={{
          gridTemplateColumns: `repeat(${maze.size.width}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${maze.size.height}, ${cellSize}px)`,
        }}
      >
        {maze.grid.map((row, y) =>
          row.map((cell, x) => {
            const isFox = foxPosition.x === x && foxPosition.y === y
            const isEnd = maze.end.x === x && maze.end.y === y
            const isWall = cell === 1
            const isReachable = reachableCells.has(`${x},${y}`)
            const isClickable = gameStarted && !isMoving && isReachable && !isWall && !isFox

            return (
              <motion.div
                key={`${x}-${y}`}
                className={`
                  relative border border-amber-300 flex items-center justify-center
                  ${isWall ? "bg-amber-800" : "bg-yellow-50"}
                  ${isClickable ? "cursor-pointer hover:bg-yellow-200" : ""}
                  ${isReachable && !isWall && !isFox ? "bg-yellow-100 ring-2 ring-green-400 ring-opacity-50" : ""}
                `}
                style={{ width: cellSize, height: cellSize }}
                onClick={() => handleCellClick(x, y)}
                whileHover={isClickable ? { scale: 1.05 } : {}}
                whileTap={isClickable ? { scale: 0.95 } : {}}
              >
                {isFox && (
                  <motion.img
                    src={isMobile ? "/fox-mobile.png" : "/fox-desktop.png"}
                    alt="Fox"
                    className="w-full h-full object-contain"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                {isEnd && !isFox && (
                  <motion.img
                    src={isMobile ? "/oasis-mobile.png" : "/oasis-desktop.png"}
                    alt="Oasis"
                    className="w-full h-full object-contain"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                {isWall && (
                  <img
                    src={isMobile ? "/desert-mobile.png" : "/desert-desktop.png"}
                    alt="Desert"
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            )
          }),
        )}
      </div>
    </motion.div>
  )
}
