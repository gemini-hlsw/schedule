import { graphql } from "../../gql";
export const updateWeatherMutation = graphql(`
  mutation updateWeather($weatherInput: WeatherInput) {
    updateWeather(weatherInput: $weatherInput) {
      imageQuality
      cloudCover
      windDirection
      windSpeed
    }
  }
`);
