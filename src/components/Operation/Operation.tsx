import { useContext } from "react";
// import NightPlansList from "../NightPlansList/NightPlansList"
import { Divider } from "primereact/divider";
import { GlobalStateContext } from "../GlobalState/GlobalState";

import "./Operation.scss";

// For testing
import SummaryTable from "../SummaryTable/SummaryTable";
import RankerTweaker from "../RankerTweaker/RankerTweaker";

import { Panel } from "primereact/panel";
import Results from "../Results/Results";
import OperationPanel from "../OperationPanel/OperationPanel";
import WeatherConditions from "../WeatherConditions/WeatherConditions";

export default function Operation() {
  const { nightPlans, plansSummary } = useContext(GlobalStateContext);

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
      {plansSummary &&
        plansSummary.summary &&
        Object.keys(plansSummary.summary).length > 0 && (
          <SummaryTable plansSummary={plansSummary} />
        )}
      <div className="bottom">
        {nightPlans && nightPlans.length > 0 && (
          <>
            <Divider />
            <Results plans={nightPlans} />
          </>
        )}
      </div>
    </div>
  );
}
