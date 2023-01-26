import { useState } from 'react';
import { SelectButton } from 'primereact/selectbutton';

import "primereact/resources/primereact.min.css";                 
import "primeicons/primeicons.css";
import './SiteToggleButton.scss'

export default function SiteToggleButton(){

    const [value1, setValue1] = useState('South');

    const sites = [
        {label: "North", value: "GN"},
        {label: "South", value: "GS"}
    ]

    return(
        <div className='stbtn-container'>
            <SelectButton 
                value={value1} 
                options={sites}
                className="p-button p-selectbutton"
                onChange={(e) => setValue1(e.value)}
                unselectable={false}/>
        </div>
    )
}