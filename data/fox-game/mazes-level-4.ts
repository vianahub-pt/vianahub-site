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

// Desktop version - 15x10 - Nível Avançado com múltiplas bifurcações
export const level4MazeDesktop: Maze = {
  id: 4,
  name: "Tempestade de Areia",
  size: { width: 15, height: 10 },
  start: { x: 0, y: 0 },
  end: { x: 14, y: 9 },
  grid: [
    [2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 3],
  ],
}

// Mobile version - 7x12 - Nível Avançado
export const level4MazeMobile: Maze = {
  id: 4,
  name: "Tempestade de Areia",
  size: { width: 7, height: 12 },
  start: { x: 0, y: 0 },
  end: { x: 6, y: 11 },
  grid: [
    [2, 0, 0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 1],
    [0, 0, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 3],
  ],
}
