import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ImSpinner9 } from "react-icons/im";
import { FaPlay } from "react-icons/fa";

export function RunButton({
  loadingPlan,
  run,
  isRunDisabled,
}: {
  loadingPlan: boolean;
  run: () => void;
  isRunDisabled: boolean;
}) {
  return (
    <Button
      variant="default"
      size="sm"
      className={cn(
        "dark:text-white text-black dark:bg-green-800 bg-green-400",
        "dark:hover:bg-green-700 hover:bg-green-500"
      )}
      disabled={isRunDisabled || loadingPlan}
      onClick={run}
    >
      {loadingPlan ? <ImSpinner9 className="animate-spin" /> : <FaPlay />}
      RUN
    </Button>
  );
}
