import { level1MazeDesktop, level1MazeMobile } from "./mazes-level-1"
import { level2MazeDesktop, level2MazeMobile } from "./mazes-level-2"
import { level3MazeDesktop, level3MazeMobile } from "./mazes-level-3"
import { level4MazeDesktop, level4MazeMobile } from "./mazes-level-4"
import { level5MazeDesktop, level5MazeMobile } from "./mazes-level-5"

export interface Position {
  x: number
  y: number
}

export interface Maze {
  id: number
  name: string
  grid: number[][]
  start: Position
  end: Position
  size: { width: number; height: number }
}

// Desktop mazes (15x10)
export const desktopMazes: Maze[] = [
  level1MazeDesktop,
  level2MazeDesktop,
  level3MazeDesktop,
  level4MazeDesktop,
  level5MazeDesktop,
]

// Mobile mazes (7x[altura variável])
export const mobileMazes: Maze[] = [
  level1MazeMobile,
  level2MazeMobile,
  level3MazeMobile,
  level4MazeMobile,
  level5MazeMobile,
]

// Function to get appropriate mazes based on device - sempre retorna mobile por padrão para evitar hidratação
export const getMazes = (isMobile?: boolean): Maze[] => {
  // Se não especificado, usar mobile por padrão para consistência
  return isMobile === false ? desktopMazes : mobileMazes
}

// Export current mazes (mobile por padrão para evitar problemas de hidratação)
export const mazes = mobileMazes

// Export individual mazes for backward compatibility
export const level1Maze = mazes[0]
export const level2Maze = mazes[1]
export const level3Maze = mazes[2]
export const level4Maze = mazes[3]
export const level5Maze = mazes[4]
