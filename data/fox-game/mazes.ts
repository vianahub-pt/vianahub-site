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

import { level1MazeDesktop, level1MazeMobile } from "./mazes-level-1"
import { level2MazeDesktop, level2MazeMobile } from "./mazes-level-2"
import { level3MazeDesktop, level3MazeMobile } from "./mazes-level-3"
import { level4MazeDesktop, level4MazeMobile } from "./mazes-level-4"
import { level5MazeDesktop, level5MazeMobile } from "./mazes-level-5"

export const desktopMazes: Maze[] = [
  level1MazeDesktop,
  level2MazeDesktop,
  level3MazeDesktop,
  level4MazeDesktop,
  level5MazeDesktop,
]

export const mobileMazes: Maze[] = [
  level1MazeMobile,
  level2MazeMobile,
  level3MazeMobile,
  level4MazeMobile,
  level5MazeMobile,
]

export type { Position }
