import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function RankerTweaker () {

    const [thesis, setThesis] = useState<number>(1.0);
    const [power, setPower] = useState<number>(2);
    const [metPower, setMetPower] = useState<number>(1.0);
    const [visPower, setVisPower] = useState<number>(1.0);
    const [whaPower, setWhaPower] = useState<number>(1.0);


    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="thesis" className="font-bold block mb-2">Thesis factor</label>
                <InputNumber inputId="thesis" value={thesis} onValueChange={(e: InputNumberValueChangeEvent) => setThesis(e.value)} useGrouping={false} minFractionDigits={2} maxFractionDigits={5} />
            </div>
            <div className="flex-auto">
                <label htmlFor="power" className="font-bold block mb-2">Power factor</label>
                <InputNumber inputId="power" value={power} onValueChange={(e: InputNumberValueChangeEvent) => setPower(e.value)} useGrouping={false} />
            </div>
            <div className="flex-auto">
                <label htmlFor="metPower" className="font-bold block mb-2">MAT power</label>
                <InputNumber inputId="metPower" value={metPower} onValueChange={(e: InputNumberValueChangeEvent) => setMetPower(e.value)} useGrouping={false} minFractionDigits={2} maxFractionDigits={5} />
            </div>
            <div className="flex-auto">
                <label htmlFor="visPower" className="font-bold block mb-2">Visibility power</label>
                <InputNumber inputId="visPower" value={visPower} onValueChange={(e: InputNumberValueChangeEvent) => setVisPower(e.value)} useGrouping={false} minFractionDigits={2} maxFractionDigits={5} />
            </div>
            <div className="flex-auto">
                <label htmlFor="whaPower" className="font-bold block mb-2">WHA power</label>
                <InputNumber inputId="whaPower" value={whaPower} onValueChange={(e: InputNumberValueChangeEvent) => setWhaPower(e.value)} useGrouping={false} minFractionDigits={2} maxFractionDigits={5} />
            </div>
        </div>
    )
}