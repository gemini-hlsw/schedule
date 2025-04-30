import MainTitle from "./MainTitle";
import { useContext } from "react";
import { ThemeContext } from "../../../theme/ThemeProvider";
import { About } from "./About";
import "./Header.scss";
import { GlobalStateContext } from "../../GlobalState/GlobalState";

interface HeaderProps {
  title: string;
  isOnline: boolean;
}

export default function Header({ title, isOnline }: HeaderProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { uuid } = useContext(GlobalStateContext);

  return (
    <div className="header">
      <div className="left">
        <MainTitle title={title} />
      </div>
      <div className="middle">
        <span className={isOnline ? "online" : "offline"}>
          {isOnline ? "Connected" : "Disconnected"}
        </span>
        <span className="id-badge">ID: {uuid}</span>
      </div>
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
