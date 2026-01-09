import { Panel } from "primereact/panel";
import WeatherConditions from "../WeatherConditions/WeatherConditions";
import { DisplayWeather } from "../WeatherConditions/DisplayWeather";
import "./Simulation.scss";

export function Simulation() {
  return (
    <>
      <Panel header="Weather Conditions">
        <WeatherConditions updateButton={true} />
      </Panel>

      <div className="side-by-side">
        <Panel header="Latest GN weather conditions">
          <DisplayWeather site="GN" />
        </Panel>

        <Panel header="Latest GS weather conditions">
          <DisplayWeather site="GS" />
        </Panel>
      </div>
    </>
  );
}
