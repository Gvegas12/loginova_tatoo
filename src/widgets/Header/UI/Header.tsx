import { FC } from "react";
import clsx from "clsx";

import s from "./Header.module.scss";

interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => (
  <header className={clsx(s.Header, className)}>
    <div className="logo">Tatoo</div>
    <nav>
      <ul className={s.navList}>
        <li>
          <p>TATOO</p>
        </li>
        <li>
          <p>PRICE</p>
        </li>
        <li>
          <p>PORTFOLIO</p>
        </li>
        <li>
          <p>STORE</p>
        </li>
      </ul>
    </nav>
  </header>
);
