import { useState } from "react";
import { cn } from "@/lib/utils";
import { RunButton } from "../ControlPanel/RunButton";
import { ProgramSelectorDialog } from "../ControlPanel/ProgramSelectorDialog";
import { VisibilityRange } from "../ControlPanel/VisibilityRange";
import { DateTimeSelector } from "../ControlPanel/DateTimeSelector";
import { getDefaultDate } from "@/helpers/defaultDate";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { PROGRAM_LIST_XT2 } from "@/components/ControlPanel/ProgramSelection/ProgramList";
import { FaCog } from "react-icons/fa";
import { toUtcIsoString } from "@/helpers/utcTime";
import { useMutation } from "@apollo/client";
import { updateBuildParameters } from "./mutation";

export default function BuildParameters({
  vertical = false,
}: {
  vertical?: boolean;
}) {
  const [buildParams] = useMutation(updateBuildParameters, {
    fetchPolicy: "no-cache",
  });

  const DEFAULT_NIGHT_LENGTH_HOURS = 10;
  const defaultDate = getDefaultDate(false);
  const [date, setDate] = useState<DateRange | undefined>({
    from: defaultDate,
    to: addDays(defaultDate, 10),
  });
  const [programs, updatePrograms] = useState(
    structuredClone(PROGRAM_LIST_XT2)
  );
  const [startTimeGN, setStartTimeGN] = useState<Date | undefined>(defaultDate);
  const [startTimeGS, setStartTimeGS] = useState<Date | undefined>(defaultDate);
  const defaultEnd = new Date(defaultDate);
  defaultEnd.setHours(defaultEnd.getHours() + DEFAULT_NIGHT_LENGTH_HOURS);
  const [endTimeGN, setEndTimeGN] = useState<Date | null>(defaultEnd);
  const [endTimeGS, setEndTimeGS] = useState<Date | null>(defaultEnd);

  function setProgram(program: string, state: boolean) {
    const auxProgramList = [...programs];
    auxProgramList.find((p) => p.id === program).checked = state;
    updatePrograms(auxProgramList);
  }

  function sendBuildParams() {
    buildParams({
      variables: {
        buildParamsInput: {
          nightTimes: [
            {
              site: "GN",
              nightTimes: {
                nightEnd: toUtcIsoString(endTimeGN),
                nightStart: toUtcIsoString(startTimeGN),
              },
            },
            {
              site: "GS",
              nightTimes: {
                nightEnd: toUtcIsoString(endTimeGS),
                nightStart: toUtcIsoString(startTimeGS),
              },
            },
          ],
          programList: programs.filter((p) => p.checked).map((p) => p.id),
          visibilityEnd: toUtcIsoString(date.to),
          visibilityStart: toUtcIsoString(date.from),
        },
      },
    });
  }

  return (
    <div
      className={cn(
        "border rounded-md flex flex-col gap-2 p-3 flex-wrap",
        "dark:bg-white/20 bg-black/10"
      )}
    >
      <h1 className="font-bold">Build Parameters</h1>
      <div
        className={cn(
          "flex gap-1 items-center",
          vertical ? "flex-col" : "flex-row"
        )}
      >
        <VisibilityRange date={date} setDate={setDate} vertical={vertical} />
        <DateTimeSelector
          title="GN Night Start"
          dateTime={startTimeGN!}
          setDateTime={setStartTimeGN}
          setToNow={() => {}}
          setToNowButton={false}
          vertical={vertical}
        />
        <DateTimeSelector
          title="GN Night End"
          dateTime={endTimeGN!}
          setDateTime={setEndTimeGN}
          setToNow={() => {}}
          setToNowButton={false}
          vertical={vertical}
        />
        <DateTimeSelector
          title="GS Night Start"
          dateTime={startTimeGS!}
          setDateTime={setStartTimeGS}
          setToNow={() => {}}
          setToNowButton={false}
          vertical={vertical}
        />
        <DateTimeSelector
          title="GS Night End"
          dateTime={endTimeGS!}
          setDateTime={setEndTimeGS}
          setToNow={() => {}}
          setToNowButton={false}
          vertical={vertical}
        />
        <ProgramSelectorDialog
          programs={programs}
          setProgram={setProgram}
          resetPrograms={() =>
            updatePrograms(structuredClone(PROGRAM_LIST_XT2))
          }
          validationMode={false}
          full={true}
        />
        <RunButton
          loadingPlan={false}
          run={sendBuildParams}
          isRunDisabled={false}
          title="Send Parameters"
          icon={<FaCog />}
          full={true}
        />
      </div>
    </div>
  );
}
