import { useState, useRef, useContext, useEffect } from "react";
import { GlobalStateContext } from "../GlobalState/GlobalState";
import "./OperationPanel.scss";

//PrimeReact components
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { Calendar } from "primereact/calendar";
import { SelectButton } from "primereact/selectbutton";
import { Toast } from "primereact/toast";
import { Nullable } from "primereact/ts-helpers";
import { useLazyQuery } from "@apollo/client";
import { scheduleQuery } from "./query";
import { Dialog } from "primereact/dialog";
import { ProgramSelector } from "../ProgramSelector/ProgramSelector";
import { PROGRAM_LIST } from "../ProgramSelector/ProgramList";
import { toUtcIsoString } from "../../helpers/utcTime";

export default function OperationPanel() {
  const defaultDate: Date = new Date("2018-10-01");
  const toast = useRef<Toast>(null);
  const [saveState, setSaveState] = useState(false);
  const [datesState, setDates] = useState<Nullable<(Date | null)[]>>([
    defaultDate,
  ]);
  const [siteState, setSite] = useState(undefined);
  const [programs, updatePrograms] = useState(structuredClone(PROGRAM_LIST));
  const [programSelectorVisible, setProgramSelectorVisible] = useState(false);
  const sites = [
    { label: "GN", value: "GN" },
    { label: "GS", value: "GS" },
    { label: "BOTH", value: "ALL_SITES" },
  ];

  const DEFAULT_NIGHT_LENGTH_HOURS = 10;

  const [startTime, setStartTime] = useState<Date | null>(defaultDate);
  const defaultEnd = new Date(defaultDate);
  defaultEnd.setHours(defaultEnd.getHours() + DEFAULT_NIGHT_LENGTH_HOURS);
  const [endTime, setEndTime] = useState<Date | null>(defaultEnd);

  const [schedule] = useLazyQuery(scheduleQuery, {
    fetchPolicy: "no-cache",
  });

  const {
    thesis,
    power,
    metPower,
    whaPower,
    airPower,
    visPower,
    loadingPlan,
    setLoadingPlan,
    uuid,
  } = useContext(GlobalStateContext);

  function setProgram(program: string, state: boolean) {
    const auxProgramList = [...programs];
    auxProgramList.find((p) => p.name === program).checked = state;
    updatePrograms(auxProgramList);
  }

  function setProgramList(list: string[]) {
    const auxProgramList = [...programs];
    for (let p in auxProgramList) {
      if (!auxProgramList[p].disabled) {
        if (list.includes(auxProgramList[p].name)) {
          auxProgramList[p].checked = true;
        } else {
          auxProgramList[p].checked = false;
        }
      }
    }
    updatePrograms(auxProgramList);
  }

  function resetPrograms() {
    updatePrograms(structuredClone(PROGRAM_LIST));
  }

  const onSaveClick = () => {
    // Creates a json file with all the
    setSaveState(true);
    const output_run = {
      site: siteState,
      date: datesState,
    };
    setTimeout(() => {
      setSaveState(false);
    }, 2000);
  };

  const onLoadClick = () => {
    // TODO: Idealistcally shows a list of saved runs.
    console.log("Load Clicked");
  };

  const isRunDisabled = !(
    siteState &&
    datesState !== null &&
    datesState.length >= 2 &&
    Array.isArray(datesState)
  );

  const onRunClick = () => {
    // setLoadingPlan(true);
    // schedule({
    //   variables: {
    //     scheduleId: uuid,
    //     startTime: datesState[0].toISOString().split(".")[0].replace("T", " "),
    //     endTime: datesState[1].toISOString().split(".")[0].replace("T", " "),
    //     mode: "VALIDATION",
    //     sites: siteState,
    //     numNightsToSchedule: 1,
    //     thesisFactor: thesis,
    //     semesterVisibility: false,
    //     power: power,
    //     whaPower: whaPower,
    //     airPower: airPower,
    //     metPower: metPower,
    //     visPower: visPower,
    //     programs: programs.filter((p) => p.checked).map((p) => p.name),
    //   },
    // });
  };

  return (
    <>
      <Toast ref={toast}></Toast>
      <Panel className="control-panel">
        <SelectButton
          value={siteState}
          options={sites}
          className="toggle-btn p-selectbutton p-component"
          onChange={(e) => setSite(e.value)}
          allowEmpty={false}
        />
        <div>
          <label htmlFor="range" className="mr-2">
            Visibility UT Range
          </label>
          <Calendar
            id="range"
            value={datesState}
            onChange={(e) => setDates(e.value)}
            selectionMode="range"
            readOnlyInput
            showButtonBar
          />
        </div>
        <div>
          <label htmlFor="night-start" className="mr-2">
            UT Night Start
          </label>
          <Calendar
            id="night-start"
            value={startTime}
            onChange={(e) => setStartTime(e.value)}
            showTime
            hourFormat="24"
          />
        </div>
        <div>
          <label htmlFor="night-end" className="mr-2">
            UT Night End
          </label>
          <Calendar
            id="night-end"
            value={endTime}
            onChange={(e) => setEndTime(e.value)}
            showTime
            hourFormat="24"
          />
        </div>
        {/* <Button
          label="Programs Selection"
          onClick={() => setProgramSelectorVisible(true)}
        /> */}
        <div className="btn-group">
          <Button
            label="RUN"
            icon="pi pi-play"
            className="p-button-success"
            loading={loadingPlan}
            onClick={onRunClick}
            disabled={isRunDisabled || loadingPlan}
            loadingIcon="pi pi-spin pi-spinner"
          />
        </div>
      </Panel>
      <Dialog
        header="Programs Selection"
        visible={programSelectorVisible}
        style={{ width: "80vw", height: "80vh" }}
        className="program-selector-modal"
        onHide={() => {
          if (!programSelectorVisible) return;
          setProgramSelectorVisible(false);
        }}
      >
        <ProgramSelector
          programs={programs}
          setProgram={setProgram}
          setProgramList={setProgramList}
          resetPrograms={resetPrograms}
        />
      </Dialog>
    </>
  );
}
