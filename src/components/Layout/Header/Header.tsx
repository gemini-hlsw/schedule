import MainTitle from "./MainTitle";
import { useContext } from "react";
import { ThemeContext } from "../../../theme/ThemeProvider";
import { About } from "./About";
import "./Header.scss";

interface HeaderProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

export default function Header({ title, children }: HeaderProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <div className="left">
        <MainTitle title={title} />
      </div>
      <div className="middle">{children}</div>
      <div className="right">
        <About />
        <button className="button" onClick={toggleTheme}>
          <i className={`icon pi pi-${theme === "dark" ? "moon" : "sun"}`} />
          <span className="label">{theme}</span>
        </button>
      </div>
    </div>
  );
}
