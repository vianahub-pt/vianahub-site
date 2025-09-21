"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  desktopMazes,
  mobileMazes,
  type Position,
} from "../../data/fox-game/mazes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  RefreshIcon,
} from "./icons";
import { Level1 } from "./levels/level-1";
import { Level2 } from "./levels/level-2";
import { Level3 } from "./levels/level-3";
import { Level4 } from "./levels/level-4";
import { Level5 } from "./levels/level-5";
import { NameForm } from "./name-form";
import { useTranslation } from "@/components/translation-context";
import type { RankingEntry } from "./ranking";

export default function FoxMazeGame() {
  const { t } = useTranslation();
  const [currentLevel, setCurrentLevel] = useState(0);
  const [foxPosition, setFoxPosition] = useState<Position>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameStopped, setGameStopped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Estados para nome e ranking
  const [playerName, setPlayerName] = useState("");
  const [showNameForm, setShowNameForm] = useState(true);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [ranking, setRanking] = useState<RankingEntry[]>([]);

  // Inicializar com mobile mazes por padrão
  const [mazes, setMazes] = useState(mobileMazes);
  const currentMaze = mazes[currentLevel] || mazes[0];

  // Detect mobile device após montagem
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setMazes(mobile ? mobileMazes : desktopMazes);
    };

    // Aguardar um frame para garantir que o DOM está pronto
    const timer = setTimeout(() => {
      checkMobile();
      setMounted(true);
    }, 100);

    const handleResize = () => {
      if (mounted) {
        checkMobile();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted]);

  // Carregar ranking do localStorage
  useEffect(() => {
    if (!mounted) return;

    const savedRanking = localStorage.getItem("foxGameRanking");
    if (savedRanking) {
      try {
        setRanking(JSON.parse(savedRanking));
      } catch (error) {
        console.error("Erro ao carregar ranking:", error);
      }
    }
  }, [mounted]);

  // Salvar ranking no localStorage
  const saveRanking = (newRanking: RankingEntry[]) => {
    if (!mounted) return;
    localStorage.setItem("foxGameRanking", JSON.stringify(newRanking));
    setRanking(newRanking);
  };

  // Calcular tamanho da célula baseado no tamanho da tela e tipo de dispositivo
  const calculateCellSize = useCallback(() => {
    if (!mounted) return 50;

    if (isMobile) {
      // Mobile: Calcular baseado na largura disponível para 7 colunas
      const screenWidth = window.innerWidth;
      const availableWidth = screenWidth - 32; // 16px padding de cada lado
      const calculatedSize = Math.floor(availableWidth / 7) - 2; // -2px para borders
      return Math.max(calculatedSize, 45); // Aumentado para 45px mínimo para melhor visibilidade das imagens
    } else {
      // Desktop: Tamanho fixo baseado na largura disponível
      const maxWidth = Math.min(window.innerWidth - 200, 750);
      const calculatedSize = Math.floor(maxWidth / 15);
      return Math.max(calculatedSize, 35);
    }
  }, [isMobile, mounted]);

  const [cellSize, setCellSize] = useState(50);

  useEffect(() => {
    if (!mounted) return;

    const updateCellSize = () => {
      setCellSize(calculateCellSize());
    };

    updateCellSize();
    window.addEventListener("resize", updateCellSize);
    return () => window.removeEventListener("resize", updateCellSize);
  }, [calculateCellSize, mounted]);

  // Resetar posição da raposa quando mudar de nível
  useEffect(() => {
    if (currentMaze && currentMaze.start) {
      setFoxPosition(currentMaze.start);
      setIsCompleted(false);
      if (currentLevel === 0 && !gameWon) {
        setEndTime(null);
      }
    }
  }, [currentLevel, currentMaze, gameWon]);

  // Verificar se chegou ao fim - CORRIGIDO para evitar múltiplas execuções
  useEffect(() => {
    if (!currentMaze || !currentMaze.end) return;
    if (
      foxPosition.x !== currentMaze.end.x ||
      foxPosition.y !== currentMaze.end.y
    )
      return;
    if (isCompleted) return; // Evitar múltiplas execuções

    setIsCompleted(true);

    if (currentLevel === mazes.length - 1) {
      // Último nível - mostrar mensagem de vitória final
      setGameWon(true);
      setGameStarted(false);
      setEndTime(Date.now());

      // Calcular tempo total e adicionar ao ranking
      if (startTime) {
        const totalTime = Math.floor((Date.now() - startTime) / 1000);
        addToRanking(playerName, totalTime);
      }
    } else {
      // Avançar automaticamente para o próximo nível após 1.5 segundos
      setTimeout(() => {
        setCurrentLevel((prev) => prev + 1);
      }, 1500);
    }
  }, [
    foxPosition,
    currentMaze,
    isCompleted,
    currentLevel,
    mazes.length,
    startTime,
    playerName,
  ]);

  // Adicionar entrada ao ranking
  const addToRanking = (name: string, time: number) => {
    const newEntry: RankingEntry = {
      name,
      time,
      date: new Date().toISOString(),
    };

    const newRanking = [...ranking, newEntry]
      .sort((a, b) => a.time - b.time)
      .slice(0, 10); // Manter apenas os 10 melhores

    saveRanking(newRanking);
  };

  // Efeito para lidar com o stop do jogo
  useEffect(() => {
    if (gameStopped) {
      const timer = setTimeout(() => {
        setCurrentLevel(0);
        setGameStarted(false);
        setGameStopped(false);
        setGameWon(false);
        setIsCompleted(false);
        setStartTime(null);
        setEndTime(null);
        setPlayerName("");
        setShowNameForm(true);
      }, 3000); // Aumentado para 3 segundos para dar tempo de ler a mensagem

      return () => clearTimeout(timer);
    }
  }, [gameStopped]);

  // Função para encontrar o caminho até uma posição
  const findPath = (start: Position, end: Position): Position[] => {
    if (!currentMaze || !currentMaze.grid || !currentMaze.size) return [];

    const queue: { pos: Position; path: Position[] }[] = [
      { pos: start, path: [start] },
    ];
    const visited = new Set<string>();

    while (queue.length > 0) {
      const { pos, path } = queue.shift()!;
      const key = `${pos.x},${pos.y}`;

      if (visited.has(key)) continue;
      visited.add(key);

      if (pos.x === end.x && pos.y === end.y) {
        return path;
      }

      // Verificar as 4 direções
      const directions = [
        { x: pos.x + 1, y: pos.y },
        { x: pos.x - 1, y: pos.y },
        { x: pos.x, y: pos.y + 1 },
        { x: pos.x, y: pos.y - 1 },
      ];

      for (const nextPos of directions) {
        if (
          nextPos.x >= 0 &&
          nextPos.x < currentMaze.size.width &&
          nextPos.y >= 0 &&
          nextPos.y < currentMaze.size.height &&
          currentMaze.grid[nextPos.y] &&
          currentMaze.grid[nextPos.y][nextPos.x] !== 1 &&
          !visited.has(`${nextPos.x},${nextPos.y}`)
        ) {
          queue.push({ pos: nextPos, path: [...path, nextPos] });
        }
      }
    }

    return []; // Sem caminho encontrado
  };

  // Função para encontrar células alcançáveis até 3 posições em qualquer direção cardinal
  const findReachableCells = (start: Position): Set<string> => {
    const reachable = new Set<string>();

    if (!currentMaze || !currentMaze.grid || !currentMaze.size)
      return reachable;

    reachable.add(`${start.x},${start.y}`); // Adicionar posição atual

    // Direções: direita, esquerda, baixo, cima
    const directions = [
      { x: 1, y: 0 }, // direita
      { x: -1, y: 0 }, // esquerda
      { x: 0, y: 1 }, // baixo
      { x: 0, y: -1 }, // cima
    ];

    // Para cada direção, verificar até 3 células
    for (const direction of directions) {
      for (let distance = 1; distance <= 3; distance++) {
        const newX = start.x + direction.x * distance;
        const newY = start.y + direction.y * distance;

        // Verificar se está dentro dos limites do labirinto
        if (
          newX < 0 ||
          newX >= currentMaze.size.width ||
          newY < 0 ||
          newY >= currentMaze.size.height
        ) {
          break; // Parar nesta direção se saiu dos limites
        }

        // Verificar se é uma parede
        if (!currentMaze.grid[newY] || currentMaze.grid[newY][newX] === 1) {
          break; // Parar nesta direção se encontrou uma parede
        }

        // Adicionar célula alcançável
        reachable.add(`${newX},${newY}`);
      }
    }

    return reachable;
  };

  // Função para animar o movimento ao longo do caminho - SEM DELAY
  const animateMovement = async (path: Position[]) => {
    if (path.length <= 1) return;

    setIsMoving(true);

    for (let i = 1; i < path.length; i++) {
      setFoxPosition(path[i]);
      // SEM DELAY - movimento instantâneo
    }

    setIsMoving(false);
  };

  const moveToPosition = async (newPosition: Position) => {
    if (
      isCompleted ||
      !gameStarted ||
      gameStopped ||
      isMoving ||
      !currentMaze ||
      !currentMaze.grid
    )
      return false;

    // Verificar se a nova posição é válida (não é parede)
    if (
      !currentMaze.grid[newPosition.y] ||
      currentMaze.grid[newPosition.y][newPosition.x] === 1
    )
      return false;

    // Verificar se a posição está dentro das células alcançáveis
    const reachableCells = findReachableCells(foxPosition);
    const targetKey = `${newPosition.x},${newPosition.y}`;

    if (!reachableCells.has(targetKey)) return false;

    // Encontrar o caminho até a posição
    const path = findPath(foxPosition, newPosition);
    if (path.length === 0) return false;

    // Animar o movimento ao longo do caminho
    await animateMovement(path);
    return true;
  };

  // Controle de teclado - CORRIGIDO para evitar scroll da tela
  useEffect(() => {
    if (!mounted || !gameStarted || gameStopped || isMoving || !currentMaze)
      return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Só prevenir default para as teclas de seta
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
      ) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (isCompleted) return;

      const newPosition = { ...foxPosition };
      let moved = false;

      switch (event.key) {
        case "ArrowUp":
          if (foxPosition.y > 0) {
            newPosition.y -= 1;
            moved = true;
          }
          break;
        case "ArrowDown":
          if (foxPosition.y < currentMaze.size.height - 1) {
            newPosition.y += 1;
            moved = true;
          }
          break;
        case "ArrowLeft":
          if (foxPosition.x > 0) {
            newPosition.x -= 1;
            moved = true;
          }
          break;
        case "ArrowRight":
          if (foxPosition.x < currentMaze.size.width - 1) {
            newPosition.x += 1;
            moved = true;
          }
          break;
      }

      if (moved) {
        moveToPosition(newPosition);
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    foxPosition,
    currentMaze,
    isCompleted,
    mounted,
    gameStarted,
    gameStopped,
    isMoving,
  ]);

  const resetLevel = () => {
    if (currentMaze && currentMaze.start) {
      setFoxPosition(currentMaze.start);
      setIsCompleted(false);
    }
  };

  const restartGame = () => {
    setCurrentLevel(0);
    setGameWon(false);
    setGameStopped(false);
    setGameStarted(false);
    setStartTime(null);
    setEndTime(null);
    setShowNameForm(true);
  };

  const startGame = () => {
    if (gameStopped) return;
    setGameStarted(true);
    if (!startTime) {
      setStartTime(Date.now());
    }
  };

  const pauseGame = () => {
    if (gameStopped) return;
    setGameStarted(false);
  };

  const stopGame = () => {
    setGameStopped(true);
    setGameStarted(false);
  };

  const goToPreviousLevel = () => {
    if (currentLevel > 0 && !gameStopped) {
      setCurrentLevel(currentLevel - 1);
    }
  };

  const goToNextLevel = () => {
    if (currentLevel < mazes.length - 1 && !gameStopped) {
      setCurrentLevel(currentLevel + 1);
    }
  };

  const handleNameSubmit = (name: string) => {
    setPlayerName(name);
    setShowNameForm(false);
  };

  const handlePlayAgain = () => {
    restartGame();
  };

  // Função para obter informações sobre caminhos do nível atual
  const getPathInfo = () => {
    switch (currentLevel) {
      case 0:
        return t("foxGame.routes.level1");
      case 1:
        return t("foxGame.routes.level2");
      case 2:
        return t("foxGame.routes.level3");
      case 3:
        return t("foxGame.routes.level4");
      case 4:
        return t("foxGame.routes.level5");
      default:
        return t("foxGame.routes.multiple");
    }
  };

  // Função para formatar tempo
  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Calcular tempo atual
  const getCurrentTime = (): string => {
    if (!startTime) return "0:00";
    const currentTime = gameWon && endTime ? endTime : Date.now();
    const elapsed = Math.floor((currentTime - startTime) / 1000);
    return formatTime(elapsed);
  };

  // Renderizar o componente de nível apropriado
  const renderLevel = () => {
    if (!mounted || !currentMaze || !currentMaze.grid) {
      return (
        <div className="flex items-center justify-center p-8">
          {t("foxGame.loading")}
        </div>
      );
    }

    const levelProps = {
      foxPosition,
      cellSize,
      isMoving,
      onCellClick: moveToPosition,
      gameStarted: gameStarted && !gameStopped,
      findReachableCells,
      isMobile,
    };

    switch (currentLevel) {
      case 0:
        return <Level1 {...levelProps} />;
      case 1:
        return <Level2 {...levelProps} />;
      case 2:
        return <Level3 {...levelProps} />;
      case 3:
        return <Level4 {...levelProps} />;
      case 4:
        return <Level5 {...levelProps} />;
      default:
        return <Level1 {...levelProps} />;
    }
  };

  // Loading screen enquanto não montou
  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-[750px] bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-2xl text-amber-800 font-bold">
            {t("foxGame.loading")}
          </div>
          <div className="text-sm text-amber-600">
            {t("foxGame.loadingSubtitle")}
          </div>
        </div>
      </div>
    );
  }

  // Mostrar formulário de nome
  if (showNameForm) {
    return <NameForm onNameSubmit={handleNameSubmit} />;
  }

  return (
    <TooltipProvider>
      <div
        className={`flex flex-col items-center justify-center h-[750px] bg-gray-100 dark:bg-gray-800 ${
          isMobile ? "p-1" : "p-2 lg:p-4"
        } overflow-hidden`}
        style={{ touchAction: "pan-x pan-y" }} // Evitar problemas de scroll em mobile
      >
        <Card
          className={`w-full ${
            isMobile ? "max-w-full mx-1" : "max-w-6xl"
          } bg-gray-400 dark:bg-gray-400 border border-white `}
        >
          <CardContent
            className={`${isMobile ? "p-1" : "p-3 lg:p-6"} overflow-hidden`}
          >
            {/* Header */}
            <div className="text-center mb-4 text-white dark:text-black">
              <h1
                className={`${
                  isMobile ? "text-lg" : "text-xl lg:text-3xl"
                } font-bold text-white dark:text-black mb-2 flex items-center justify-center gap-2`}
              >
                <img
                  src="/fox-desktop.png"
                  alt="Fox"
                  className={`${
                    isMobile ? "w-6 h-6" : "w-8 h-8"
                  } object-contain`}
                />
                {t("foxGame.title")}
              </h1>
              <div
                className={`flex items-center justify-center gap-2 ${
                  isMobile
                    ? "text-xs flex-wrap"
                    : "lg:gap-4 text-sm lg:text-lg flex-wrap"
                }`}
              >
                <span className="font-semibold flex items-center gap-1">
                  <img
                    src="/user.png"
                    alt="Player"
                    className="w-4 h-4 object-contain"
                  />
                  {playerName}
                </span>
                <span className="font-semibold">
                  {t("foxGame.level")}: {currentLevel + 1}/5
                </span>
                <span className="font-semibold">
                  {currentMaze?.name || t("foxGame.loading")}
                </span>
                {!isMobile && (
                  <span className="font-semibold">
                    {t("foxGame.routes")} {currentLevel + 1} {getPathInfo()}
                  </span>
                )}
                <span className="font-semibold">
                  {t("foxGame.time")}: {getCurrentTime()}
                </span>
                {gameStarted && !gameStopped && (
                  <span className="font-semibold">{t("foxGame.playing")}</span>
                )}
                {gameStopped && (
                  <span className="text-red-600 font-semibold">
                    {t("foxGame.stopping")}
                  </span>
                )}
              </div>

              {/* Barra de progresso */}
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <motion.div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentLevel + 1) / mazes.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Main Game Layout - Responsive */}
            <div
              className={`flex ${
                isMobile
                  ? "flex-col gap-2"
                  : "flex-col lg:flex-row gap-4 lg:gap-8"
              } items-stretch ${
                isMobile ? "overflow-y-auto" : "overflow-hidden"
              }`}
            >
              {/* Left Column - Ranking and Controls */}
              <div
                className={`${
                  isMobile
                    ? "order-2"
                    : "flex-1 flex flex-col space-y-4 lg:space-y-6 h-full order-2 lg:order-1 overflow-hidden"
                }`}
              >
                {/* Ranking History */}
                {!isMobile && (
                  <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4 flex-1 flex flex-col overflow-hidden">
                    <h3 className="text-lg font-semibold text-amber-800 mb-3">
                      {t("foxGame.ranking.title")}
                    </h3>
                    <div className="space-y-2 overflow-y-auto flex-1 min-h-0 max-h-48 lg:max-h-80">
                      {ranking.length === 0 ? (
                        <div className="text-center py-4 text-amber-600">
                          <p className="text-sm">
                            {t("foxGame.ranking.empty.title")}
                          </p>
                          <p className="text-xs">
                            {t("foxGame.ranking.empty.subtitle")}
                          </p>
                        </div>
                      ) : (
                        ranking.map((entry, index) => {
                          const isCurrentPlayer =
                            entry.name === playerName &&
                            startTime &&
                            endTime &&
                            Math.abs(
                              entry.time -
                                Math.floor((endTime - startTime) / 1000)
                            ) < 1;

                          return (
                            <motion.div
                              key={`${entry.name}-${entry.date}-${index}`}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className={`flex items-center justify-between p-2 rounded text-sm ${
                                isCurrentPlayer
                                  ? "bg-green-100 border border-green-300 font-semibold"
                                  : index === 0
                                  ? "bg-yellow-100"
                                  : index === 1
                                  ? "bg-gray-100"
                                  : index === 2
                                  ? "bg-orange-100"
                                  : "bg-white"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold w-6">
                                  {index + 1}º
                                </span>
                                <span className="text-amber-800 flex items-center gap-1">
                                  <img
                                    src="/fox-desktop.png"
                                    alt="Player"
                                    className="w-3 h-3 object-contain"
                                  />
                                  {entry.name}
                                  {isCurrentPlayer && (
                                    <span className="ml-1 text-xs bg-green-600 text-white px-1 rounded">
                                      {t("foxGame.ranking.you")}
                                    </span>
                                  )}
                                </span>
                              </div>
                              <span className="font-bold text-amber-700">
                                {formatTime(entry.time)}
                              </span>
                            </motion.div>
                          );
                        })
                      )}
                    </div>
                    {ranking.length > 0 && (
                      <div className="mt-3 pt-2 border-t border-amber-200 text-xs text-amber-600 text-center flex-shrink-0">
                        {t("foxGame.ranking.footer")}
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation Controls */}
                <div
                  className={`bg-blue-50 border-2 border-blue-200 rounded-lg ${
                    isMobile ? "p-2" : "p-4"
                  } flex-shrink-0`}
                >
                  <h3
                    className={`${
                      isMobile ? "text-sm" : "text-lg"
                    } font-semibold text-blue-800 mb-2`}
                  >
                    {t("foxGame.controls")}
                  </h3>
                  <div
                    className={`grid grid-cols-5 ${
                      isMobile ? "gap-1" : "gap-1 lg:gap-2"
                    }`}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={goToPreviousLevel}
                          variant="outline"
                          disabled={currentLevel === 0 || gameStopped}
                          className={`border-blue-600 text-blue-700 hover:bg-blue-50 bg-transparent disabled:opacity-50 ${
                            isMobile ? "px-2 py-1 h-8" : "px-3 py-2 h-10"
                          } flex items-center justify-center`}
                        >
                          <ChevronLeftIcon size={isMobile ? 14 : 18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("foxGame.previousLevel")}</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={gameStarted ? pauseGame : startGame}
                          disabled={gameStopped}
                          className={`${
                            isMobile ? "px-2 py-1 h-8" : "px-3 py-2 h-10"
                          } flex items-center justify-center disabled:opacity-50 ${
                            gameStarted
                              ? "bg-red-600 hover:bg-red-700 text-white"
                              : "bg-green-600 hover:bg-green-700 text-white"
                          }`}
                        >
                          {gameStarted ? (
                            <PauseIcon size={isMobile ? 14 : 18} />
                          ) : (
                            <PlayIcon size={isMobile ? 14 : 18} />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {gameStarted
                            ? t("foxGame.pauseGame")
                            : t("foxGame.startGame")}
                        </p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={stopGame}
                          disabled={gameStopped}
                          className={`bg-gray-600 hover:bg-gray-700 text-white ${
                            isMobile ? "px-2 py-1 h-8" : "px-3 py-2 h-10"
                          } flex items-center justify-center disabled:opacity-50`}
                        >
                          <StopIcon size={isMobile ? 14 : 18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("foxGame.stopGame")}</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={goToNextLevel}
                          variant="outline"
                          disabled={
                            currentLevel === mazes.length - 1 || gameStopped
                          }
                          className={`border-blue-600 text-blue-700 hover:bg-blue-50 bg-transparent disabled:opacity-50 ${
                            isMobile ? "px-2 py-1 h-8" : "px-3 py-2 h-10"
                          } flex items-center justify-center`}
                        >
                          <ChevronRightIcon size={isMobile ? 14 : 18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("foxGame.nextLevel")}</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={resetLevel}
                          variant="outline"
                          disabled={gameStopped}
                          className={`border-blue-600 text-blue-700 hover:bg-blue-50 bg-transparent ${
                            isMobile ? "px-2 py-1 h-8" : "px-3 py-2 h-10"
                          } flex items-center justify-center disabled:opacity-50`}
                        >
                          <RefreshIcon size={isMobile ? 14 : 18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("foxGame.resetLevel")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                {/* Game Status */}
                <div className="space-y-4 flex-shrink-0">
                  {/* Game Stopped Message */}
                  <AnimatePresence>
                    {gameStopped && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-red-100 border-2 border-red-500 rounded-lg p-4"
                      >
                        <h3 className="text-xl font-bold text-red-800 mb-2 text-center">
                          {t("foxGame.gameEnding")}
                        </h3>
                        <p className="text-red-700 text-center mb-2">
                          {t("foxGame.gameEndingMessage")}
                          <br />
                          <span className="text-sm">
                            {t("foxGame.returningToStart")}
                          </span>
                        </p>
                        <div className="mt-3 flex justify-center">
                          <motion.div
                            className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Victory Message */}
                  <AnimatePresence>
                    {gameWon && !gameStopped && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-green-100 border-2 border-green-500 rounded-lg p-4"
                      >
                        <h2 className="text-2xl font-bold text-green-800 mb-2 text-center">
                          {t("foxGame.congratulations")}
                        </h2>
                        <p className="text-green-700 mb-4 text-center">
                          {t("foxGame.allLevelsCompleted")}{" "}
                          <strong>{getCurrentTime()}</strong>!
                        </p>
                        <div className="text-center space-y-2">
                          <Button
                            onClick={restartGame}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            <RefreshIcon size={16} className="mr-2" />
                            {t("foxGame.playAgain")}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Level Complete Message */}
                  <AnimatePresence>
                    {isCompleted && !gameWon && !gameStopped && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-blue-100 border-2 border-blue-500 rounded-lg p-4"
                      >
                        <h3 className="text-xl font-bold text-blue-800 mb-2 text-center">
                          {t("foxGame.oasisFound")}
                        </h3>
                        <p className="text-blue-700 text-center">
                          {t("foxGame.pathCompleted")}
                          <br />
                          <span className="text-sm">
                            {t("foxGame.currentTime")}{" "}
                            <strong>{getCurrentTime()}</strong>
                          </span>
                        </p>
                        <div className="mt-2 flex justify-center">
                          <motion.div
                            className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Column - Game Board */}
              <div
                className={`${
                  isMobile
                    ? "order-1 flex justify-center w-full"
                    : "flex-shrink-0 order-1 lg:order-2 flex justify-center overflow-auto"
                }`}
              >
                <div
                  className={
                    isMobile
                      ? "w-full flex justify-center max-w-full overflow-hidden"
                      : "overflow-auto"
                  }
                >
                  <AnimatePresence mode="wait">{renderLevel()}</AnimatePresence>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
}
