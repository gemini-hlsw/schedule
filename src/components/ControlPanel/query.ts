import { graphql } from '../../gql';

export const scheduleQuery = graphql(`
    query schedule($startTime: String!,
                  $endTime: String!,
                  $sites: Sites!,
                  $mode: SchedulerModes!,
                  $numNightsToSchedule: Int!,
                  $thesisFactor: Float,
                  $power: Int,
                  $metPower: Float,
                  $visPower: Float,
                  $whaPower: Float ) {
      schedule(
        newScheduleInput: {
          startTime: $startTime, 
          numNightsToSchedule: $numNightsToSchedule , 
          sites: $sites, 
          mode: $mode, 
          endTime: $endTime,
          thesisFactor: $thesisFactor,
          power: $power,
          visPower: $visPower,
          metPower: $metPower,
          whaPower: $whaPower}
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