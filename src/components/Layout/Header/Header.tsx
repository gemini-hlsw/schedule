import MainTitle from "./MainTitle";
import { useContext } from "react";
import { ThemeContext } from "../../../theme/ThemeProvider";
import { About } from "./About";
import "./Header.scss";
import { GlobalStateContext } from "../../GlobalState/GlobalState";
import { cn } from "../../../lib/utils";

interface HeaderProps {
  title: string;
  isOnline: boolean;
}

export default function Header({ title, isOnline }: HeaderProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { uuid } = useContext(GlobalStateContext);

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between",
        "px-4 h-8 dark:bg-white/10 dark:text-white",
        "light:bg-black/10 light:text-black",
        "border-b border-gray-200 dark:border-gray-700"
      )}
    >
      <div className={cn("flex flex-row items-center shrink")}>
        <MainTitle title={title} />
      </div>
      <div className={cn("mx-auto")}>
        <div className="flex flex-row gap-2 grow items-center">
          <span className={isOnline ? "text-green-500" : "text-red-500"}>
            {isOnline ? "Connected" : "Disconnected"}
          </span>
          <span
            className={cn(
              "light:bg-black/10 dark:bg-white/10 text-sm font-mono px-2 rounded-full"
            )}
          >
            ID: {uuid}
          </span>
        </div>
      </div>
      <div className={cn("flex flex-row items-center gap-2 shrink")}>
        <About />
        <button
          className={cn(
            "text-white bg-gray-600 hover:bg-gray-700",
            "focus:ring-4 focus:ring-gray-300 font-medium rounded-sm",
            "text-sm px-3 py-0.5 dark:bg-gray-600 dark:hover:bg-gray-700",
            "dark:focus:ring-gray-800 cursor-pointer",
            "flex flex-row gap-1"
          )}
          onClick={toggleTheme}
        >
          <i className={`icon pi pi-${theme === "dark" ? "moon" : "sun"}`} />
          <span className="label">{theme}</span>
        </button>
      </div>
    </div>
  );
}
