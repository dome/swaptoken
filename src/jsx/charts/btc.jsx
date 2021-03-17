
import React, { Component, useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from 'axios';



class BtcChart extends Component {
    

    constructor(props) {
        super(props);


        this.state = {

            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 80, 10, 41, 35, 51, 49, 62, 69, 91, 80]
            }],
            options: {
                chart: {
                    height: 100,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },

                    toolbar: {
                        show: false,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                    colors: ["#F7931A"],
                },
                grid: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                    x: {
                        format: "dd MMM yyyy"
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    axisBorder: {
                        show: false
                    },

                    labels: {
                        show: false
                    }
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
            },


        };
    }


    componentDidMount() {
        //alert("a")
        fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1").then(
            res => {
                this.setState({...this.state, data: res.data})
                console.log(res)
                console.log("a")
            }
        )
    }

    render() {
        return (


            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={100} />


        );
    }
}

export default BtcChart;