import Card from "@mui/material/Card";
import { CardHeader, CardContent } from "@mui/material";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import PropTypes from "prop-types";

Highchart.propTypes = {
  options: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
};

function Highchart(props) {
  let { options, title, discription } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader title={title} subheader={discription} />
      <CardContent>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </CardContent>
    </Card>
  );
}

Highchart.defaultProps = {
  options: {
    chart: {
      type: "spline",
    },
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  },
  title: "title",
  discription: "discription",
};

export default Highchart;
