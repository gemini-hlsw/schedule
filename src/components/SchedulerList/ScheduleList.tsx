import { useQuery } from '@apollo/client';
import { graphql } from '../../gql';


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

function SchedulerList() {

    const { data } = useQuery(QUERY_PLANS_BY_SITE)
    return (
        <div>
            <h1>Testing the gql</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
       
    )
}   

export default SchedulerList
