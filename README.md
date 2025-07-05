# 🎲 Tenzies Game

A fun and engaging dice game built with React, TypeScript, and Vite. Roll the dice and try to get all 10 dice to show the same number!

## 🎯 How to Play

1. Roll the dice to get random numbers
2. Click on dice to "lock" them (they turn yellow)
3. Keep rolling until all dice show the same number
4. Win condition: All dice must be locked and show the same value
5. Click "Reset" to start a new game

## ✨ Features

- **Interactive Dice**: Click to lock/unlock individual dice
- **Visual Feedback**: Locked dice turn yellow, unlocked dice are blue
- **Win Detection**: Automatic win detection when all dice match
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Hover effects and transitions for better UX
- **Modern UI**: Built with Tailwind CSS for a clean, modern look

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd tenzies
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎮 Game Rules

**Tenzies** is a fast-paced dice game where the goal is to get all 10 dice to show the same number.

### Objective

Roll the dice until all 10 dice display the same number.

### Gameplay

1. Start with 10 dice showing random numbers (1-6)
2. Roll all unlocked dice
3. After each roll, choose which dice to keep by clicking them
4. Locked dice (yellow) won't change on subsequent rolls
5. Continue rolling until all dice show the same number
6. All dice must be locked to win

## 🏗️ Project Structure

```
src/
├── components/
│   └── Tenzies.tsx      # Main game component
├── App.tsx              # Root component
├── App.css              # Global styles
├── index.css            # Tailwind imports
└── main.tsx             # Application entry point
```

## 🎨 Styling

The game uses Tailwind CSS for styling with a modern blue and yellow color scheme:

- **Blue**: Primary color for unlocked dice and UI elements
- **Yellow**: Accent color for locked dice
- **Responsive**: Grid layout that works on all screen sizes

## 📱 Responsive Design

The game is fully responsive and works well on:

- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
