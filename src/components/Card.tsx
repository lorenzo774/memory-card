export type CardType = {
  id: number;
  img: string;
  description: string;
};

type CardProps = {
  card: CardType;
  onCardClicked: (id: number) => void;
};

/**
 * Card component
 */
export const Card = ({
  card: { id, img, description = "" },
  onCardClicked,
}: CardProps) => (
  <div
    onClick={() => onCardClicked(id)}
    className="card"
    key={`${id}`}
  >
    <img
      draggable="false"
      src={img}
      alt={description}
    />
  </div>
);
