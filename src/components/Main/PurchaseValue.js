import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";

// ChartJS.register(
//   LinearScale,
//   CategoryScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Legend,
//   Tooltip,
//   registerables
// );
ChartJS.register(...registerables);

const data = {
  labels: ["Jan 12", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [20000, 15000, 12000, 13000, 12500, 14000, 18000],
      data1: [20000, 15000, 12000, 13000, 12500, 14000, 18000],
      data2: [19000, 13000, 11000, 9000, 10000, 11000, 18000],
      data3: [17000, 14000, 8000, 5000, 9000, 5000, 18000],
      data4: [10.0, 9.9, 5.7, 6.3, 4.6, 8.9, 12.2],
      type: "line",
      fill: false,
      borderColor: "#FFE854",
      pointBorderColor: "#FFE854",
      pointBackgroundColor: "#FFE854",
      pointRadius: 5,
      pointHoverRadius: 7,
    },
    {
      data: [20000, 15000, 12000, 13000, 12500, 14000, 18000],
      data1: [20000, 15000, 12000, 13000, 12500, 14000, 18000],
      data2: [19000, 13000, 11000, 9000, 10000, 11000, 20000],
      data3: [17000, 14000, 8000, 5000, 9000, 5000, 18000],
      data4: [10.0, 9.9, 5.7, 6.3, 4.6, 8.9, 12.2],
      backgroundColor: "#37B04C",
    },
  ],
};

const option = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: function () {
          return "Date/Month/Year";
        },
        beforeLabel: function (tooltipItem) {
          let itemIndex = tooltipItem.dataIndex;
          return (
            "Gross : " +
            tooltipItem.dataset.data1[itemIndex] +
            "\nNett : " +
            tooltipItem.dataset.data2[itemIndex] +
            "\nAPV : " +
            tooltipItem.dataset.data3[itemIndex] +
            "\nUPT : " +
            tooltipItem.dataset.data4[itemIndex]
          );
        },
        label: function () {
          return "";
        },
      },
    },
  },
};

const PurchaseValue = () => {
  return <Chart type="bar" data={data} options={option} />;
};

export default PurchaseValue;
