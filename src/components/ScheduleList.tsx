import { graphql } from '../gql/';
import { useQuery } from '@apollo/client';


const GetPlansBySite= graphql(/* GraphQL */`
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

    const { data } = useQuery(GetPlansBySite)
    console.log(JSON.stringify(data, null, 2))
    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}

export default SchedulerList
