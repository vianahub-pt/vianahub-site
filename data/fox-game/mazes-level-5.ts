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

// Desktop version - 15x10 - Nível Mestre com labirinto muito complexo
export const level5MazeDesktop: Maze = {
  id: 5,
  name: "Oásis Final",
  size: { width: 15, height: 10 },
  start: { x: 0, y: 0 },
  end: { x: 14, y: 9 },
  grid: [
    [2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3],
  ],
}

// Mobile version - 7x15 - Nível Mestre
export const level5MazeMobile: Maze = {
  id: 5,
  name: "Oásis Final",
  size: { width: 7, height: 15 },
  start: { x: 0, y: 0 },
  end: { x: 6, y: 14 },
  grid: [
    [2, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 0, 0, 1, 1],
    [0, 1, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 3],
  ],
}
