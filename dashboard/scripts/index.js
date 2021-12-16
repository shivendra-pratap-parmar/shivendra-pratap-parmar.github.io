document.addEventListener('DOMContentLoaded', () => {
    initalizeCharts();
});

const months = ["FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV"];
let blackHaze = "#383839", tuna = "#3fccb4";

function initalizeCharts(){
    console.log('initialize charts called');
    let ctx = document.getElementById("column_chart").getContext("2d");
    const chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Pro downloads',
                    data: [5800, 5400, 1900, 5600, 2500, 6241, 1700, 4600, 7050, 2200],
                    borderWidth: 1,
                    backgroundColor: [blackHaze, blackHaze, blackHaze, blackHaze, blackHaze, blackHaze, blackHaze, blackHaze, blackHaze, blackHaze],
                    barPercentage: 0.1
                },
                {
                    label: 'Single Purchases',
                    data: [2000, 400, 7000, 1900, 1200, 2067, 4400, 2400, 2750, 3400],
                    borderWidth: 1,
                    backgroundColor: [tuna, tuna, tuna, tuna, tuna, tuna, tuna, tuna, tuna, tuna],
                    barPercentage: 0.1
                }
            ],
        },
        options: {
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            display: false
                        }
                    }
                ],
                yAxes: [
                    {
                        stacked: true,
                        ticks: {
                            stepSize: 2000,
                            padding: 25
                        },
                        gridLines: {
                            borderDash: [5],
                            color: 'grey'
                        }
                    }
                ]
            }
        }
    })
}