import { Card, CardType } from "./Card";

type CardsContainerProps = {
  cards: CardType[];
  onCardClicked: (id: number) => void;
};

/**
 * Contains all the cards
 */
const CardsContainer = ({ cards, onCardClicked }: CardsContainerProps) => (
  <div className="cards-container">
    {cards.map((card) => (
      <Card
        onCardClicked={onCardClicked}
        card={card}
      />
    ))}
  </div>
);

export default CardsContainer;
