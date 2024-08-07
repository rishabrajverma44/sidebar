import Highchart from "./highchart/Highchart";

function PieChart() {
  const title = "Sub-Category";
  const discription =
    "The assets are distributed between equity and cash & equivalents.";
  const chartConfig = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "",
      style: {
        display: "none",
      },
    },
    exporting: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "{series.name} <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    legend: {
      alignColumns: false,
      itemDistance: 4,
      labelFormatter: function () {
        return `${this.name}  <strong>${this.y}% </strong>`;
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        borderWidth: "0",
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "",
        colorByPoint: true,
        data: [
          {
            name: "Flexi Cap Fund",
            y: 32.19,
            color: "#75D6FF",
          },
          {
            name: "ELSS",
            y: 26.04,
            color: "#AA75FF",
          },
          {
            name: "Small Cap Fund",
            y: 26.4,
            color: "#75FFFF",
          },
          {
            name: "Index Fund",
            y: 12.03,
            color: "#FF7BF2",
          },
          {
            name: "Sectoral Fund",
            y: 26.4,
            color: "#FFC46A",
          },
          {
            name: "Large & Mid Cap Fund",
            y: 12.03,
            color: "#FF8E5D",
          },
        ],
      },
    ],
  };

  return (
    <Highchart title={title} discription={discription} options={chartConfig} />
  );
}

export default PieChart;
