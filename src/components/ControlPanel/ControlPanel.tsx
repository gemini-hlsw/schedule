import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  SetStateAction,
} from "react";
import { useLazyQuery } from "@apollo/client";
import { scheduleQuery } from "./query";
import { GlobalStateContext } from "../GlobalState/GlobalState";
import "./ControlPanel.scss";

//PrimeReact components
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { Calendar } from "primereact/calendar";
import { SelectButton } from "primereact/selectbutton";
import { Toast } from "primereact/toast";
import { FileUpload, FileUploadHandlerEvent } from "primereact/fileupload";
import { ProgressSpinner } from "primereact/progressspinner";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { Nullable } from "primereact/ts-helpers";
import { NightPlanType } from "../../types";
import { WebsocketContext } from "../../websocket/WebsocketProvider";
import NightPlan from "../Results/NightPlan";

export default function ControlPanel() {
  const defaultDate: Date = new Date("2018-10-01");
  const toast = useRef<Toast>(null);
  const fileToast = useRef<Toast>(null);
  const [saveState, setSaveState] = useState(false);
  const [datesState, setDates] = useState<Nullable<(Date | null)[]>>([
    defaultDate,
  ]);
  const [siteState, setSite] = useState(undefined);
  const [fileData, setFileData] = useState<any | null>(null);
  const sites = [
    { label: "GN", value: "GN" },
    { label: "GS", value: "GS" },
    { label: "BOTH", value: "ALL_SITES" },
  ];

  const [numNight, setNumNight] = useState<number>(1);

  const { isReady, rxMessage, txMessage } = useContext(WebsocketContext);
  const [schedule, { loading, error, data }] = useLazyQuery(scheduleQuery);

  const {
    setNightPlans,
    setPlansSummary,
    thesis,
    power,
    metPower,
    whaPower,
    visPower,
    loadingPlan,
    setLoadingPlan,
  } = useContext(GlobalStateContext);

  const customBase64Uploader = async (event: FileUploadHandlerEvent) => {
    // convert file to base64 encoded
    const file = event.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = function () {
      setFileData(reader.result);
    };
  };

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
    Array.isArray(datesState) &&
    numNight
  );

  const onRunClick = () => {
    if (isReady) {
      setLoadingPlan(true);
      txMessage({
        startTime: datesState[0].toISOString().split(".")[0].replace("T", " "),
        endTime: datesState[1].toISOString().split(".")[0].replace("T", " "),
        sites: siteState,
        schedulerMode: "VALIDATION",
        semesterVisibility: "True",
        numNightsToSchedule: numNight,
        rankerParameters: {
          thesisFactor: thesis,
          power: power,
          metPower: metPower,
          visPower: visPower,
          whaPower: whaPower,
        },
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Websocket not connected yet",
        life: 3000,
      });
    }
  };

  useEffect(() => {
    if (error) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to create a new schedule",
        life: 3000,
      });
    }
  }, [error]);

  // useEffect(() => {
  //   if (Boolean(data)) {
  //     setNightPlans(data?.schedule.nightPlans.nightTimeline as NightPlanType[]);
  //     setPlansSummary(data?.schedule.plansSummary);
  //   }
  // }, [data]);

  return (
    <>
      <Toast ref={toast}></Toast>
      <Panel className="control-panel">
        <Button
          label="RUN"
          icon="pi pi-play"
          className="p-button-success"
          loading={loadingPlan}
          onClick={onRunClick}
          disabled={isRunDisabled || loadingPlan}
          loadingIcon="pi pi-spin pi-spinner"
        />
        <Button
          label="SAVE"
          icon="pi pi-save"
          loading={saveState}
          onClick={onSaveClick}
        />
        <Button
          label="LOAD"
          icon="pi pi-arrow-circle-up"
          loading={saveState}
          onClick={onLoadClick}
        />
        <SelectButton
          value={siteState}
          options={sites}
          className="toggle-btn p-selectbutton p-component"
          onChange={(e) => setSite(e.value)}
          allowEmpty={false}
        />
        <Calendar
          id="range"
          value={datesState}
          onChange={(e) => setDates(e.value)}
          selectionMode="range"
          readOnlyInput
          showButtonBar
          showIcon
        />
        <div className="flex-auto">
          <label htmlFor="minmax">Num of Nights: </label>
          <InputNumber
            inputId="minmax"
            value={numNight}
            onValueChange={(e: InputNumberValueChangeEvent) =>
              setNumNight(e.value)
            }
            min={1}
            max={365}
          />
        </div>
        <div>
          <FileUpload
            mode="basic"
            name="demo[]"
            accept="text/*"
            maxFileSize={1000000}
            customUpload
            uploadHandler={customBase64Uploader}
            chooseLabel="Programs Selection"
          />
        </div>
      </Panel>
    </>
  );
}
