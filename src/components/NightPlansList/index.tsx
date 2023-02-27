import { useQuery } from '@apollo/client';
import { graphql } from '../../gql';
import { Fieldset } from 'primereact/fieldset';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import NightPlanSummary from '../NightPlanSummary';


export const QUERY_PLANS_BY_SITE = graphql(/* GraphQL */`
    query GetPlansBySite{
            sitePlans(site: GS) {
                nightIdx
                plansPerSite {
                site
                startTime
                endTime
                visits {
                        startTime
                        obsId
                        atomStartIdx
                        atomEndIdx
                    }
                }
            }
        }
`);


export default function NightPlansList() {
    const { data } = useQuery(QUERY_PLANS_BY_SITE)

    const legendTemplate = (nightIdx: number) => {
        return(
            <div className="flex align-items-center text-primary">
                <span className="pi pi-user mr-2"></span>
                <span className="font-bold text-lg">NightPlan {nightIdx}</span>
            </div> 
        )
    }

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
        <Panel>
            {data?.sitePlans.map( (nightPlan) => {
                return(
                    <Fieldset legend={legendTemplate(nightPlan.nightIdx)} toggleable>
                        {nightPlan.plansPerSite.map( (plan) => {
                            return(
                                <div>
                                    <Button label="View Plan"/>
                                    <NightPlanSummary {...summary} />
                                    <div>
                                        <p>{plan.site}</p>
                                        <p>{plan.startTime}</p>
                                        <p>{plan.endTime}</p>
                                    </div>
                                </div>
                                
                            )
                        })}
                    </Fieldset> 
                )
            })}
        </Panel>
    )
}