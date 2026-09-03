# Dice Game

A simple dice game built with React and Vite. Select a number, roll the die, and try to improve your score. 🎲

## Features

- Select a number from 1 to 6
- Roll the die by clicking it
- Earn points when your selection matches the roll
- Lose 2 points for an incorrect guess
- Reset the score at any time
- Show or hide the game rules

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

1. Clone or download this repository.
2. Open a terminal in the project folder.
3. Install the dependencies:

```bash
npm install
```

### Run the project

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## How to Play

1. Click **Play Now**.
2. Select a number between 1 and 6.
3. Click the dice to roll it.
4. If the selected number matches the dice, you gain points equal to the dice value.
5. If it does not match, 2 points are deducted.

You must select a number before rolling the dice.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Check the source code with ESLint
```

## Technologies

- React
- Vite
- Styled Components

## Project Structure

```text
src/
├── components/   # Game screens and controls
├── style/        # Reusable styled buttons
├── App.jsx       # Application state and screen switching
├── App.css       # App styles
└── index.css     # Global styles
public/images/    # Dice images
```