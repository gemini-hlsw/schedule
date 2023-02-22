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



const MUTATION_NEW_SCHEDULE = graphql(/* GraphQL */`
    mutation NewSchedule($startTime: String!, $endTime: String!) {
        newSchedule(
            newScheduleInput: {startTime: $startTime, endTime: $endTime}
        ) {
            __typename
            ... on NewScheduleSuccess {
            success
            }
            ... on NewScheduleError {
            error
            }
        }
    }
`);



export default function ControlPanel(){

    

    
    
    const  toast = useRef<Toast>(null);
    const [saveState, setSaveState] = useState(false);
    const [dates2, setDates2] = useState<Date | Date[] | string | null | undefined>(undefined);
    const [siteState, setSite] = useState('South');
    const sites = [
        {label: "North", value: "GN"},
        {label: "South", value: "GS"},
        {label: "Both", value: "Both"}
    ]

    const [loadNewSchedule, { data, loading, error, called }] =  useMutation(MUTATION_NEW_SCHEDULE);


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
        loadNewSchedule({ variables: {
            startTime: "2018-10-01 08:00:00",
            endTime: "2018-10-03 08:00:00" 
        }}).then( () => {

            if(called){
                if(data){
                    console.log(data)
                }
            }

            if(error){
                toast.current.show({severity:'error', summary: 'Error', detail:'Failed to create a new schedule', life: 3000});
            }
        });

       
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
                        <Button label="RUN" icon="pi pi-play" loading={loading} onClick={onRunClick} ></Button>
                        <Button label="SAVE" icon="pi pi-save" loading={saveState} onClick={onSaveClick}></Button> 
                        <Button label="LOAD" icon="pi pi-arrow-circle-up" loading={saveState} onClick={onLoadClick} />
                    </div>
                </Panel>
        </div>
    );
} 