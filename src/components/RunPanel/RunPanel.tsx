import { useState } from 'react';
import { Button } from 'primereact/button';
import './RunPanel.scss';

export default function RunPanel(){

    const [saveState, setSaveState] = useState(false);

    const onSaveClick = () => {
        setSaveState(true);

        setTimeout(() => {
            setSaveState(false);
        }, 2000);
    }

    return(
        <>
            <div className="control-panel">
                <Button label="RUN" icon="pi pi-play"></Button>
                <Button label="SAVE" icon="pi pi-save" loading={saveState} onClick={onSaveClick}></Button>
            </div>
        </>
       
    );
} 