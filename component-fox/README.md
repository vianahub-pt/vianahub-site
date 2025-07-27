# Fox Game - Aventura da Raposa no Deserto

Um jogo de labirinto interativo onde você guia uma raposa através do deserto em busca de oásis.

## 🎮 Como Jogar

- Use as **setas do teclado** para mover a raposa uma célula por vez
- **Clique** em qualquer célula válida para mover até 3 células em linha reta
- A raposa pode se mover em direções cardeais (cima, baixo, esquerda, direita)
- Encontre o caminho até o oásis para completar cada nível

## 🏜️ Características

- **5 níveis** com dificuldade crescente
- **Sistema de ranking** com melhores tempos
- **Animações suaves** com Framer Motion
- **Interface responsiva** para desktop e mobile
- **Pathfinding inteligente** - a raposa encontra automaticamente o melhor caminho

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Radix UI** - Componentes acessíveis

## 📦 Instalação

\`\`\`bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build
npm start
\`\`\`

## 🌐 Deploy

Este jogo está configurado como uma aplicação estática e pode ser facilmente deployado em:

- **Azure Static Web Apps**
- **Vercel**
- **Netlify**
- **GitHub Pages**

Para build estático:
\`\`\`bash
npm run build
\`\`\`

Os arquivos estáticos serão gerados na pasta `out/`.

## 🎯 Funcionalidades

### Movimento Inteligente
- Movimento de até 3 células em linha reta
- Detecção automática de obstáculos
- Pathfinding com algoritmo BFS

### Sistema de Ranking
- Salva os 10 melhores tempos localmente
- Cronômetro em tempo real
- Identificação do jogador atual

### Níveis Progressivos
1. **Entrada do Deserto** - Tutorial básico
2. **Dunas Traiçoeiras** - Múltiplos caminhos
3. **Cânion dos Ventos** - Labirinto complexo
4. **Tempestade de Areia** - Desafio avançado
5. **Oásis Final** - Nível mestre

## 🎨 Design

- **Tema do deserto** com cores quentes
- **Ícones temáticos** (raposa, oásis, dunas)
- **Feedback visual** para ações do jogador
- **Animações fluidas** para melhor experiência

## 📱 Responsividade

- Layout adaptável para diferentes tamanhos de tela
- Controles otimizados para touch e desktop
- Interface reorganizada automaticamente em mobile

---

Desenvolvido com ❤️ para proporcionar uma experiência de jogo divertida e desafiadora!
