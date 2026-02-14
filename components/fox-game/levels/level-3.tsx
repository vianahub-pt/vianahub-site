"use client";

import { motion } from "framer-motion";
import { Fox } from "../fox";
import {
  level3MazeDesktop,
  level3MazeMobile,
  type Position,
} from "../../../data/fox-game/mazes-level-3";

interface Level3Props {
  foxPosition: Position;
  foxDirection: "left" | "right" | "up" | "down";
  cellSize: number;
  isMoving: boolean;
  onCellClick?: (position: Position) => Promise<boolean>;
  gameStarted?: boolean;
  findReachableCells?: (start: Position) => Set<string>;
  isMobile?: boolean;
}

export function Level3({
  foxPosition,
  foxDirection,
  cellSize,
  isMoving,
  onCellClick,
  gameStarted,
  findReachableCells,
  isMobile = false,
}: Level3Props) {
  const maze = isMobile ? level3MazeMobile : level3MazeDesktop;

  const getCellClass = (x: number, y: number) => {
    const cellValue = maze.grid[y][x];
    let baseClass = "";

    switch (cellValue) {
      case 1:
        baseClass = "bg-red-800"; // Parede
        break;
      case 2:
        baseClass = "bg-gradient-to-br from-yellow-200 to-orange-300"; // Início - Deserto
        break;
      case 3:
        baseClass = "bg-gradient-to-br from-cyan-200 to-blue-300"; // Fim - Oásis
        break;
      default:
        baseClass = "bg-red-100"; // Caminho livre
        break;
    }

    // Adicionar classe para células clicáveis (que estão na área alcançável)
    if (gameStarted && cellValue !== 1 && isReachable(x, y)) {
      baseClass +=
        " cursor-pointer hover:bg-red-200 hover:ring-2 hover:ring-red-400 transition-all duration-200 touch-manipulation";
    }

    return baseClass;
  };

  const isReachable = (x: number, y: number) => {
    if (!findReachableCells) return false;
    const reachableCells = findReachableCells(foxPosition);
    return reachableCells.has(`${x},${y}`);
  };

  const handleCellClick = (x: number, y: number) => {
    if (!gameStarted || !onCellClick || isMoving) return;

    const cellValue = maze.grid[y][x];
    if (cellValue === 1) return; // Não pode clicar em paredes

    if (isReachable(x, y)) {
      onCellClick({ x, y });
    }
  };

  const getCellContent = (x: number, y: number) => {
    const cellValue = maze.grid[y][x];
    if (cellValue === 2) {
      // Posição inicial - Deserto
      return (
        <div className="w-full h-full relative overflow-hidden rounded flex items-center justify-center">
          <img
            src={isMobile ? "/desert-mobile.png" : "/desert-desktop.png"}
            alt="Deserto - Início"
            className="object-cover rounded"
            style={{
              imageRendering: "pixelated",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      );
    }
    if (cellValue === 3) {
      // Posição final - Oásis
      return (
        <div className="w-full h-full relative overflow-hidden rounded flex items-center justify-center">
          <img
            src={isMobile ? "/oasis-mobile.png" : "/oasis-desktop.png"}
            alt="Oásis - Fim"
            className="object-cover rounded"
            style={{
              imageRendering: "pixelated",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className={`relative border-4 border-red-600 rounded-lg overflow-hidden bg-red-50 ${
        isMobile ? "mx-auto" : ""
      }`}
      style={{
        width: isMobile ? "100%" : maze.size.width * cellSize,
        height: maze.size.height * cellSize,
        maxWidth: isMobile ? `${maze.size.width * cellSize}px` : "none",
        overflow: "hidden",
      }}
    >
      {/* Grid */}
      <div
        className="grid gap-0 overflow-hidden mx-auto"
        style={{
          gridTemplateColumns: `repeat(${maze.size.width}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${maze.size.height}, ${cellSize}px)`,
          width: maze.size.width * cellSize,
          height: maze.size.height * cellSize,
        }}
      >
        {maze.grid.flat().map((cell, index) => {
          const x = index % maze.size.width;
          const y = Math.floor(index / maze.size.width);
          const cellContent = getCellContent(x, y);

          return (
            <div
              key={index}
              className={`border border-red-200 ${getCellClass(
                x,
                y
              )} relative overflow-hidden`}
              style={{
                width: cellSize,
                height: cellSize,
                minHeight: isMobile ? "45px" : `${cellSize}px`,
                minWidth: isMobile ? "45px" : `${cellSize}px`,
              }}
              onClick={() => handleCellClick(x, y)}
            >
              {cellContent}
              {/* Indicador visual para células clicáveis com 25% mais de cor */}
              {gameStarted && isReachable(x, y) && maze.grid[y][x] !== 1 && (
                <div className="absolute inset-0 bg-red-400 bg-opacity-25 pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>

      {/* Fox */}
      <Fox
        position={foxPosition}
        cellSize={cellSize}
        isMoving={isMoving}
        isMobile={isMobile}
        direction={foxDirection}
      />
    </motion.div>
  );
}
