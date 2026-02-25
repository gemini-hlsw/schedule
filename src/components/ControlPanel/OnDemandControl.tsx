import { useEffect, useState } from "react";
import { ProgramSelectorDialog } from "./ProgramSelectorDialog";
import { ProgramListType } from "./ProgramSelection/ProgramList";
import { cn } from "@/lib/utils";
import { RunButton } from "./RunButton";

export default function OnDemandControl({
  loadingPlan,
  runPlan,
  programList,
  vertical = false,
  validationMode = false,
}: {
  loadingPlan: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  runPlan: Function;
  programList: ProgramListType[];
  vertical?: boolean;
  validationMode?: boolean;
}) {
  const [programs, updatePrograms] = useState(structuredClone(programList));

  useEffect(() => {
    updatePrograms(structuredClone(programList));
  }, [programList]);

  function setProgram(program: string, state: boolean) {
    const auxProgramList = [...programs];
    auxProgramList.find((p) => p.id === program).checked = state;
    updatePrograms(auxProgramList);
  }

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
      <ProgramSelectorDialog
        programs={programs}
        setProgram={setProgram}
        resetPrograms={() => updatePrograms(structuredClone(programList))}
        validationMode={validationMode}
      />
    </div>
  );
}
