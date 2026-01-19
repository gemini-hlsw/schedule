import { useContext } from "react";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { GlobalStateContext } from "../GlobalState/GlobalState";
import "./RankerTweaker.scss";

export default function RankerTweaker({ vertical }: { vertical: boolean }) {
  const {
    thesis,
    setThesis,
    power,
    setPower,
    metPower,
    setMetPower,
    visPower,
    setVisPower,
    whaPower,
    setWhaPower,
    airPower,
    setAirPower,
  } = useContext(GlobalStateContext);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid ranker-tweaker">
      <div className="flex-auto">
        <label htmlFor="thesis" className="font-bold block mb-2">
          Thesis factor
        </label>
        <InputNumber
          inputId="thesis"
          value={thesis}
          onValueChange={(e: InputNumberValueChangeEvent) => setThesis(e.value)}
          useGrouping={false}
          minFractionDigits={2}
          maxFractionDigits={5}
        />
      </div>
      <div className="flex-auto">
        <label htmlFor="power" className="font-bold block mb-2">
          Power factor
        </label>
        <InputNumber
          inputId="power"
          value={power}
          onValueChange={(e: InputNumberValueChangeEvent) => setPower(e.value)}
          useGrouping={false}
        />
      </div>
      <div className="flex-auto">
        <label htmlFor="metPower" className="font-bold block mb-2">
          MET power
        </label>
        <InputNumber
          inputId="metPower"
          value={metPower}
          onValueChange={(e: InputNumberValueChangeEvent) =>
            setMetPower(e.value)
          }
          useGrouping={false}
          minFractionDigits={2}
          maxFractionDigits={5}
        />
      </div>
      <div className="flex-auto">
        <label htmlFor="visPower" className="font-bold block mb-2">
          Visibility power
        </label>
        <InputNumber
          inputId="visPower"
          value={visPower}
          onValueChange={(e: InputNumberValueChangeEvent) =>
            setVisPower(e.value)
          }
          useGrouping={false}
          minFractionDigits={2}
          maxFractionDigits={5}
        />
      </div>
      <div className="flex-auto">
        <label htmlFor="whaPower" className="font-bold block mb-2">
          WHA power
        </label>
        <InputNumber
          inputId="whaPower"
          value={whaPower}
          onValueChange={(e: InputNumberValueChangeEvent) =>
            setWhaPower(e.value)
          }
          useGrouping={false}
          minFractionDigits={2}
          maxFractionDigits={5}
        />
      </div>
      <div className="flex-auto">
        <label htmlFor="airPower" className="font-bold block mb-2">
          Air power
        </label>
        <InputNumber
          inputId="airPower"
          value={airPower}
          onValueChange={(e: InputNumberValueChangeEvent) =>
            setAirPower(e.value)
          }
          useGrouping={false}
          minFractionDigits={2}
          maxFractionDigits={5}
        />
      </div>
    </div>
  );
}
