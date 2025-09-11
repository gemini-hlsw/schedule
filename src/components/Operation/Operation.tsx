import { useContext } from "react";
// import NightPlansList from "../NightPlansList/NightPlansList"
import { Divider } from "primereact/divider";
import { GlobalStateContext } from "../GlobalState/GlobalState";

import "./Operation.scss";

// For testing
import RankerTweaker from "../RankerTweaker/RankerTweaker";

import { Panel } from "primereact/panel";
import OperationPanel from "../OperationPanel/OperationPanel";
import WeatherConditions from "../WeatherConditions/WeatherConditions";
import RtPlan from "./RtPlan";

export default function Operation() {
  const { rtPlan } = useContext(GlobalStateContext);

  return (
    <div className="operation">
      <OperationPanel />
      <Panel header="Ranker Tweaker">
        <RankerTweaker />
      </Panel>
      <Panel header="Weather Conditions">
        <WeatherConditions />
      </Panel>
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
