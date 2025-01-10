import React, { useContext, useEffect } from "react";
import ControlPanel from "../ControlPanel/ControlPanel";
import InputsPanel from "../InputsPanel/InputsPanel";
// import NightPlansList from "../NightPlansList/NightPlansList"
import { Divider } from "primereact/divider";
import { GlobalStateContext } from "../GlobalState/GlobalState";

import "./Validation.scss";

// For testing
import SummaryTable from "../SummaryTable/SummaryTable";
import RankerTweaker from "../RankerTweaker/RankerTweaker";

import { Panel } from "primereact/panel";
import Results from "../Results/Results";

export default function Validation() {
  const { nightPlans, plansSummary } = useContext(GlobalStateContext);

  return (
    <div className="validation">
      <ControlPanel />
      <InputsPanel />
      <Panel header="Ranker Tweaker">
        <RankerTweaker />
      </Panel>
      <Divider />
      {plansSummary && Object.keys(plansSummary.summary).length > 0 && (
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
