import { useContext } from "react";
import { GlobalStateContext } from "../GlobalState/GlobalState";
import RankerTweaker from "../RankerTweaker/RankerTweaker";
import ControlPanel from "../ControlPanel/ControlPanel";
import WeatherConditions from "../WeatherConditions/WeatherConditions";
import { Result } from "./Result";
import { cn } from "@/lib/utils";
import { useLazyQuery } from "@apollo/client";
import { scheduleRtQuery } from "./query";
import { toUtcIsoString } from "@/helpers/utcTime";
import { scheduleV2Query } from "./queryV2";
import {
  PROGRAM_LIST,
  PROGRAM_LIST_XT2,
  ProgramListType,
} from "../ControlPanel/ProgramSelection/ProgramList";
import { DisplayWeather } from "../WeatherConditions/DisplayWeather";
import OnDemandControl from "../ControlPanel/OnDemandControl";
import BuildParameters from "../BuildParameters/BuildParameters";

export default function Operation({ v2 = false }: { v2?: boolean }) {
  const [scheduleRt] = useLazyQuery(scheduleRtQuery, {
    fetchPolicy: "no-cache",
  });

  const [scheduleV2] = useLazyQuery(scheduleV2Query, {
    fetchPolicy: "no-cache",
  });

  const {
    rtPlan,
    thesis,
    power,
    metPower,
    whaPower,
    airPower,
    visPower,
    loadingPlan,
    setLoadingPlan,
    imageQuality,
    cloudCover,
    windDirection,
    windSpeed,
    uuid,
  } = useContext(GlobalStateContext);

  function runPlan(
    date: { from: Date; to?: Date },
    startTime: Date,
    endTime: Date,
    site: string,
    programs: ProgramListType[]
  ) {
    setLoadingPlan(true);
    const variables = {
      startTime: toUtcIsoString(date.from),
      endTime: toUtcIsoString(date.to),
      nightStartTime: toUtcIsoString(startTime),
      nightEndTime: toUtcIsoString(endTime),
      imageQuality: imageQuality,
      cloudCover: cloudCover,
      windSpeed: windSpeed,
      windDirection: windDirection,
      sites: site,
      thesisFactor: thesis,
      power: power,
      whaPower: whaPower,
      airPower: airPower,
      metPower: metPower,
      visPower: visPower,
      programs: programs.filter((p) => p.checked).map((p) => p.id),
    };
    if (v2) {
      scheduleV2({
        variables: variables,
      });
    } else {
      scheduleRt({
        variables: { ...variables, scheduleId: uuid },
      });
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row md:flex-row w-full gap-2 py-2">
        <div className={cn("grow flex gap-2", v2 ? "flex-row" : "flex-col")}>
          {v2 ? (
            <OnDemandControl
              vertical={v2}
              runPlan={runPlan}
              programList={v2 ? PROGRAM_LIST_XT2 : PROGRAM_LIST}
              loadingPlan={loadingPlan}
            />
          ) : (
            <ControlPanel
              vertical={v2}
              runPlan={runPlan}
              programList={v2 ? PROGRAM_LIST_XT2 : PROGRAM_LIST}
              loadingPlan={loadingPlan}
            />
          )}
          <RankerTweaker vertical={v2} />
          {v2 && <BuildParameters vertical={true} />}
          <WeatherConditions vertical={v2} updateButton={v2} />
          {v2 && <DisplayWeather />}
        </div>
      </div>
      <Result rtPlan={rtPlan} />
    </div>
  );
}
