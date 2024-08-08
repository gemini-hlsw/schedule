import { graphql } from "../../gql";
export const scheduleQuery = graphql(`
  query testSubQuery(
    $scheduleId: String!
    $startTime: String!
    $endTime: String!
    $sites: Sites!
    $mode: SchedulerModes!
    $numNightsToSchedule: Int!
    $semesterVisibility: Boolean!
    $thesisFactor: Float
    $power: Int
  ) {
    testSubQuery(
      scheduleId: $scheduleId
      newScheduleInput: {
        startTime: $startTime
        sites: $sites
        mode: $mode
        endTime: $endTime
        thesisFactor: $thesisFactor
        power: $power
        semesterVisibility: $semesterVisibility
        numNightsToSchedule: $numNightsToSchedule
      }
    )
  }
`);
