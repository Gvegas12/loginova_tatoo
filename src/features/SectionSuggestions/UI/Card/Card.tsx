import React from "react";

import s from "./Card.module.scss";

interface ICardProps {}

export const Card: React.FC<ICardProps> = () => {
  return (
    <div className={s.Card}>
      <div className={s.image} />
      <p className={s.title}>Some title</p>
      <p className={s.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima
        expedita nihil
      </p>
    </div>
  );
};
