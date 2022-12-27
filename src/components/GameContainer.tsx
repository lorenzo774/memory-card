import { useState } from "react";
import useGame from "../hooks/useGame";
import CardsContainer from "./CardsContainer";

const GameContainer = ({}) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, cards, clickCard, reset, bestScore] = useGame();

  const startGame = () => {
    setGameStarted(true);
  };
  const stopGame = () => {
    setGameStarted(false);
    reset();
  };

  return (
    <div>
      {/* Display game or play button */}
      {gameStarted ? (
        <>
          <div className="relative">
            <p className="score">Score: {score}</p>
          </div>
          <CardsContainer
            cards={cards}
            onCardClicked={clickCard}
          />
          <div className="center">
            <button onClick={() => stopGame()}>Stop</button>
          </div>
        </>
      ) : (
        <button onClick={() => startGame()}>Play</button>
      )}
      <p className="best-score">Best score: {bestScore}</p>
    </div>
  );
};

export default GameContainer;
