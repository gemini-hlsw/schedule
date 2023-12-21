import { useContext } from "react"
import ControlPanel from "../ControlPanel/ControlPanel"
import InputsPanel from "../InputsPanel/InputsPanel"
import NightPlansList from "../NightPlansList/NightPlansList"
import { Divider } from 'primereact/divider'
import { GlobalStateContext } from "../GlobalState/GlobalState"

import "./Validation.scss"

// For testing
import SummaryTable from "../SummaryTable/SummaryTable"

import { Panel } from "primereact/panel"


export default function Validation() {
  const { nightPlans, plansSummary } = useContext(GlobalStateContext)


  return (
    <div className="validation">
      <div className="upper">
        <div className="left">
          <ControlPanel />
        </div>
        <div className="right">
          <InputsPanel />
          <Panel header="Ranker Tweaker" style={{marginTop: "10px"}}>
            <p>Replace with ranker tweaker</p>
          </Panel>
        </div>
      </div>
      <Divider />
      <div className="middle">
      {Boolean(nightPlans) && (plansSummary !== undefined)  && <>
        <div className="left">
          <SummaryTable summary={plansSummary} />
        </div>
        <div className="right">
          <Panel header="Stats">
              <p>Replace with stats... Band, Instrument, Weather</p>
            </Panel>
          </div>
        </>}
      </div>
      <div className="bottom">
        {Boolean(nightPlans.length) && <>
          <Divider />
          <NightPlansList plans={nightPlans} />
        </>}
      </div>
    </div>
  )
}