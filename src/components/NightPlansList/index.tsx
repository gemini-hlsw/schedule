import React, { useState } from "react";
import { Fieldset } from 'primereact/fieldset';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import NightPlanSummary from './NightPlanSummary';


// TODO: This should be given by codegen but no specific type response exists in the backend
interface SitePlan {
    nightIdx: number,
    plansPerSite:{
        site: string,
        startTime: string,
        endTime: string,
        visits: {
            obsId: string
            startTime: string
            atomStartIdx: number
            atomEndIdx: number
                
        }[]
    }[]
}

interface NightPlansListProps{
    plans: {
        sitePlans: SitePlan[] 
    }
}

function ViewButton(plan: any) {
    const [show, setShow] = useState<boolean>(false);
    return(
        <>
            
            {!show && <Button label="View Plan" onClick={()=>{setShow(true)}}/>} 
            { show &&
                <> 
                    <Button label="View Plan" onClick={()=>{setShow(false)}}/> 
                    <div>
                        <p>{plan.plansite}</p>
                        <p>{plan.planstartTime}</p>
                        <p>{plan.plan.endTime}</p>
                        <p>Visits</p>
                        {plan.plan.visits.map ((visit: any) => {
                            return(
                                <p>{visit.obsId}</p>
                            )
                        })}
                    </div>
                </>
            } 
            
        </> 
    )
}


export default function NightPlansList({plans}:NightPlansListProps) {

    

    
    const legendTemplate = (nightIdx: number) => {
        return(
            <div className="flex align-items-center text-primary">
                <span className="pi pi-user mr-2"></span>
                <span className="font-bold text-lg">NightPlan {nightIdx}</span>
            </div> 
        )
    }

    //TODO: This should be inside the query
    const summary = {
        timeloss: 200,
        conditions: "0.5``- 0.7`` 0.3mag WV",
        nToOs: 1,
        planScore: 555,
        completition: {
           band1: 70,
           band2: 20,
           band3: 0,
           band4: 0
        }
   }

    return(
        <Panel header="Night Plans">
            {plans?.sitePlans.map( (nightPlan: any) => {
                return(
                    <Fieldset legend={legendTemplate(nightPlan.nightIdx)} toggleable>
                        {nightPlan.plansPerSite.map( (plan: any) => {
                            return(
                                <div>
                                    <ViewButton plan={plan}/>
                                    <NightPlanSummary {...summary} />
                                </div>    
                            )
                        })}
                    </Fieldset> 
                )
            })}
        </Panel>
    )
}