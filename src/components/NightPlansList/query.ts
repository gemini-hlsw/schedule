import { graphql } from '../../gql';

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
