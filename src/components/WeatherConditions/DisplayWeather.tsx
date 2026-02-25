import { useSubscription } from "@apollo/client";
import { weatherUpdatesSubscription } from "./subscription";
import { cn } from "@/lib/utils";

export function DisplayWeather() {
  // Use the useSubscription hook to subscribe to weather updates
  const { data, loading, error } = useSubscription(weatherUpdatesSubscription, {
    context: { clientName: "weatherClient" },
  });

  return (
    <div
      className={cn(
        "border rounded-md flex flex-col gap-2 p-3 flex-wrap",
        "dark:bg-white/20 bg-black/10"
      )}
    >
      <h1 className="font-bold">Latest Weather Update</h1>
      {loading && <p>Waiting for weather updates...</p>}
      {error && <p>Error loading weather data: {error.message}</p>}
      {data && data.weatherUpdates && (
        <div>
          <p>Site: {data.weatherUpdates.site}</p>
          <p>Image Quality: {data.weatherUpdates.imageQuality}</p>
          <p>Cloud Cover: {data.weatherUpdates.cloudCover}</p>
          <p>Wind Direction: {data.weatherUpdates.windDirection}</p>
          <p>Wind Speed: {data.weatherUpdates.windSpeed}</p>
        </div>
      )}
    </div>
  );
}
