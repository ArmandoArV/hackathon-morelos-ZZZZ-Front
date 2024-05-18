import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./ChartComponent.css";

// Define valid chart types
const validChartTypes = [
  "line",
  "bar",
  "radar",
  "doughnut",
  "polarArea",
  "bubble",
  "pie",
  "scatter",
];

const ChartComponent = ({
  data,
  labels,
  graphTitle,
  isFilled,
  chartType,
  borderColor = "rgba(75,192,192,1)",
  fillColor,
  cName,
}) => {
  if (!validChartTypes.includes(chartType)) {
    throw new Error(`Invalid chart type: ${chartType}`);
  }

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: chartType,
          data: {
            labels,
            datasets: [
              {
                label: graphTitle, // This sets the dataset label but doesn't control the chart title
                data,
                fill: isFilled ? true : false,
                borderColor: borderColor,
                backgroundColor: fillColor,
                borderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 8,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
              },
              title: {
                display: true,
                text: graphTitle,
              },
            },
          },
        });
      }
    }
    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels, graphTitle, chartType, isFilled, borderColor, fillColor]);

  return (
    <div className="chartComponent">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
