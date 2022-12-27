import { useEffect, useState } from "react";
import { CardType } from "../components/Card";
import { getCards } from "../data/cards";
import useLocalStorage from "./useLocalStorage";

type useGameType = [
  number,
  CardType[],
  (id: number) => void,
  () => void,
  number
];

/**
 * Get score, cards, bestScore, click card
 */
const useGame = function (): useGameType {
  // States
  const [cardsClicked, setCardsClicked] = useState([] as number[]);
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(getCards());
  const [bestScore, setBestScore] = useLocalStorage("best-score");

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    setCards((cards) => getShuffleCards(cards));
  };

  /**
   * This function returns the cards in a random order
   */
  const getShuffleCards = function (cards: CardType[]): CardType[] {
    return cards.reduce((acc, card) => {
      const before = Math.round(Math.random());
      acc = before ? [card, ...acc] : [...acc, card];
      return acc;
    }, [] as CardType[]);
  };

  const clickCard = function (id: number) {
    if (cardsClicked.includes(id)) {
      reset();
      return;
    }
    setCardsClicked((prev) => [...prev, id]);
    setScore((prev) => prev + 1);
    shuffleCards();
  };

  const reset = () => {
    if (score > Number(bestScore)) {
      setBestScore(`${score}`);
    }
    setScore(0);
    setCardsClicked([]);
    shuffleCards();
  };

  return [score, cards, clickCard, reset, Number(bestScore)];
};

export default useGame;
