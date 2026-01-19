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
import { ManualTrigger } from "./ManualTrigger";

export default function OperationV2() {
  const { rtPlan } = useContext(GlobalStateContext);

  return (
    <div className="operation">
      {/* <OperationPanel /> */}
      <ManualTrigger />
      <Panel header="Ranker Tweaker">
        <RankerTweaker />
      </Panel>
      <Panel header="Weather Conditions">
        <WeatherConditions updateButton={true} />
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
