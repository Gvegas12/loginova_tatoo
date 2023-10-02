import { FC } from "react";
import clsx from "clsx";

import { Card } from "./Card/Card";

import s from "./SectionAbout.module.scss";

export const SectionAbout: FC = () => {
  return (
    <section className={clsx(s.SectionAbout)}>
      <div className="container">
        <div className={s.wrapper}>
          <h2 className={s.title}>ABOUT ME</h2>
          <div className={s.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};
