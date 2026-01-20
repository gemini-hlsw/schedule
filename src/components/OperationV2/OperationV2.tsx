import { useContext } from "react";
import { Divider } from "primereact/divider";
import { GlobalStateContext } from "../GlobalState/GlobalState";

import "./Operation.scss";

import { Panel } from "primereact/panel";
import WeatherConditionsTW from "../WeatherConditions/WeatherConditionsTW";
import RtPlan from "./RtPlan";
import { TriggerControls } from "./TriggerControls";
import RankerTweakerTW from "../RankerTweaker/RankerTweakerTW";

export default function OperationV2() {
  const { rtPlan } = useContext(GlobalStateContext);

  return (
    <div>
      <TriggerControls />
      <div className="flex flex-col md:flex-row w-full gap-2 mt-2">
        <Panel header="Ranker Tweaker" className="grow">
          <RankerTweakerTW />
        </Panel>
        <Panel header="Weather Conditions" className="grow">
          <WeatherConditionsTW updateButton={true} />
        </Panel>
      </div>
      <Divider />
      <div className="bottom">
        {rtPlan && rtPlan.plansPerSite && rtPlan.plansPerSite.length > 0 && (
          <>
            <Divider />
            <RtPlan rtPlan={rtPlan} />
          </>
        )}
      </div>
    </div>
  );
}
