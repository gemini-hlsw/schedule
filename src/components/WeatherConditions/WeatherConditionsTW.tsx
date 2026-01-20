import { useContext, useState } from "react";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { GlobalStateContext } from "../GlobalState/GlobalState";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { updateWeatherMutation } from "./query";
import { useMutation } from "@apollo/client";

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

export default function WeatherConditions({ updateButton = false }) {
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

  const [siteState, setSite] = useState(undefined);
  const sites = [
    { label: "GN", value: "GN" },
    { label: "GS", value: "GS" },
  ];

  const [updateWeather] = useMutation(updateWeatherMutation, {
    context: { clientName: "weatherClient" },
  });

  function sendWeatherUpdate() {
    updateWeather({
      variables: {
        weatherInput: {
          imageQuality,
          cloudCover,
          windDirection,
          windSpeed,
          site: siteState,
        },
      },
    });
  }

  return (
    <div className="grid grid-cols-2 gap-1 h-56 items-center">
      <label htmlFor="image-quality" className="font-bold">
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
      <label htmlFor="cloud-cover" className="font-bold">
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
      <label htmlFor="wind-dir" className="font-bold">
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
      <label htmlFor="wind-speed" className="font-bold">
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
      {updateButton && (
        <label htmlFor="wind-speed" className="font-bold">
          Site
        </label>
      )}
      {updateButton && (
        <Dropdown
          placeholder="Select Site"
          value={siteState}
          options={sites}
          className="toggle-btn p-selectbutton p-component"
          onChange={(e) => setSite(e.value)}
        />
      )}
      {updateButton && (
        <Button
          className="col-span-2"
          label="Send Weather Update"
          disabled={!siteState}
          onClick={sendWeatherUpdate}
        />
      )}
    </div>
  );
}
