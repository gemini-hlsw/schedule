import UploadButton from "../UploadButton/UploadButton";
import { Panel } from "primereact/panel";
import "./InputsPanel.scss";

export default function InputsPanel() {
  return (
    <Panel className="inputs-panel" header="Sources">
      <UploadButton label="Faults"></UploadButton>
      <UploadButton label="GMOS Conf"></UploadButton>
      <UploadButton label="rToOs"></UploadButton>
      <UploadButton label="Weather"></UploadButton>
      <UploadButton label="Calendar"></UploadButton>
    </Panel>
  );
}
