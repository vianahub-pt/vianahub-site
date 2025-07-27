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

// Import all maze levels
import { level1Desktop, level1Mobile } from "./mazes-level-1"
import { level2Desktop, level2Mobile } from "./mazes-level-2"
import { level3Desktop, level3Mobile } from "./mazes-level-3"
import { level4Desktop, level4Mobile } from "./mazes-level-4"
import { level5Desktop, level5Mobile } from "./mazes-level-5"

export const desktopMazes: Maze[] = [level1Desktop, level2Desktop, level3Desktop, level4Desktop, level5Desktop]

export const mobileMazes: Maze[] = [level1Mobile, level2Mobile, level3Mobile, level4Mobile, level5Mobile]
