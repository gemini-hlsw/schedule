import { graphql } from "../../gql";

export const subscriptionQueueSchedule = graphql(`
  subscription queueSchedule($scheduleId: String!) {
    queueSchedule(scheduleId: $scheduleId) {
      nightPlans {
        nightTimeline {
          nightIndex
          timeEntriesBySite {
            site
            mornTwilight
            eveTwilight
            timeEntries {
              startTimeSlots
              event
              plan {
                startTime
                visits {
                  obsId
                  endTime
                  altitude
                  atomEndIdx
                  atomStartIdx
                  startTime
                  instrument
                  score
                  obsClass
                  completion
                  peakScore
                }
                nightStats {
                  timeloss
                  planScore
                  timeloss
                  nToos
                  completionFraction
                  programCompletion
                }
              }
            }
          }
        }
      }
      plansSummary
    }
  }
`);
