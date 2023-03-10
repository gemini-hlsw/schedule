import { graphql } from '../../gql';


export const newScheduleMutationDocument = graphql(/* GraphQL */`
    mutation NewSchedule($startTime: String!, $endTime: String!, $site: Sites! ) {
        newSchedule(
            newScheduleInput: {startTime: $startTime, 
                               endTime: $endTime,
                               site: $site}
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


export const allPlansQueryDocument = graphql(/* GraphQL */`
    query allPlans {
        plans{
            nightIdx,
            plansPerSite{
            site,
            startTime,
            endTime,
            visits{
                    obsId
                    atomStartIdx
                    atomEndIdx
                    
                }
            }
        }
    }
`);

export const plansBySiteQueryDocument = graphql(/* GraphQL */`
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
