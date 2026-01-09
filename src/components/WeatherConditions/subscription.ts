import { graphql } from "../../gql";

export const weatherUpdatesSubscription = graphql(`
  subscription weatherUpdates($site: String!) {
    weatherUpdates(site: $site) {
      imageQuality
      cloudCover
      windDirection
      windSpeed
    }
  }
`);
