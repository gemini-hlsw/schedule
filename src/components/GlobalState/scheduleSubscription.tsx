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
                nightConditions {
                  iq
                  cc
                }
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
                  requiredConditions {
                    iq
                    cc
                  }
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
