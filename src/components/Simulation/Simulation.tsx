import { Panel } from "primereact/panel";
import WeatherConditions from "../WeatherConditions/WeatherConditions";

export function Simulation() {
  return (
    <Panel header="Weather Conditions">
      <WeatherConditions updateButton={true} />
    </Panel>
  );
}
