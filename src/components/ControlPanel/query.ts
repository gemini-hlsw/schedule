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
    $metPower: Float
    $whaPower: Float
    $visPower: Float
    $programFile: Upload
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
        metPower: $metPower
        whaPower: $whaPower
        visPower: $visPower
        semesterVisibility: $semesterVisibility
        numNightsToSchedule: $numNightsToSchedule
        programFile: $programFile
      }
    )
  }
`);
