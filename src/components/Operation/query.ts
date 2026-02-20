import { graphql } from "../../gql";
export const scheduleRtQuery = graphql(`
  query scheduleRt(
    $scheduleId: String!
    $startTime: String!
    $endTime: String!
    $nightStartTime: String!
    $nightEndTime: String!
    $sites: Sites!
    $imageQuality: Float!
    $cloudCover: Float!
    $windSpeed: Float!
    $windDirection: Float!
    $thesisFactor: Float
    $power: Int
    $metPower: Float
    $whaPower: Float
    $airPower: Float
    $visPower: Float
    $programs: [String!]!
  ) {
    scheduleRt(
      scheduleId: $scheduleId
      newScheduleRtInput: {
        startTime: $startTime
        endTime: $endTime
        nightStartTime: $nightStartTime
        nightEndTime: $nightEndTime
        sites: $sites
        imageQuality: $imageQuality
        cloudCover: $cloudCover
        windSpeed: $windSpeed
        windDirection: $windDirection
        thesisFactor: $thesisFactor
        power: $power
        metPower: $metPower
        whaPower: $whaPower
        airPower: $airPower
        visPower: $visPower
        programs: $programs
      }
    )
  }
`);
