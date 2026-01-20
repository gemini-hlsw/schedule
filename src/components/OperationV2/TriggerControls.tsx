import { useState, useRef, useContext } from "react";
import { GlobalStateContext } from "../GlobalState/GlobalState";

//PrimeReact components
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { Calendar } from "primereact/calendar";
import { SelectButton } from "primereact/selectbutton";
import { Toast } from "primereact/toast";
import { Nullable } from "primereact/ts-helpers";
import { useLazyQuery } from "@apollo/client";
import { scheduleV2Query } from "./query";
import { Dialog } from "primereact/dialog";
import { ProgramSelector } from "../OperationProgramSelection/ProgramSelector";
import { PROGRAM_LIST } from "../OperationProgramSelection/ProgramList";
import { toUtcIsoString } from "../../helpers/utcTime";

export function TriggerControls() {
  const defaultDate: Date = new Date();
  defaultDate.setDate(defaultDate.getDate() + 1);
  defaultDate.setHours(0);
  defaultDate.setMinutes(0);
  defaultDate.setSeconds(0);
  const toast = useRef<Toast>(null);
  const [datesState, setDates] = useState<Nullable<(Date | null)[]>>([
    defaultDate,
  ]);
  const [siteState, setSite] = useState(undefined);
  const [programs, updatePrograms] = useState(structuredClone(PROGRAM_LIST));
  const [programSelectorVisible, setProgramSelectorVisible] = useState(false);
  const sites = [
    { label: "GN", value: "GN" },
    { label: "GS", value: "GS" },
    // { label: "BOTH", value: "ALL_SITES" },
  ];

  const DEFAULT_NIGHT_LENGTH_HOURS = 10;

  const [startTime, setStartTime] = useState<Date | null>(defaultDate);
  const defaultEnd = new Date(defaultDate);
  defaultEnd.setHours(defaultEnd.getHours() + DEFAULT_NIGHT_LENGTH_HOURS);
  const [endTime, setEndTime] = useState<Date | null>(defaultEnd);

  const [scheduleV2] = useLazyQuery(scheduleV2Query, {
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
    imageQuality,
    cloudCover,
    windDirection,
    windSpeed,
    uuid,
  } = useContext(GlobalStateContext);

  function setToNow() {
    const now = new Date();
    now.setHours(now.getHours() + now.getTimezoneOffset() / 60);
    setStartTime(new Date(toUtcIsoString(now)));
  }

  function setProgram(program: string, state: boolean) {
    const auxProgramList = [...programs];
    auxProgramList.find((p) => p.id === program).checked = state;
    updatePrograms(auxProgramList);
  }

  function resetPrograms() {
    updatePrograms(structuredClone(PROGRAM_LIST));
  }

  const isRunDisabled = !(
    siteState &&
    datesState !== null &&
    datesState.length >= 2 &&
    Array.isArray(datesState)
  );

  const onRunClick = () => {
    setLoadingPlan(true);
    scheduleV2({
      variables: {
        startTime: toUtcIsoString(datesState[0]),
        endTime: toUtcIsoString(datesState[1]),
        nightStartTime: toUtcIsoString(startTime),
        nightEndTime: toUtcIsoString(endTime),
        imageQuality: imageQuality,
        cloudCover: cloudCover,
        windSpeed: windSpeed,
        windDirection: windDirection,
        sites: siteState,
        thesisFactor: thesis,
        power: power,
        whaPower: whaPower,
        airPower: airPower,
        metPower: metPower,
        visPower: visPower,
        programs: programs.filter((p) => p.checked).map((p) => p.id),
      },
    });
  };

  return (
    <>
      <Toast ref={toast}></Toast>
      <Panel className="control-panel">
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
            UT Plan Start
          </label>
          <Calendar
            id="night-start"
            value={startTime}
            onChange={(e: { value: Date | null }) => setStartTime(e.value)}
            showTime
            hourFormat="24"
          />
        </div>
        <Button
          label="Set plan start to now"
          className="p-button-success"
          onClick={setToNow}
          loadingIcon="pi pi-spin pi-spinner"
        />
        <div>
          <label htmlFor="night-end" className="mr-2">
            UT Plan End
          </label>
          <Calendar
            id="night-end"
            value={endTime}
            onChange={(e: { value: Date | null }) => setEndTime(e.value)}
            showTime
            hourFormat="24"
          />
        </div>
        <Button
          label="Programs Selection"
          onClick={() => setProgramSelectorVisible(true)}
        />
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
          resetPrograms={resetPrograms}
        />
      </Dialog>
    </>
  );
}
