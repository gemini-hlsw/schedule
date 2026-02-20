import { useContext } from "react";
import { GlobalStateContext } from "../GlobalState/GlobalState";

// For testing
import SummaryTable from "../SummaryTable/SummaryTable";
import RankerTweaker from "../RankerTweaker/RankerTweaker";
import Results from "../Results/Results";
import {
  PROGRAM_LIST_VALIDATION,
  ProgramListType,
} from "../ControlPanel/ProgramSelection/ProgramList";
import { useLazyQuery } from "@apollo/client";
import { scheduleQuery } from "./query";
import { toUtcIsoString } from "@/helpers/utcTime";
import ControlPanel from "../ControlPanel/ControlPanel";
import { type DateRange } from "react-day-picker";

export default function Validation() {
  const {
    nightPlans,
    plansSummary,
    thesis,
    power,
    metPower,
    whaPower,
    airPower,
    visPower,
    loadingPlan,
    setLoadingPlan,
    uuid,
  } = useContext(GlobalStateContext);

  const [schedule] = useLazyQuery(scheduleQuery, {
    fetchPolicy: "no-cache",
  });

  function runPlan(
    date: DateRange,
    site: string,
    programs: ProgramListType[],
    numNight: number,
    semesterVisibility: boolean
  ) {
    setLoadingPlan(true);
    schedule({
      variables: {
        scheduleId: uuid,
        startTime: toUtcIsoString(date.from),
        endTime: toUtcIsoString(date.to),
        mode: "VALIDATION",
        sites: site,
        numNightsToSchedule: numNight,
        thesisFactor: thesis,
        semesterVisibility: semesterVisibility,
        power: power,
        whaPower: whaPower,
        airPower: airPower,
        metPower: metPower,
        visPower: visPower,
        programs: programs.filter((p) => p.checked).map((p) => p.id),
      },
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <ControlPanel
        runPlan={runPlan}
        programList={PROGRAM_LIST_VALIDATION}
        loadingPlan={loadingPlan}
        validationMode={true}
      />
      <RankerTweaker />
      {/* <InputsPanel /> */}
      <SummaryTable plansSummary={plansSummary} />
      <Results plans={nightPlans} />
    </div>
  );
}
