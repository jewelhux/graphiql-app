type CardProps = {
  item: Card;
};

type Card = {
  id: number;
  text: string;
};

type sliceType = {
  items: Card[];
};

export type { CardProps, Card, sliceType };
