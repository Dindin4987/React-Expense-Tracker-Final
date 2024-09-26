import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Donut = () => {
  const data = {
    labels: ["Hobby", "Products", "Cinema", "Health"],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: ["#0EF387", "#FAFAFA", "#353333", "#0EF387"],
        hoverBackgroundColor: ["#0EF387", "#FAFAFA", "#353333", "#0EF387"],
        borderColor: ["#0EF387", "#FAFAFA", "#353333", "#0EF387"],
        circumference: 180,
        rotation: 270,
        // borderWidth: 1,
        cutout: "70%",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right", // Change this to 'left', 'top', 'bottom', etc. as needed
        labels: {
          color: "white", // Customize the text color
          font: {
            size: 10,
          },
          // boxWidth: 20, // Customize box size
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const gaugeText = {
    id: "gaugeText",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;

      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.fillStyle = "white";
      ctx.font = "bold 20px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("100%", xCenter, yCenter);
    },
  };
  return (
    <div style={{ width: "292px", height: "285px" }} className="w-1/2">
      <p className="pt-8">Expenses categories</p>
      <Doughnut data={data} options={options} plugins={[gaugeText]} />
    </div>
  );
};

export default Donut;
