import { useQuery, useSubscription } from "@apollo/client";
import { weatherUpdatesSubscription } from "./subscription";
import { cn } from "@/lib/utils";
import { getWeather } from "./query";
import { useEffect, useState } from "react";

export function DisplayWeather() {
  const { data: weatherData } = useQuery(getWeather, {
    fetchPolicy: "no-cache",
    context: { clientName: "weatherClient" },
  });

  // Use the useSubscription hook to subscribe to weather updates
  const { data, error } = useSubscription(weatherUpdatesSubscription, {
    context: { clientName: "weatherClient" },
  });

  const [weatherState, setWeatherState] = useState([]);

  useEffect(() => {
    setWeatherState(weatherData?.weather);
  }, [weatherData]);

  useEffect(() => {
    if (data && data.weatherUpdates) {
      const currentState = [...weatherState];
      setWeatherState(
        currentState?.map((w) => {
          if (w.site === data.weatherUpdates.site) {
            return data.weatherUpdates;
          } else {
            return w;
          }
        })
      );
    }
  }, [data]);

  return (
    <div
      className={cn(
        "border rounded-md flex flex-col gap-2 p-3 flex-wrap grow",
        "dark:bg-white/20 bg-black/10"
      )}
    >
      <h1 className="font-bold">Current Weather</h1>
      {error && <p>Error loading weather data: {error.message}</p>}
      <div className="flex flex-row gap-2 w-full">
        {weatherState?.map(
          (data: {
            site: string;
            imageQuality: number;
            cloudCover: number;
            windDirection: number;
            windSpeed: number;
          }) => (
            <div
              key={`siteWeather${data.site}`}
              className="p-3 border rounded-md dark:bg-black/10 bg-white/10 grow"
            >
              <p>{data.site}</p>
              <p>Image Quality: {data.imageQuality}</p>
              <p>Cloud Cover: {data.cloudCover}</p>
              <p>Wind Direction: {data.windDirection}</p>
              <p>Wind Speed: {data.windSpeed}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
