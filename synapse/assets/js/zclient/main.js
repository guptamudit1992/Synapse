$(document).ready(function() {

  
        var budgetChart = new FusionCharts({
            type: 'radar',
            renderAt: 'chart-container',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Performance Analysis",
                    "subCaption": "Current month",
                    "captionFontSize": "14",
                    "subcaptionFontSize": "14",
                    "baseFontColor" : "#333333",
                    "baseFont" : "Helvetica Neue,Arial",                        
                    "subcaptionFontBold": "0",
                    "paletteColors": "#008ee4,#6baa01",
                    "bgColor" : "#ffffff",
                    "radarfillcolor": "#ffffff",
                    "showBorder" : "0",
                    "showShadow" : "0",
                    "showCanvasBorder": "0",
                    "legendBorderAlpha": "0",
                    "legendShadow": "0",
                    "divLineAlpha": "10",
                    "usePlotGradientColor": "0",
                    "legendBorderAlpha": "0",
                    "legendShadow": "0"
                },
                "categories": [
                    {
                        "category": [
                            { "label": "Communication" },
                            { "label": "Stimulation" },
                            { "label": "Enthusiasm" },
                            { "label": "Encouragement" },
                            { "label": "Respect" }
                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "PGP 32",
                        "data": [
                            { "value": "19000" },
                            { "value": "16500" },
                            { "value": "14300" },
                            { "value": "10000" },
                            { "value": "9800" }
                        ]
                    },
                    {
                        "seriesname": "PGP 33",
                        "data": [
                            { "value": "6000" },
                            { "value": "9500" },
                            { "value": "11900" },
                            { "value": "8000" },
                            { "value": "9700" }
                        ]
                    }
                ]
            }
        }).render();




         var wealthChart = new FusionCharts({
        type: 'pyramid',
        renderAt: 'chart-container1',
        id: 'wealth-pyramid-chart',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Feedback Pyramid",
                "captionOnTop" : "0",
                "captionPadding": "25",
                "alignCaptionWithCanvas" : "1",
                "subcaption": "Synapse 2017",
                "subCaptionFontSize" : "12",
                "borderAlpha": "20",
                "is2D": "1",
                "bgColor": "#ffffff",
                "showValues": "1",
                "numberPrefix": "$",
                "numberSuffix": "M",
                "plotTooltext": "$label of class recorded $value ",
                "showPercentValues": "1",
                "chartLeftMargin": "40"
            },
            "data": [
                {
                    "label": "Top 32%",
                    "value": "10"
                },
                {
                    "label": "Next 27%",
                    "value": "20"
                },
                {
                    "label": "Next 23",
                    "value": "30"
                },
                {
                    "label": "Last 18%",
                    "value": "50"
                }
            ]
        }  
    }).render();



          var conversionChart = new FusionCharts({
        type: 'bubble',
        renderAt: 'chart-container2',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Range Analysis of Teaching Methodology",
                "subcaption": "Last Trimester",
                "xAxisMinValue": "0",
                "xAxisMaxValue": "100",
                "yAxisMinValue": "0",
                "yAxisMaxValue": "30000",
                "plotFillAlpha": "70",
                "plotFillHoverColor": "#6baa01",
                "showPlotBorder": "0",
                "xAxisName": "Average Score",
                "yAxisName": "Average Distribution",
                "numDivlines": "2",
                "showValues":"1"
            },
            //x-axis segmented into categorical zone (Average Price) 
            //ranging 0-20, 20-40, etc.
            "categories": [
                {
                    "category": [
                        {
                            "label": "0",
                            "x": "0"
                        }, 
                        {
                            "label": "Excellent",

                            "x": "20",
                            "showverticalline": "1"
                        }, 
                        {
                            "label": "Very Good",
                            "x": "40",
                            "showverticalline": "1"
                        }, 
                        {
                            "label": "Good",
                            "x": "60",
                            "showverticalline": "1"
                        }, 
                        {
                            "label": "Fair",
                            "x": "80",
                            "showverticalline": "1"
                        }, {
                            "label": "Poor",
                            "x": "100",
                            "showverticalline": "1"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "color":"#00aee4",
                    "data": [
                        {
                            "x": "80",
                            "y": "15000",
                            "z": "24",
                            "name": "Sec F"
                        }, 
                        {
                            "x": "60",
                            "y": "18500",
                            "z": "26",
                            "name": "Sec G"
                        }, 
                        {
                            "x": "50",
                            "y": "19450",
                            "z": "19",
                            "name": "Sec H"
                        },
                        {
                            "x": "65",
                            "y": "10500",
                            "z": "8",
                            "name": "Sec A"
                        }
                    ]
                }
            ],
            "vtrendlines": [
                {
                    "line": [
                        {
                            "startValue": "0",
                            "endValue": "20",
                            "isTrendZone": "1",
                            "color": "#adebff",
                            "alpha": "25",
                            "displayValue": " "
                        }, 
                        {
                            "startValue": "20",
                            "endValue": "40",
                            "isTrendZone": "1",
                            "color": "#adebff",
                            "alpha": "15",
                            "displayValue": " "
                        }, 
                        {
                            "startValue": "40",
                            "endValue": "60",
                            "isTrendZone": "1",
                            "displayValue": " "
                        }, 
                        {
                            "startValue": "60",
                            "endValue": "80",
                            "isTrendZone": "1",
                            "color": "#f2a485",
                            "alpha": "25",
                            "displayValue": " "
                        }, 
                        {
                            "startValue": "80",
                            "endValue": "100",
                            "isTrendZone": "1",
                            "color": "#f2a485",
                            "alpha": "15",
                            "displayValue": " "
                        }
                    ]
                }
            ]
        }
    }).render();


 var ratingsChart = new FusionCharts({
        type: 'line',
        renderAt: 'chart-container3',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Top Employees",
                "subcaption": "Last six months",
                "xAxisName": "Month",
                "yAxisName": "Rating",
                "yaxisminvalue": "0",
                "yaxismaxvalue": "10",
                "yAxisValuesPadding": "15",
                "valuePosition" : "below",
                "numDivlines": "5",
                "lineAlpha": "1",
                "anchorAlpha": "100",
                //Theme
                "theme":"fint"
            },
            "data": [
                {
                    "label": "July",
                    "value": "7.8",
                    "displayValue" :"John, 7.8",
                    "tooltext" :"July : John, 7.8",
                    "anchorImageUrl":"http://static.fusioncharts.com/sampledata/userimages/1.png"
                    
                }, 
                {
                    "label": "August",
                    "value": "6.9",
                    "displayValue" :"Mac, 6.9",
                    "tooltext" :"August : Mac, 6.9",
                    "anchorImageUrl":"http://static.fusioncharts.com/sampledata/userimages/2.png"
                }, 
                {
                    "label": "September",
                    "value": "8",
                    "displayValue" :"Phillips, 8",
                    "tooltext" :"September : Phillips, 8",
                    "anchorImageUrl":"http://static.fusioncharts.com/sampledata/userimages/3.png"
                }, 
                {
                    "label": "October",
                    "value": "7.5",
                    "displayValue" :"Terrin, 7.5",
                    "tooltext" :"October : Terrin, 7.5",
                    "anchorImageUrl":"http://static.fusioncharts.com/sampledata/userimages/4.png"
                }, 
                {
                    "label": "November",
                    "value": "7.7",
                    "displayValue" :"Tom, 7.7",
                    "tooltext" :"November : Tom, 7.7",
                    "anchorImageUrl":"http://static.fusioncharts.com/sampledata/userimages/5.png"
                }, 
                {
                    "label": "December",
                    "value": "6.7",
                    "displayValue" :"Martha, 6.7",
                    "tooltext" :"December : Martha, 6.7",
                    "anchorImageUrl":"http://static.fusioncharts.com/sampledata/userimages/6.png"
                }
            ]
        }
    });

    ratingsChart.render();

});