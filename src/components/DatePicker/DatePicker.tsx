import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import './DatePicker.scss';


export default function DatePicker(){

    const [dates2, setDates2] = useState<Date | Date[] | string | null | undefined>(undefined);
   

    return(<>
             <h5>Calendar</h5>
            <Calendar id="range" 
                value={dates2} 
                onChange={(e) => setDates2(e.value)} 
                selectionMode="range" 
                readOnlyInput 
                showButtonBar/>
       
            </>
    );
} 