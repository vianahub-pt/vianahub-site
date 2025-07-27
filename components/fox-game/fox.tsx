"use client"

import { motion } from "framer-motion"
import type { Position } from "../../data/fox-game/mazes"

interface FoxProps {
  position: Position
  cellSize: number
  isMoving: boolean
  isMobile?: boolean
}

export function Fox({ position, cellSize, isMoving, isMobile = false }: FoxProps) {
  return (
    <motion.div
      className="absolute z-10 pointer-events-none"
      animate={{
        x: position.x * cellSize,
        y: position.y * cellSize,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: isMoving ? 0.2 : 0.1,
      }}
      style={{
        width: cellSize,
        height: cellSize,
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        animate={{
          scale: isMoving ? [1, 1.1, 1] : 1,
          rotate: isMoving ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          duration: isMoving ? 0.3 : 0,
          repeat: isMoving ? 1 : 0,
        }}
      >
        <img
          src={isMobile ? "/fox-mobile.png" : "/fox-desktop.png"}
          alt="Fox"
          className="object-contain rounded"
          style={{
            imageRendering: "pixelated",
            width: "100%",
            height: "100%",
          }}
        />
      </motion.div>
    </motion.div>
  )
}
