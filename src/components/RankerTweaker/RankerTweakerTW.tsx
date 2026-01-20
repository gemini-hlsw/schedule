import { useContext } from "react";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { GlobalStateContext } from "../GlobalState/GlobalState";

export default function RankerTweakerTW({
  vertical = false,
}: {
  vertical?: boolean;
}) {
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
    <div className="grid grid-cols-2 gap-1 h-56 items-center">
      <label htmlFor="thesis" className="font-bold grid">
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
      <label htmlFor="power" className="font-bold grid">
        Power factor
      </label>
      <InputNumber
        inputId="power"
        value={power}
        onValueChange={(e: InputNumberValueChangeEvent) => setPower(e.value)}
        useGrouping={false}
      />
      <label htmlFor="metPower" className="font-bold grid">
        MET power
      </label>
      <InputNumber
        inputId="metPower"
        value={metPower}
        onValueChange={(e: InputNumberValueChangeEvent) => setMetPower(e.value)}
        useGrouping={false}
        minFractionDigits={2}
        maxFractionDigits={5}
      />
      <label htmlFor="visPower" className="font-bold grid">
        Visibility power
      </label>
      <InputNumber
        inputId="visPower"
        value={visPower}
        onValueChange={(e: InputNumberValueChangeEvent) => setVisPower(e.value)}
        useGrouping={false}
        minFractionDigits={2}
        maxFractionDigits={5}
      />
      <label htmlFor="whaPower" className="font-bold grid">
        WHA power
      </label>
      <InputNumber
        inputId="whaPower"
        value={whaPower}
        onValueChange={(e: InputNumberValueChangeEvent) => setWhaPower(e.value)}
        useGrouping={false}
        minFractionDigits={2}
        maxFractionDigits={5}
      />
      <label htmlFor="airPower" className="font-bold grid">
        Air power
      </label>
      <InputNumber
        inputId="airPower"
        value={airPower}
        onValueChange={(e: InputNumberValueChangeEvent) => setAirPower(e.value)}
        useGrouping={false}
        minFractionDigits={2}
        maxFractionDigits={5}
      />
    </div>
  );
}
