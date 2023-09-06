import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";//IMP
import { convertNumber } from "../../../functions/convertNumber";

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
        scales:{
            crypto1:{
                type : "linear",
                display :true,
                position : "left",
                ticks:{
                    callback: function(value,index,ticks){
                        if(priceType === "Prices"){
                            return '$' + value.toLocaleString();
                        }else{
                            return '$' + convertNumber(value).toLocaleString();
                        }
                    },
                },
            },
            crypto2:{
                type : "linear",
                display :true,
                position : "right",
                ticks:{
                    callback: function(value,index,ticks){
                        if(priceType === "Prices"){
                            return '$' + value.toLocaleString();
                        }else{
                            return '$' + convertNumber(value).toLocaleString();
                        }
                    },
                },
            },
        },
    };
    return <Line data={chartdata} options={options}/>
}

export default LineChart;