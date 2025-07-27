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

// Desktop version - 15x10 - Nível Intermediário com mais obstáculos
export const level2MazeDesktop: Maze = {
  id: 2,
  name: "Dunas Médias",
  size: { width: 15, height: 10 },
  start: { x: 0, y: 0 },
  end: { x: 14, y: 9 },
  grid: [
    [2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0],
    [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 3],
  ],
}

// Mobile version - 7x7 - Nível Intermediário
export const level2MazeMobile: Maze = {
  id: 2,
  name: "Dunas Médias",
  size: { width: 7, height: 7 },
  start: { x: 0, y: 0 },
  end: { x: 6, y: 6 },
  grid: [
    [2, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 3],
  ],
}
