"use client";

import { motion } from "framer-motion";
import { type Position } from "../../data/fox-game/mazes-level-1"; // ajuste o caminho conforme sua estrutura

interface FoxProps {
  position: Position;
  cellSize: number;
  isMoving: boolean;
  isMobile?: boolean;
  direction: "left" | "right" | "up" | "down";
}

export function Fox({
  position,
  cellSize,
  isMoving,
  isMobile = false,
  direction,
}: FoxProps) {
  return (
    <motion.div
      className="absolute top-0 left-0 z-20 pointer-events-none"
      style={{ width: cellSize, height: cellSize }}
      animate={{
        x: position.x * cellSize,
        y: position.y * cellSize,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center relative"
        animate={{
          rotate: isMoving ? [0, -3, 3, 0] : 0,
          scale: isMoving ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 0.4,
          repeat: isMoving ? Number.POSITIVE_INFINITY : 0,
          ease: "easeInOut",
        }}
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            minWidth: `${Math.max(cellSize * 0.8, 32)}px`,
            minHeight: `${Math.max(cellSize * 0.8, 32)}px`,
          }}
        >
          <img
            src={
              isMobile
                ? "/fox-mobile.png"
                : direction === "right"
                ? "/fox-right.png"
                : direction === "left"
                ? "/fox-left.png"
                : direction === "up"
                ? "/fox-up.png"
                : "/fox-down.png"
            }
            alt="Fox"
            className="w-full h-full object-contain rounded-lg"
            style={{
              filter: isMoving
                ? "brightness(1.1) drop-shadow(0 0 8px rgba(255,165,0,0.6))"
                : "brightness(1) drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
              maxWidth: `${cellSize * 0.9}px`,
              maxHeight: `${cellSize * 0.9}px`,
              minWidth: "28px",
              minHeight: "28px",
            }}
          />
        </div>

        {isMoving && (
          <motion.div
            className="absolute inset-0 bg-orange-200 rounded-lg opacity-20 pointer-events-none"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
