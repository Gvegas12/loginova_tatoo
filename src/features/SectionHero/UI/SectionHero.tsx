import { FC } from "react";
import clsx from "clsx";

import s from "./SectionHero.module.scss";

export const SectionHero: FC = () => {
  return (
    <section className={clsx("section", "container")}>
      <div className={s.wrapper}>
        <p className={s.main_text}>LOGINOVA</p>
        <p className={s.main_text}>TATOO</p>
      </div>
    </section>
  );
};
