import { useSubscription } from "@apollo/client";
import { weatherUpdatesSubscription } from "./subscription";

export function DisplayWeather({ site }: { site: string }) {
  // Use the useSubscription hook to subscribe to weather updates
  const { data, loading, error } = useSubscription(weatherUpdatesSubscription, {
    variables: { site },
    context: { clientName: "weatherClient" },
  });

  return (
    <div>
      <p>Displaying weather data for site: {site}</p>
      {loading && <p>Loading weather data...</p>}
      {error && <p>Error loading weather data: {error.message}</p>}
      {data && data.weatherUpdates && (
        <div>
          <p>Image Quality: {data.weatherUpdates.imageQuality}</p>
          <p>Cloud Cover: {data.weatherUpdates.cloudCover}</p>
          <p>Wind Direction: {data.weatherUpdates.windDirection}</p>
          <p>Wind Speed: {data.weatherUpdates.windSpeed}</p>
        </div>
      )}
    </div>
  );
}
