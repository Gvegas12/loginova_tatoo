import { FC } from "react";
import clsx from "clsx";

import s from "./SectionCallback.module.scss";

export const SectionCallback: FC = () => {
  return (
    <section className={clsx("container")}>
      <div className="container">
        <div className={s.wrapper}>
          <h2 className={s.title}>CALL BACK</h2>
          <form className={s.form}>
            <div className={s.inputs}>
              <input className={s.input} type="text" />
              <input className={s.input} type="text" />
              <button className={s.btn}>Call me back</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
