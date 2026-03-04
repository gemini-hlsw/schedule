import { useState } from "react";
import { cn } from "@/lib/utils";
import { RunButton } from "../ControlPanel/RunButton";
import { ProgramSelectorDialog } from "../ControlPanel/ProgramSelectorDialog";
import { VisibilityRange } from "../ControlPanel/VisibilityRange";
import { DateTimeSelector } from "../ControlPanel/DateTimeSelector";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { PROGRAM_LIST_XT2 } from "@/components/ControlPanel/ProgramSelection/ProgramList";
import { FaCog, FaTrash } from "react-icons/fa";
import { toUtcIsoString } from "@/helpers/utcTime";
import { useMutation } from "@apollo/client";
import { updateBuildParameters } from "./mutation";
import { SiteNightTimesEntry } from "@/gql/graphql";

export default function BuildParameters({
  vertical = false,
}: {
  vertical?: boolean;
}) {
  const [buildParams] = useMutation(updateBuildParameters, {
    fetchPolicy: "no-cache",
  });

  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [programs, updatePrograms] = useState(
    structuredClone(PROGRAM_LIST_XT2)
  );
  const [startTimeGN, setStartTimeGN] = useState<Date | undefined>(undefined);
  const [startTimeGS, setStartTimeGS] = useState<Date | undefined>(undefined);
  const [endTimeGN, setEndTimeGN] = useState<Date | null>(null);
  const [endTimeGS, setEndTimeGS] = useState<Date | null>(null);

  function setProgram(program: string, state: boolean) {
    const auxProgramList = [...programs];
    auxProgramList.find((p) => p.id === program).checked = state;
    updatePrograms(auxProgramList);
  }

  function sendBuildParams() {
    const nightTimes = [];
    if (endTimeGN || startTimeGN) {
      nightTimes.push({
        site: "GN",
        nightTimes: {
          nightEnd: endTimeGN ? toUtcIsoString(endTimeGN) : undefined,
          nightStart: startTimeGN ? toUtcIsoString(startTimeGN) : undefined,
        },
      } as SiteNightTimesEntry);
    }

    if (endTimeGS || startTimeGS) {
      nightTimes.push({
        site: "GS",
        nightTimes: {
          nightEnd: endTimeGS ? toUtcIsoString(endTimeGS) : undefined,
          nightStart: startTimeGS ? toUtcIsoString(startTimeGS) : undefined,
        },
      } as SiteNightTimesEntry);
    }

    buildParams({
      variables: {
        buildParamsInput: {
          nightTimes: nightTimes.length ? nightTimes : undefined,
          programList: programs.filter((p) => p.checked).map((p) => p.id),
          visibilityEnd: date?.to ? toUtcIsoString(date.to) : undefined,
          visibilityStart: date?.from ? toUtcIsoString(date.from) : undefined,
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
        <VisibilityRange
          date={date}
          setDate={setDate}
          vertical={vertical}
          clearButton={
            <FaTrash
              className={cn(
                date?.to || date?.from ? "text-red-500 cursor-pointer" : ""
              )}
              onClick={() => setDate({ from: undefined, to: undefined })}
            />
          }
        />
        <DateTimeSelector
          title="GN Night Start"
          dateTime={startTimeGN!}
          setDateTime={setStartTimeGN}
          setToNow={() => {}}
          setToNowButton={false}
          vertical={vertical}
          clearButton={
            <FaTrash
              className={cn(startTimeGN ? "text-red-500 cursor-pointer" : "")}
              onClick={() => setStartTimeGN(undefined)}
            />
          }
        />
        <DateTimeSelector
          title="GN Night End"
          dateTime={endTimeGN!}
          setDateTime={setEndTimeGN}
          setToNow={() => {}}
          setToNowButton={false}
          vertical={vertical}
          clearButton={
            <FaTrash
              className={cn(endTimeGN ? "text-red-500 cursor-pointer" : "")}
              onClick={() => setEndTimeGN(undefined)}
            />
          }
        />
        <DateTimeSelector
          title="GS Night Start"
          dateTime={startTimeGS!}
          setDateTime={setStartTimeGS}
          setToNow={() => {}}
          setToNowButton={false}
          vertical={vertical}
          clearButton={
            <FaTrash
              className={cn(startTimeGS ? "text-red-500 cursor-pointer" : "")}
              onClick={() => setStartTimeGS(undefined)}
            />
          }
        />
        <DateTimeSelector
          title="GS Night End"
          dateTime={endTimeGS!}
          setDateTime={setEndTimeGS}
          setToNow={() => {}}
          setToNowButton={false}
          vertical={vertical}
          clearButton={
            <FaTrash
              className={cn(endTimeGS ? "text-red-500 cursor-pointer" : "")}
              onClick={() => setEndTimeGS(undefined)}
            />
          }
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
