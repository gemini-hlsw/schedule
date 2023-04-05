import { graphql } from '../../gql';

export const scheduleQuery = graphql(`
    query getNightPlans($startTime: String!, $endTime: String!, $site: Sites!) {
        schedule(
            newScheduleInput: {startTime: $startTime, 
                               endTime: $endTime,
                               site: $site}
        ) {
            nightPlans {
                nightIdx
                plansPerSite {
                    endTime
                    site
                    startTime
                    visits {
                        atomEndIdx
                        atomStartIdx
                        obsId
                        startTime
                    }
                    nightStats {
                        completionFraction
                        nToos
                        planConditions
                        planScore
                        timeloss
                    }
                }
                
            }
            plansSummary
        }
    }
`)