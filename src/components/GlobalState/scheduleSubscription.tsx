import { graphql } from "../../gql";

export const subscriptionQueueSchedule = graphql(`
  subscription queueSchedule($scheduleId: String!) {
    queueSchedule(scheduleId: $scheduleId) {
      __typename
      ... on NewNightPlans {
        nightPlans {
          nightTimeline {
            nightIndex
            timeEntriesBySite {
              site
              mornTwilight
              eveTwilight
              timeLosses
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
                    fpu
                    disperser
                    filters
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
                    timeLoss
                    planScore
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
      ... on NightPlansError {
        error
      }
    }
  }
`);
