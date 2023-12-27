import { useState, useRef, useEffect, useContext, SetStateAction } from 'react'
import { useLazyQuery } from '@apollo/client'
import { scheduleQuery } from './query'
import { GlobalStateContext } from '../GlobalState/GlobalState'
import "./ControlPanel.scss"

//PrimeReact components
import { Button } from 'primereact/button'
import { Panel } from 'primereact/panel'
import { Calendar } from 'primereact/calendar'
import { SelectButton } from 'primereact/selectbutton'
import { Toast } from 'primereact/toast'
import { Nullable } from "primereact/ts-helpers";
import { SchedulerModes } from '../../gql/graphql'



export default function ControlPanel() {
  const toast = useRef<Toast>(null)
  const [saveState, setSaveState] = useState(false)
  const [datesState, setDates] = useState<Nullable<(Date | null)[]>>(null);
  const [siteState, setSite] = useState(undefined)
  const sites = [
    { label: "North", value: "GN" },
    { label: "South", value: "GS" },
    { label: "All", value: "ALL_SITES" }
  ]

  const [schedule, {loading, error, data}] = useLazyQuery(scheduleQuery)
  
  const { setNightPlans, setPlansSummary } = useContext(GlobalStateContext)

  const onSaveClick = () => {
    // Creates a json file with all the 
    setSaveState(true)
    const output_run = {
      "site": siteState,
      "date": datesState
    }
    setTimeout(() => {
      setSaveState(false)
    }, 2000)
  }

  const onLoadClick = () => {
    // TODO: Idealistcally shows a list of saved runs.
    console.log("Load Clicked")
  }

  const onRunClick = () => {
    // call GraphQL endpoint for new schedule acording to parameters
    if (siteState && datesState !== null && Array.isArray(datesState)) {
      schedule({
        variables: {
          startTime: datesState[0].toISOString().split('.')[0].replace('T', ' '),
          endTime: datesState[1].toISOString().split('.')[0].replace('T', ' '),
          sites: siteState,
          numNightsToSchedule:3,
          mode: 'VALIDATION',


        }
      })
    } else {
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Missing parameters to run Validation',
        life: 3000
      })
    }
  }

  useEffect(() => {
    if (error) {
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to create a new schedule',
        life: 3000
      })
    }
  }, [error])

  useEffect(() => {
    if (Boolean(data)) {
      setNightPlans(data?.schedule.nightPlans as unknown as SetStateAction<[]>)
      setPlansSummary(data?.schedule.plansSummary)
    }
  }, [data])

  return (
    <>
      <Toast ref={toast}></Toast>
      <Panel className="control-panel" header="Control Panel">
        <div className="location-buttons">
          <SelectButton
            value={siteState}
            options={sites}
            className="toggle-btn p-selectbutton p-component"
            onChange={(e) => setSite(e.value)} />
        </div>
        <div className="calendar">
          <Calendar
            id="range"
            value={datesState}
            onChange={(e) => setDates(e.value)}
            selectionMode="range"
            readOnlyInput
            showButtonBar
            showIcon
          />
        </div>
        <div className="run-buttons">
          <Button label="RUN" icon="pi pi-play" loading={loading} onClick={onRunClick} />
          <Button label="SAVE" icon="pi pi-save" loading={saveState} onClick={onSaveClick} />
          <Button label="LOAD" icon="pi pi-arrow-circle-up" loading={saveState} onClick={onLoadClick}/>
        </div>
      </Panel>
    </>
  )
}
