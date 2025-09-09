import { useContext } from "react";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { GlobalStateContext } from "../GlobalState/GlobalState";
import "./WeatherConditions.scss";
import { Dropdown } from "primereact/dropdown";

const IQ_OPTIONS = [
  { label: "IQ20", value: 0.2 },
  { label: "IQ70", value: 0.7 },
  { label: "IQ85", value: 0.85 },
  { label: "IQANY", value: 1.0 },
];

const CC_OPTIONS = [
  { label: "CC50", value: 0.5 },
  { label: "CC70", value: 0.7 },
  { label: "CC80", value: 0.8 },
  { label: "CCANY", value: 1.0 },
];

export default function WeatherConditions() {
  const {
    imageQuality,
    setImageQuality,
    cloudCover,
    setCloudCover,
    windDirection,
    setWindDirection,
    windSpeed,
    setWindSpeed,
  } = useContext(GlobalStateContext);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid weather-conditions">
      <div className="flex-auto">
        <label htmlFor="image-quality" className="font-bold block mb-2">
          Image quality
        </label>
        <Dropdown
          value={imageQuality}
          onChange={(e) => setImageQuality(e.value)}
          inputId="image-quality"
          options={IQ_OPTIONS}
          optionLabel="label"
          placeholder="Select IQ"
          className="w-full md:w-14rem"
        />
      </div>
      <div className="flex-auto">
        <label htmlFor="cloud-cover" className="font-bold block mb-2">
          Cloud cover
        </label>
        <Dropdown
          value={cloudCover}
          onChange={(e) => setCloudCover(e.value)}
          inputId="cloud-cover"
          options={CC_OPTIONS}
          optionLabel="label"
          placeholder="Select CC"
          className="w-full md:w-14rem"
        />
      </div>
      <div className="flex-auto">
        <label htmlFor="wind-dir" className="font-bold block mb-2">
          Wind direction (degrees)
        </label>
        <InputNumber
          inputId="wind-dir"
          value={windDirection}
          onValueChange={(e: InputNumberValueChangeEvent) =>
            setWindDirection(e.value)
          }
          useGrouping={false}
          max={360}
          min={0}
        />
      </div>
      <div className="flex-auto">
        <label htmlFor="wind-speed" className="font-bold block mb-2">
          Wind speed (m/s)
        </label>
        <InputNumber
          inputId="wind-speed"
          value={windSpeed}
          onValueChange={(e: InputNumberValueChangeEvent) =>
            setWindSpeed(e.value)
          }
          useGrouping={false}
          min={0}
        />
      </div>
    </div>
  );
}
