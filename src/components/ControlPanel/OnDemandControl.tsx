import { useEffect, useState } from "react";
import { ProgramListType } from "./ProgramSelection/ProgramList";
import { cn } from "@/lib/utils";
import { RunButton } from "./RunButton";

export default function OnDemandControl({
  loadingPlan,
  runPlan,
  programList,
  vertical = false,
}: {
  loadingPlan: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  runPlan: Function;
  programList: ProgramListType[];
  vertical?: boolean;
}) {
  const [programs, updatePrograms] = useState(structuredClone(programList));

  useEffect(() => {
    updatePrograms(structuredClone(programList));
  }, [programList]);

  return (
    <div
      className={cn(
        "border rounded-md flex gap-2 p-3 flex-wrap",
        "dark:bg-white/20 bg-black/10",
        vertical ? "flex-col grow" : "flex-row"
      )}
    >
      <RunButton
        loadingPlan={loadingPlan}
        run={() =>
          runPlan(
            { from: new Date(), to: new Date() },
            new Date(),
            new Date(),
            "GN",
            programs
          )
        }
        isRunDisabled={loadingPlan}
      />
    </div>
  );
}
