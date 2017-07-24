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
    })
    
    .render();

});