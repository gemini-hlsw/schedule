import { useState, useRef } from 'react';

import { useMutation } from '@apollo/client';
import { graphql } from '../../gql';

//PrimeReact components
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Calendar } from 'primereact/calendar';
import { SelectButton } from 'primereact/selectbutton';
import { Toast } from 'primereact/toast';


import './styles.scss';
import { newScheduleMutationDocument } from './query'

export default function ControlPanel(){
    
    const  toast = useRef<Toast>(null);
    const [saveState, setSaveState] = useState(false);
    const [datesState, setDates] = useState<Date | Date[] | string | null | undefined>(undefined);
    const [siteState, setSite] = useState(undefined);
    const sites = [
        {label: "North", value: ["GN"]},
        {label: "South", value: ["GS"]},
        {label: "All", value: ["GN","GS"]}
    ]

    const [loadNewSchedule, { data, loading, error, called }] =  useMutation(newScheduleMutationDocument);


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
        if(siteState && datesState && Array.isArray(datesState)) {
            loadNewSchedule({ variables: {
                startTime: datesState[0].toISOString().split('.')[0].replace('T', ' ') ,
                endTime: datesState[1].toISOString().split('.')[0].replace('T', ' ') ,
                site: siteState
            }}).then( () => {
    
                if(called){
                    if(data){
                        console.log(data)
                    }
                }
    
                if(error){
                    toast.current.show({severity:'error', 
                                        summary: 'Error', 
                                        detail:'Failed to create a new schedule', 
                                        life: 3000});
                }
            });
    
        } else {
            toast.current.show({severity:'error', 
                                summary: 'Error', 
                                detail:'Missing parameters to run Validation', 
                                life: 3000});
        }
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
                            value={datesState} 
                            onChange={(e) => setDates(e.value)} 
                            selectionMode="range" 
                            readOnlyInput 
                            showButtonBar
                            showIcon
                        />
                    </div>
                    
                    <div className='run-buttons'>
                        <Button label="RUN" icon="pi pi-play" loading={loading} onClick={onRunClick} ></Button>
                        <Button label="SAVE" icon="pi pi-save" loading={saveState} onClick={onSaveClick}></Button> 
                        <Button label="LOAD" icon="pi pi-arrow-circle-up" loading={saveState} onClick={onLoadClick} />
                    </div>
                </Panel>
        </div>
    );
}
