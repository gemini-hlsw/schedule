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
          semesterVisibility:false,
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
              mornTwilight,
              eveTwilight,
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
                    instrument,
                    score,
                    obsClass,
                    completion,
                    peakScore,
                  },
                  nightStats{
                    timeloss,
                    planScore,
                    timeloss,
                    nToos,
                    completionFraction,
                    programCompletion
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