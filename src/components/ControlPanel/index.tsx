import { useState } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

import DatePicker from '../DatePicker/DatePicker';
import SiteToggleButton from '../SiteToggleButton';

import './RunPanel.scss';

export default function ControlPanel(){

    const [saveState, setSaveState] = useState(false);

    const onSaveClick = () => {
        setSaveState(true);

        setTimeout(() => {
            setSaveState(false);
        }, 2000);
    }

    return(
        <div className="control-panel">
                <Panel header="Control Panel">
                    <h4>Validation run: 0000001</h4>
                    <SiteToggleButton />
                    <div className='calendar'>
                        <DatePicker />
                    </div>
                    
                    <div className='run-buttons'>
                        <Button label="RUN" icon="pi pi-play"></Button>
                        <Button label="SAVE" icon="pi pi-save" loading={saveState} onClick={onSaveClick}></Button> 
                        <Button label="LOAD" icon="pi pi-save" loading={saveState} onClick={onSaveClick} />
                    </div>
                </Panel>
            </div>
    );
} 