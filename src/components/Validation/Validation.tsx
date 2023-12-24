import { useContext } from "react"
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


export default function Validation() {
  const { nightPlans, plansSummary } = useContext(GlobalStateContext)


  return (
    <div className="validation">
      <ControlPanel />
      <InputsPanel />
      <Panel header="Ranker Tweaker">
        <p>Replace with ranker tweaker</p>
      </Panel>
      <Divider />
      {(plansSummary !== undefined) && <>
        <SummaryTable summary={plansSummary} />
        <Panel header="Stats">
          <p>Replace with stats... Band, Instrument, Weather</p>
        </Panel>
      </>}
      <div className="bottom">
        {Boolean(nightPlans) && <>
          <Divider />
          <Results plans={nightPlans} />
        </>}
      </div>
    </div>
  )
}