import { useState, useRef } from 'react';

//PrimeReact components
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Calendar } from 'primereact/calendar';
import { SelectButton } from 'primereact/selectbutton';


import './styles.scss';

export default function ControlPanel(){

    const [saveState, setSaveState] = useState(false);
    const [dates2, setDates2] = useState<Date | Date[] | string | null | undefined>(undefined);
    const [siteState, setSite] = useState('South');
    const sites = [
        {label: "North", value: "GN"},
        {label: "South", value: "GS"},
        {label: "Both", value: "Both"}
    ]

    const onSaveClick = () => {
        // Creates a json file with all the 
        setSaveState(true);
        
        const output_run = {
            "site": siteState,
            "date": dates2,
        }
        console.log(output_run)

        setTimeout(() => {
            setSaveState(false);
        }, 2000);
    }

    const onLoadClick = () => {
        // TODO: Idealistcally shows a list of saved runs.

    }

    const onRunClick = () => {
        // call GraphQL endpoint for new schedule acording to parameters 
    }


    return(
        <div className="control-panel">
                <Panel header="Control Panel">
                    <h4>Validation run: 0000001</h4>
                    <div className='stbtn-container'>
                        <SelectButton 
                            value={siteState} 
                            options={sites}
                            className="toggle-btn p-selectbutton p-component"
                            onChange={(e) => setSite(e.value)}
                            unselectable={false}/>
                    </div>
                    <div className='calendar'>
                        <Calendar 
                            id="range" 
                            value={dates2} 
                            onChange={(e) => setDates2(e.value)} 
                            selectionMode="range" 
                            readOnlyInput 
                            showButtonBar
                            showIcon
                        />
                    </div>
                    
                    <div className='run-buttons'>
                        <Button label="RUN" icon="pi pi-play" onClick={onRunClick} ></Button>
                        <Button label="SAVE" icon="pi pi-save" loading={saveState} onClick={onSaveClick}></Button> 
                        <Button label="LOAD" icon="pi pi-arrow-circle-up" loading={saveState} onClick={onLoadClick} />
                    </div>
                </Panel>
        </div>
    );
} 