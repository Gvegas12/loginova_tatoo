import { FC } from "react";

import s from "./Card.module.scss";

interface ICardProps {}

export const Card: FC<ICardProps> = () => {
  return (
    <div className={s.card}>
      <div className={s.photo} />
      <div className={s.text_wrapper}>
        <p className={s.title}>Title: title</p>
        <p className={s.description}>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Animi molestias ducimus molestiae mollitia quae fugit ex
        </p>
      </div>
    </div>
  );
};
