import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const Donut = () => {
  const data = {
    labels: ["Hobby", "Products", "Cinema", "Health"],
    datasets: [
      {
        data: [45, 25, 20, 10], // These are the percentages for each category
        backgroundColor: ["#22c55e", "#4ade80", "#9ca3af", "#374151"], // Colors for the chart
        hoverBackgroundColor: ["#16a34a", "#22c55e", "#6b7280", "#1f2937"],
        borderColor: ["#0EF387", "#FAFAFA", "#353333", "#0EF387"],
        circumference: 180,
        rotation: 270,
        // borderWidth: 1,
        cutout: "70%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true, // Hide the default legend
        position: "right",
      },
    },
    responsive: true,
    maintainAspectRatio: true, // Allows custom height/width
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
    <div
      style={{ width: "630px", height: "302px" }}
      className=" rounded-lg p-2 flex"
    >
      <p>Expenses categories</p>
      <Doughnut data={data} options={options} plugins={[gaugeText]} />
    </div>
  );
};

export default Donut;

// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Donut = () => {
//   const data = {
//     labels: ["Hobby", "Products", "Cinema", "Health"],
//     datasets: [
//       {
//         data: [45, 25, 20, 10],
//         backgroundColor: ["#0EF387", "#FAFAFA", "#353333", "#0EF387"],
//         hoverBackgroundColor: ["#0EF387", "#FAFAFA", "#353333", "#0EF387"],
//         borderColor: ["#0EF387", "#FAFAFA", "#353333", "#0EF387"],
//         cutout: "75%", // It's in the right place
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     circumference: 180, // Move circumference here
//     rotation: 270, // Move rotation here
//     plugins: {
//       legend: {
//         display: true,
//         position: "right",
//         labels: {
//           color: "white",
//           font: {
//             size: 10,
//           },
//         },
//       },
//       tooltip: {
//         enabled: true,
//       },
//     },
//   };

//   const gaugeText = {
//     id: "gaugeText",
//     beforeDatasetsDraw(chart, args, pluginOptions) {
//       const {
//         ctx,
//         chartArea: { width, height },
//       } = chart;

//       const xCenter = chart.getDatasetMeta(0).data[0].x;
//       const yCenter = chart.getDatasetMeta(0).data[0].y;

//       ctx.save();
//       ctx.fillStyle = "white";
//       ctx.font = "bold 20px sans-serif";
//       ctx.textAlign = "center";
//       ctx.fillText("100%", xCenter, yCenter);
//       ctx.restore();
//     },
//   };

//   return (
//     <div className="" style={{ width: "292px", height: "285px" }}>
//       <p className="pt-8">Expenses categories</p>
//       <Doughnut data={data} options={options} plugins={[gaugeText]} />
//     </div>
//   );
// };

// export default Donut;
