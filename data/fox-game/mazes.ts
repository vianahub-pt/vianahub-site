import { level1DesktopMaze, level1MobileMaze } from "./mazes-level-1"
import { level2DesktopMaze, level2MobileMaze } from "./mazes-level-2"
import { level3DesktopMaze, level3MobileMaze } from "./mazes-level-3"
import { level4DesktopMaze, level4MobileMaze } from "./mazes-level-4"
import { level5DesktopMaze, level5MobileMaze } from "./mazes-level-5"

export interface Position {
  x: number
  y: number
}

export interface Maze {
  name: string
  grid: number[][]
  start: Position
  end: Position
  size: {
    width: number
    height: number
  }
}

export const desktopMazes: Maze[] = [
  level1DesktopMaze,
  level2DesktopMaze,
  level3DesktopMaze,
  level4DesktopMaze,
  level5DesktopMaze,
]

export const mobileMazes: Maze[] = [
  level1MobileMaze,
  level2MobileMaze,
  level3MobileMaze,
  level4MobileMaze,
  level5MobileMaze,
]
