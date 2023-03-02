import { useState, useRef } from 'react';
import { useMutation } from '@apollo/client';

//PrimeReact components
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Calendar } from 'primereact/calendar';
import { SelectButton } from 'primereact/selectbutton';
import { Toast } from 'primereact/toast';


import './styles.scss';
import { newScheduleMutationDocument } from './query'
import NightPlansList from '../NightPlansList';


// TODO: Bug in Database: is being deleted so is returning {} we are going to mock the response for now
const mutationResponse = {
        "sitePlans": [
            {
            "nightIdx": 0,
            "plansPerSite": [
                {
                "site": "GS",
                "startTime": "2018-09-30T23:36:00.000005+00:00",
                "endTime": "2018-10-01T09:29:00.000017+00:00",
                "visits": [
                    {
                    "startTime": "2018-09-30T23:36:00.000005+00:00",
                    "obsId": "GS-2018B-Q-105-77",
                    "atomStartIdx": 0,
                    "atomEndIdx": 7
                    },
                    {
                    "startTime": "2018-10-01T01:03:00.000005+00:00",
                    "obsId": "GS-2018B-Q-105-28",
                    "atomStartIdx": 0,
                    "atomEndIdx": 9
                    },
                    {
                    "startTime": "2018-10-01T03:43:00.000005+00:00",
                    "obsId": "GS-2018B-Q-105-87",
                    "atomStartIdx": 0,
                    "atomEndIdx": 1
                    },
                    {
                    "startTime": "2018-10-01T04:03:00.000005+00:00",
                    "obsId": "GS-2018B-Q-102-70",
                    "atomStartIdx": 0,
                    "atomEndIdx": 4
                    },
                    {
                    "startTime": "2018-10-01T04:14:00.000005+00:00",
                    "obsId": "GS-2018B-Q-105-79",
                    "atomStartIdx": 0,
                    "atomEndIdx": 7
                    },
                    {
                    "startTime": "2018-10-01T06:11:00.000005+00:00",
                    "obsId": "GS-2018B-Q-102-23",
                    "atomStartIdx": 0,
                    "atomEndIdx": 5
                    },
                    {
                    "startTime": "2018-10-01T06:55:00.000005+00:00",
                    "obsId": "GS-2018B-Q-105-51",
                    "atomStartIdx": 0,
                    "atomEndIdx": 1
                    },
                    {
                    "startTime": "2018-10-01T07:15:00.000005+00:00",
                    "obsId": "GS-2018B-Q-102-40",
                    "atomStartIdx": 0,
                    "atomEndIdx": 6
                    },
                    {
                    "startTime": "2018-10-01T08:09:00.000005+00:00",
                    "obsId": "GS-2018B-Q-104-7",
                    "atomStartIdx": 0,
                    "atomEndIdx": 0
                    },
                    {
                    "startTime": "2018-10-01T08:36:00.000005+00:00",
                    "obsId": "GS-2018B-Q-105-9",
                    "atomStartIdx": 0,
                    "atomEndIdx": 1
                    },
                    {
                    "startTime": "2018-10-01T08:57:00.000005+00:00",
                    "obsId": "GS-2018B-Q-102-73",
                    "atomStartIdx": 0,
                    "atomEndIdx": 5
                    }
                ]
                }
            ]
            },
            {
            "nightIdx": 1,
            "plansPerSite": [
                {
                "site": "GS",
                "startTime": "2018-10-01T23:37:00.000002+00:00",
                "endTime": "2018-10-02T09:26:59.999984+00:00",
                "visits": [
                    {
                    "startTime": "2018-10-01T23:37:00.000002+00:00",
                    "obsId": "GS-2018B-Q-102-63",
                    "atomStartIdx": 0,
                    "atomEndIdx": 5
                    },
                    {
                    "startTime": "2018-10-01T23:48:00.000002+00:00",
                    "obsId": "GS-2018B-Q-105-75",
                    "atomStartIdx": 0,
                    "atomEndIdx": 7
                    },
                    {
                    "startTime": "2018-10-02T01:15:00.000002+00:00",
                    "obsId": "GS-2018B-Q-102-17",
                    "atomStartIdx": 0,
                    "atomEndIdx": 5
                    },
                    {
                    "startTime": "2018-10-02T01:58:00.000002+00:00",
                    "obsId": "GS-2018B-Q-102-36",
                    "atomStartIdx": 0,
                    "atomEndIdx": 7
                    },
                    {
                    "startTime": "2018-10-02T02:58:00.000002+00:00",
                    "obsId": "GS-2018B-Q-102-64",
                    "atomStartIdx": 0,
                    "atomEndIdx": 4
                    },
                    {
                    "startTime": "2018-10-02T03:09:00.000002+00:00",
                    "obsId": "GS-2018B-Q-102-30",
                    "atomStartIdx": 0,
                    "atomEndIdx": 7
                    },
                    {
                    "startTime": "2018-10-02T04:02:00.000002+00:00",
                    "obsId": "GS-2018B-Q-102-80",
                    "atomStartIdx": 0,
                    "atomEndIdx": 9
                    },
                    {
                    "startTime": "2018-10-02T04:15:00.000002+00:00",
                    "obsId": "GS-2018B-Q-104-21",
                    "atomStartIdx": 0,
                    "atomEndIdx": 1
                    },
                    {
                    "startTime": "2018-10-02T05:21:00.000002+00:00",
                    "obsId": "GS-2018B-Q-102-28",
                    "atomStartIdx": 0,
                    "atomEndIdx": 8
                    },
                    {
                    "startTime": "2018-10-02T06:17:00.000002+00:00",
                    "obsId": "GS-2018B-Q-102-52",
                    "atomStartIdx": 0,
                    "atomEndIdx": 7
                    },
                    {
                    "startTime": "2018-10-02T07:10:00.000002+00:00",
                    "obsId": "GS-2018B-Q-102-72",
                    "atomStartIdx": 0,
                    "atomEndIdx": 9
                    },
                    {
                    "startTime": "2018-10-02T07:23:00.000002+00:00",
                    "obsId": "GS-2018B-Q-102-32",
                    "atomStartIdx": 0,
                    "atomEndIdx": 5
                    },
                    {
                    "startTime": "2018-10-02T08:13:00.000002+00:00",
                    "obsId": "GS-2018B-Q-102-67",
                    "atomStartIdx": 0,
                    "atomEndIdx": 12
                    },
                    {
                    "startTime": "2018-10-02T08:26:00.000002+00:00",
                    "obsId": "GS-2018B-Q-102-42",
                    "atomStartIdx": 0,
                    "atomEndIdx": 7
                    }
                ]
                }
            ]
            },
        ]
}


export default function ControlPanel(){
    
    const  toast = useRef<Toast>(null);
    const [runState, setRunState] = useState(false);
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
            "date": datesState,
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
                    setRunState(true) 
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
                <Toast ref={toast}></Toast>
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

                {runState && <NightPlansList plans={mutationResponse} />}
        </div>
    );
}
