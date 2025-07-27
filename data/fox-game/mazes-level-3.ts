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

// Desktop version - 15x10 - Nível Intermediário-Avançado com labirinto mais complexo
export const level3MazeDesktop: Maze = {
  id: 3,
  name: "Cânion dos Ventos",
  size: { width: 15, height: 10 },
  start: { x: 0, y: 0 },
  end: { x: 14, y: 9 },
  grid: [
    [2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
  ],
}

// Mobile version - 7x9 - Nível Intermediário-Avançado
export const level3MazeMobile: Maze = {
  id: 3,
  name: "Cânion dos Ventos",
  size: { width: 7, height: 9 },
  start: { x: 0, y: 0 },
  end: { x: 6, y: 8 },
  grid: [
    [2, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0, 0, 3],
  ],
}
