import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { Link } from 'react-router-dom';



const Fourth = () => {
    const home_url="http://localhost:3000/";

    function movingAverage(data, windowSize) {
        let averagedData = [];
        for (let i = 0; i < data.length; i++) {
            let sum = 0;
            let count = 0;
            for (let j = Math.max(0, i - windowSize); j <= Math.min(data.length - 1, i + windowSize); j++) {
                sum += data[j];
                count++;
            }
            averagedData.push(sum / count);
        }
        return averagedData;
    }


    const dates = [
        '2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05', '2024-07-06',
        '2024-07-07', '2024-07-08', '2024-07-09', '2024-07-10', '2024-07-11', '2024-07-12',
        '2024-07-13', '2024-07-14', '2024-07-15', '2024-07-16', '2024-07-17', '2024-07-18',
        '2024-07-19', '2024-07-20', '2024-07-21', '2024-07-22', '2024-07-23', '2024-07-24',
        '2024-07-25', '2024-07-26', '2024-07-27', '2024-07-28', '2024-07-29', '2024-07-30',
        '2024-07-31', '2024-08-01'
    ];

    const dischargeDataActule = [
        1353, 1717, 915, 1364, 1410, 1306, 1086, 1138, 996, 1298, 1187, 1300, 1353, 1717, 915, 1364, 1410, 1306, 1086, 1138, 996, 1298, 1187, 1300, 915, 1364, 1410, 1306, 1086, 1138, 996, 1298, 1187, 1300
    ]
    const dischargeDataForeCasted = [
        1353, 1717, 915, 1364, 1410, 1306, 1086, 1138, 996, 1298, 1187, 1300, 1353, 1717, 915, 1364, 1410, 1306, 1086, 1138, 996, 1298, 1187, 1300, 915, 1364, 1410, 1306, 1086, 1138, 996, 1298, 1187, 1300
    ];
    const powerDataActule = [
        305, 294, 302, 291, 349, 308, 309, 296, 303, 347, 331, 299, 296, 348, 313, 315, 346, 321, 321, 335, 351, 290, 306, 335, 324, 309, 290, 329, 287, 335, 346, 358, 310, 319, 282, 338, 347, 319, 334, 299, 354, 350, 317, 355, 327, 351, 317, 347, 323, 335
    ];
    const powerDtataForeCated = [311, 288, 324, 289, 368, 327, 311, 299, 317, 335, 339, 297, 298, 336, 302, 304, 357, 332, 319, 326, 332, 288, 325, 334, 335, 328, 297, 318, 288, 326, 339, 332, 275, 327, 283, 327, 336, 310, 323, 286, 359, 341, 328, 346, 335, 345, 336, 336, 332, 346, 289, 347, 326, 328, 329, 299, 365, 345];

    const optionsDischarge = {
        chart: {
            type: 'area'
        },

        title: {
            text: 'Actual and forecasted Discharge'
        },

        xAxis: {
            categories: dates,
            title: {
                text: 'Date'
            },
            accessibility: {
                rangeDescription: 'Range of dates'
            }
        },
        yAxis: {
            title: {
                text: 'Flow Rate (m³/s)'
            },
            min: 100,
            max: 2000,
            tickInterval: 400
        },
        tooltip: {
            pointFormat: '{series.name} discharge of <b>{point.y:,.0f}</b><br/> cumec ' +
                ' on {point.x}'
        },
        plotOptions: {
            area: {
                marker: {
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Actule Discharge',
            data: movingAverage(dischargeDataActule, 2)
        }, {
            name: 'Forecasted Discharge',
            data: movingAverage(dischargeDataForeCasted, 4)
        }]

    }


    const optionsPower = {
        chart: {
            type: 'area'
        },

        title: {
            text: 'Actual and forecasted Power'
        },

        xAxis: {
            categories: dates,
            title: {
                text: 'Date'
            },
            accessibility: {
                rangeDescription: 'Range of dates'
            }
        },
        yAxis: {
            title: {
                text: 'Power (MW)'
            },
            min: 0,
            max: 400,
            tickInterval: 50
        },
        tooltip: {
            pointFormat: '{series.name} power <b>{point.y:,.0f}</b><br/> megawatt ' +
                ' on {point.x}'
        },
        plotOptions: {
            area: {
                marker: {
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Actule Power',
            data: movingAverage(powerDataActule, 1)
        }, {
            name: 'Forecasted Power',
            data: movingAverage(powerDtataForeCated, 1)
        }]

    }


    return (
        <>
        <Link to={home_url}  class="inline-flex text-black bg-primary-600">Back to Homepage</Link>

            <h3>area-charts</h3>
            <HighchartsReact options={optionsDischarge} highcharts={Highcharts} />
            <HighchartsReact options={optionsPower} highcharts={Highcharts} />
        </>
    )
}
export default Fourth;