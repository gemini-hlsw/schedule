import MainTitle from "./MainTitle";
import { useContext } from "react";
import { ThemeContext } from "../../../theme/ThemeProvider";
import { About } from "./About";
// import "./Header.scss";
import { GlobalStateContext } from "../../GlobalState/GlobalState";
import { cn } from "../../../lib/utils";
import { Button } from "@/components/ui/button";
import { FaMoon, FaSun } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

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
        "px-4 h-8 shrink-0 dark:bg-white/10 dark:text-white",
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
          <Badge
            variant="default"
            className={cn(
              "bg-black/10 dark:bg-white/10",
              "text-black dark:text-white"
            )}
          >
            ID: {uuid}
          </Badge>
        </div>
      </div>
      <div className={cn("flex flex-row items-center gap-2 shrink")}>
        <About />
        <Button variant="outline" size="xs" onClick={toggleTheme}>
          {theme === "dark" ? <FaMoon /> : <FaSun />}
          <span className="label">{theme}</span>
        </Button>
      </div>
    </div>
  );
}
