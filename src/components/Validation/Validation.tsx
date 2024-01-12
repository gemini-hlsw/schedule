import React, { useContext } from "react"
import ControlPanel from "../ControlPanel/ControlPanel"
import InputsPanel from "../InputsPanel/InputsPanel"
// import NightPlansList from "../NightPlansList/NightPlansList"
import { Divider } from 'primereact/divider'
import { GlobalStateContext } from "../GlobalState/GlobalState"

import "./Validation.scss"

// For testing
import SummaryTable from "../SummaryTable/SummaryTable"

import { Panel } from "primereact/panel"
import Results from "../Results/Results"
import RankerTweaker from "../RankerTweaker/rankerTweaker"


export default function Validation() {
  const { nightPlans, plansSummary } = useContext(GlobalStateContext)


  return (
    <div className="validation">
      <ControlPanel />
      <InputsPanel />
      <Panel header="Ranker Tweaker">
        <RankerTweaker />
      </Panel>
      <Divider />
      {(Object.keys(plansSummary).length > 0) && <>
        <SummaryTable summary={plansSummary} />
      </>}
      <div className="bottom">
        {nightPlans.length > 0 && <>
          <Divider />
          <Results plans={nightPlans} />
        </>}
      </div>
    </div>
  )
}