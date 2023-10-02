import React from "react";
import clsx from "clsx";

import s from "./SectionSuggestions.module.scss";
import { Card } from "./Card/Card";

interface ISectionSuggestionsProps {}

export const SectionSuggestions: React.FC<ISectionSuggestionsProps> = () => {
  return (
    <section className={clsx(s.SectionSuggestions)}>
      <div className="container">
        <div className={s.wrapper}>
          <h2 className={s.title}>My suggestions :D</h2>
          <p className={s.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod
            culpa dolorum. Est voluptatum tempore veniam molestias nisi. Earum,
            nulla doloribus officia veritatis iusto aperiam ut quis natus enim!
            nam maxime quibusdam.
          </p>
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
