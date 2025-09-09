import { useContext } from "react";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { GlobalStateContext } from "../GlobalState/GlobalState";
import "./WeatherConditions.scss";

export default function WeatherConditions() {
  const { imageQuality, setImageQuality, cloudCover, setCloudCover } =
    useContext(GlobalStateContext);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid weather-conditions">
      <div className="flex-auto">
        <label htmlFor="image-quality" className="font-bold block mb-2">
          Image quality
        </label>
        <InputNumber
          inputId="image-quality"
          value={imageQuality}
          onValueChange={(e: InputNumberValueChangeEvent) =>
            setImageQuality(e.value)
          }
          useGrouping={false}
          max={1}
        />
      </div>
      <div className="flex-auto">
        <label htmlFor="cloud-cover" className="font-bold block mb-2">
          Cloud cover
        </label>
        <InputNumber
          inputId="cloud-cover"
          value={cloudCover}
          onValueChange={(e: InputNumberValueChangeEvent) =>
            setCloudCover(e.value)
          }
          useGrouping={false}
          max={1}
        />
      </div>
    </div>
  );
}
