import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";//IMP

function LineChart({chartdata,priceType,multiAxis}){
    const options = {
        plugins : {
            legend : {
                display : multiAxis?true:false,
            },
        },
        responsive : true,
        interactive : {
            mode : "index",
            interactive:false,
        },
    };
    return <Line data={chartdata} options={options}/>
}

export default LineChart;