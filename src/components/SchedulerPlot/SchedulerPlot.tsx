import React, { useEffect, useRef } from 'react';
import Highcharts, { SeriesArearangeOptions } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartMore from 'highcharts/highcharts-more';
HighchartMore(Highcharts)


interface Visit{
    startDate: Date,
    endDate: Date,
    yPoints: number[],
    label: string
}

interface AltAzPlotProps {
  data: Visit[];
}


const AltAzPlot: React.FC<AltAzPlotProps> = ({ data }) => {
  const chartRef = useRef<HighchartsReact>(null);
  const colors = Highcharts.getOptions().colors;
  
  const seriesData: Array<SeriesArearangeOptions> = data.map((d, index) => {
    const yMinArray = d.yPoints.map((y) => 0);
    return {
      name: `Entry ${index + 1}`,
      type: "arearange",
      data: d.yPoints.map((y, i) => {
        return {
          x: d.startDate.getTime() + i * 60 * 1000,
          low: yMinArray[i],
          high: y,
        };
      }),
      lineWidth: 1,
      color: colors[index % colors.length],
      fillOpacity: 0.3,
      zIndex: 0,
      marker: {
        enabled: false,
      },
    };
  });

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current.chart;
  
      chart.update({
        series: seriesData,
        xAxis: {
          type: "datetime",
        },
        yAxis: {},
      });
  
      // Render custom labels for each section
      data.forEach((d, index) => {
        const x = (d.startDate.getTime() + d.endDate.getTime()) / 2;
        const y = Math.max(...d.yPoints) / 2;
  
        const xPos = chart.xAxis[0].toPixels(x);
        const yPos = chart.yAxis[0].toPixels(y);
  
        chart.renderer.text(d.label, xPos, yPos)
          .attr({
            rotation: -90,
            textAlign: "center",
          })
          .css({
            fontWeight: "bold",
          })
          .add();
      });
    }
  }, seriesData);

  const options: Highcharts.Options = {
    chart: {
      type: "arearange",
    },
    title: {
        text: null,
      },
    xAxis: {
      type: "datetime",
      labels: {
        formatter: function () {
          return Highcharts.dateFormat("%H:%M", this.value);
        },
      },
      tickPositioner: function () {
        const minTimestamp = Math.min(...data.map((d) => d.startDate.getTime()));
        const maxTimestamp = Math.max(...data.map((d) => d.endDate.getTime()));
        const oneHour = 1000 * 60 * 60;

        const tickPositions = [];
        for (let timestamp = minTimestamp; timestamp <= maxTimestamp; timestamp += oneHour) {
          tickPositions.push(timestamp);
        }

        return tickPositions;
      },
    },
    yAxis: {
        title:{
            text: null
        }
    },
    legend: {
        enabled: false,
    },
    series: seriesData,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />;
};

export default AltAzPlot;