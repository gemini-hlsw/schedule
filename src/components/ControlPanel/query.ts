import { graphql } from '../../gql';

export const scheduleQuery = graphql(`
    query schedule($startTime: String!,
                  $endTime: String!,
                  $sites: Sites!,
                  $mode: SchedulerModes!,
                  $numNightsToSchedule: Int! ) {
      schedule(
        newScheduleInput: {
          startTime: $startTime, 
          numNightsToSchedule: $numNightsToSchedule , 
          sites: $sites, 
          mode: $mode, 
          endTime: $endTime}
      ) {
        nightPlans{
          nightTimeline{
            nightIndex
            timeEntriesBySite{
              site,
              timeEntries{
                startTimeSlots,
                event,
                plan{
                  startTime,
                  visits{
                    obsId,
                    endTime,
                    altitude,
                    atomEndIdx,
                    atomStartIdx,
                    startTime,
                    instrument
                  },
                  nightStats{
                    timeloss,
                    planScore,
                    timeloss,
                    nToos,
                    completionFraction,
                  }
                }
              }
            }
          }
        },
        plansSummary
      }
    }
`)