"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/components/translation-context";

interface NameFormProps {
  onNameSubmit: (name: string) => void;
}

export function NameForm({ onNameSubmit }: NameFormProps) {
  const { t } = useTranslation();
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
    }
  };

  return (
    <div className="p-20 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <Card className="bg-white/50 dark:bg-gray-500 shadow-2xl">
        <CardContent className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-6">
              <img
                src="/fox.png"
                alt="Fox"
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
              <h1 className="text-2xl text-amber-500 dark:text-orange-400 font-bold  mb-2">
                {t("foxGame.title")}
              </h1>
              <p className="text-sm text-amber-500 dark:text-orange-400 mb-4">
                {t("foxGame.subtitle")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-left">
                <label
                  htmlFor="playerName"
                  className="block text-sm font-medium text-black dark:text-white mb-2"
                >
                  {t("foxGame.nameLabel")}
                </label>
                <Input
                  id="playerName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("foxGame.namePlaceholder")}
                  className="w-full text-amber-600 focus:text-amber-600 dark:text-black bg-gray-200 dark:bg-orange-200 focus:bg-white dark:focus:bg-orange-200 border-none "
                  maxLength={20}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full text-white dark:text-white bg-orange-700 hover:bg-orange-400 dark:bg-orange-700 hover:dark:bg-orange-400 "
                disabled={!name.trim()}
                aria-label="Start Game"
              >
                {t("foxGame.startButton")}
              </Button>
            </form>

            <div className="text-black dark:text-white text-left mt-6">
              <h3 className="text-sm mb-2">{t("foxGame.howToPlay")}</h3>
              <div className="text-xs space-y-1">
                <div>
                  •{" "}
                  {t("foxGame.instructions").split(" • ")[0].replace("• ", "")}
                </div>
                <div>• {t("foxGame.instructions").split(" • ")[1]}</div>
                <div>• {t("foxGame.instructions").split(" • ")[2]}</div>
                <div>• {t("foxGame.instructions").split(" • ")[3]}</div>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
