"use client";

import { useState, useEffect, useRef } from "react";

interface UseCounterAnimationProps {
  end: number;
  duration?: number;
  start?: number;
}

export function useCounterAnimation({
  end,
  duration = 2000,
  start = 0,
}: UseCounterAnimationProps) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(start); // Zera quando sai da visualização
        }
      },
      { threshold: 0.1 } // Trigger quando 10% do elemento está visível
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [start]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = start;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Função de easing para animação mais suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(
        startValue + (end - startValue) * easeOutQuart
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, start, duration]);

  return { count, ref };
}
