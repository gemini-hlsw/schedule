import { useContext } from "react"
import ControlPanel from "../ControlPanel/ControlPanel"
import InputsPanel from "../InputsPanel/InputsPanel"
import NightPlansList from "../NightPlansList/NightPlansList"
import { Divider } from 'primereact/divider'
import { GlobalStateContext } from "../GlobalState/GlobalState"

import "./Validation.scss"

// For testing
import SummaryTable from "../SummaryTable/SummaryTable"
import { Summary } from "../SummaryTable/SummaryTable"
import { Panel } from "primereact/panel"


const default_summary: Summary[] = [
  {
    program: "GS-2018B-Q-201",
    completed: "90%",
    score: '2.3405'
  },
  {
    program: "GS-2018B-Q-217",
    completed: "40%",
    score: '1.905'
  },
  {
    program: "GN-2019A-FT-201-9",
    completed: "10%",
    score: '1.0405'
  },
]

export default function Validation() {
  const { nightPlans } = useContext(GlobalStateContext)

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
        <div className="left">
          <SummaryTable summaries={default_summary} />
        </div>
        <div className="right">
          <Panel header="Stats">
            <p>Replace with stats... Band, Instrument, Weather</p>
          </Panel>
        </div>
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