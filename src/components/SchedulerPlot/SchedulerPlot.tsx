import React, { useContext, useEffect, useRef, useState } from "react";
import Highcharts, { SeriesArearangeOptions } from "highcharts";
import HighchartsReact, {
  HighchartsReactRefObject,
} from "highcharts-react-official";
import HighchartMore from "highcharts/highcharts-more";
HighchartMore(Highcharts);

import "./SchedulerPlot.scss";
import { ThemeContext } from "../../theme/ThemeProvider";

interface Visit {
  startDate: Date;
  endDate: Date;
  yPoints: number[];
  label: string;
  instrument: string;
}

interface AltAzPlotProps {
  data: Visit[];
  eveTwilight: string;
  mornTwilight: string;
  site: string;
}

const AltAzPlot: React.FC<AltAzPlotProps> = ({
  data,
  eveTwilight,
  mornTwilight,
  site,
}) => {
  const getOffset = (timeZone = "UTC", date = new Date()) => {
    const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
    const tzDate = new Date(date.toLocaleString("en-US", { timeZone }));
    return (tzDate.getTime() - utcDate.getTime()) / 6e4;
  };
  const INITIAL_TIMEZONE =
    site === "GN"
      ? getOffset("Pacific/Honolulu")
      : getOffset("America/Santiago");

  function getTzTime(date: Date) {
    return date.getTime() + INITIAL_TIMEZONE * 60 * 1000;
  }

  // Get theme context to modify chart values
  const { theme } = useContext(ThemeContext);
  const textColor = theme === "light" ? "#000" : "#ECEAEA";
  const gridLineColor = theme === "light" ? "#e6e6e6" : "#444";

  // ref for post-render use
  const chartRef = useRef<HighchartsReactRefObject>(null);
  const labelRef = useRef(null);

  // Array of colors from Highcharts
  const colorsOption = Highcharts.getOptions().colors;
  const colors = colorsOption
    ? colorsOption.filter(
        (color): color is Highcharts.ColorString => typeof color === "string"
      )
    : [];

  const instruments = [
    "GMOS-N",
    "GMOS-S",
    "GNIRS",
    "NIRI",
    "Flamingos2",
    "GSAOI",
    "GPI",
    "IGRINS",
    "NIFS",
  ];

  type ColorMap = {
    [key: string]: Highcharts.ColorString;
  };
  const createMap = (
    keys: string[],
    colors: Highcharts.ColorString[]
  ): ColorMap => {
    let map: ColorMap = {};

    for (let i = 0; i < keys.length; i++) {
      map[keys[i]] = colors[i];
    }

    return map;
  };
  const colorMap = createMap(instruments, colors);
  const eveTwiDate = new Date(eveTwilight);
  const mornTwiDate = new Date(mornTwilight);

  const seriesData: Array<SeriesArearangeOptions> = data.map(
    (d: any, index: number) => {
      const yMinArray = d.yPoints.map((y: number) => 0);
      return {
        name: d.instrument,
        type: "arearange",
        data: d.yPoints.map((y: any, i: number) => {
          return {
            x: getTzTime(d.startDate) + i * 60 * 1000,
            low: yMinArray[i],
            high: y,
          };
        }),
        lineWidth: 1,
        color: colorMap[d.instrument],
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false,
        },
        events: {
          legendItemClick: function () {
            return false; // Prevents the default action, which is toggling visibility
          },
        },
        showInLegend: true, // Hide this series in the legend
      };
    }
  );

  // Create a set to keep track of names we've seen
  let seenNames = new Set();

  // Modify the series to set showInLegend to false for duplicates
  for (let serie of seriesData) {
    if (seenNames.has(serie.name)) {
      serie.showInLegend = false; // Don't show in legend if it's a duplicate
    } else {
      seenNames.add(serie.name); // Add the name to the set if we haven't seen it
    }
  }

  useEffect(() => {
    if (!labelRef.current) {
      labelRef.current = [];
    }

    if (chartRef.current) {
      const chart = chartRef.current.chart;

      chart.update({
        series: seriesData,
      });

      // Remove old labels
      labelRef.current.forEach((lbl: any) => lbl.destroy());

      // Render custom labels for each section
      data.forEach((d, index) => {
        const x = (getTzTime(d.startDate) + getTzTime(d.endDate)) / 2;
        const y = Math.max(...d.yPoints) / 2;

        const xPos = chart.xAxis[0].toPixels(x, false);
        const yPos = chart.yAxis[0].toPixels(y, false);

        let lbl = chart.renderer
          .text(d.label, xPos, yPos)
          .attr({
            rotation: -90,
            textAlign: "center",
          })
          .css({
            fontWeight: "bold",
            color: textColor, // Change the color of the custom label
          })
          .add();

        labelRef.current.push(lbl);
      });
    }
  }, [seriesData]);

  const options: Highcharts.Options = {
    time: {
      timezone: "Pacific/Honolulu",
    },
    chart: {
      type: "arearange",
    },

    tooltip: {
      // Use the shared tooltip to show information for the entire area
      shared: true,
      formatter: function () {
        if (this.points) {
          var points = this.points;
          // Assuming the first point is representative for the area
          var point = this.series.name;
          return point;
        }
        return false; // No tooltip for individual points
      },
    },
    title: {
      text: undefined,
    },
    xAxis: {
      type: "datetime",
      labels: {
        formatter: function () {
          return Highcharts.dateFormat("%H:%M", this.value as number);
        },
        style: {
          color: textColor, // Change the color of y-axis tick labels
        },
      },
      min: getTzTime(eveTwiDate),
      max: getTzTime(mornTwiDate),
      tickPositioner: function () {
        var positions = [];
        var interval = 1 * 60 * 60 * 1000;

        for (
          var i = getTzTime(eveTwiDate);
          i <= getTzTime(mornTwiDate);
          i += interval
        ) {
          positions.push(i);
        }
        return positions;
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        style: {
          color: textColor, // Change the color of y-axis tick labels
        },
      },
      gridLineColor: gridLineColor, // Change the color of horizontal grid lines
      min: 0,
      max: 90,
    },
    legend: {
      enabled: true,
      align: "right",
      verticalAlign: "top",
      layout: "vertical",
      itemStyle: {
        color: textColor,
      },
    },
    series: seriesData,
  };

  return (
    <div className="scheduler-plot">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
      />
    </div>
  );
};

export default AltAzPlot;
