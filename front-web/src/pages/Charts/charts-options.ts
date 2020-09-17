export const pieOptions = {
    chart: {
        background: "transparent",
        foreColor: "red",
    },
    // colors: ["#a8dadc", "#ed7947", "#00D4FF", "#ffd6a5"],
    legend: {
        show: false,
    },
    tooltip: {
        enabled: false,
    },
    dataLabels: {
        enabled: true,
        offsetX: "100px",
        offsetY: "100px",
        style: {
            fontSize: "22px",
            fontFamily: "Play, sans-serif",
            fontWeight: 600,
        },
    },
    plotOptions: {
        pie: {
            customScale: 0.7,
            expandOnClick: false,
            dataLabels: {
                offset: 60,
            },
        },
    },
};

export const barOptions = {
    chart: {
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 3000,
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        },
        toolbar: {
            show: false,
        },
    },
    colors: ["#FF4D00"],
    grid: {
        show: false,
    },
    plotOptions: {
        bar: {
            horizontal: true,
            endingShape: "rounded",
            startingShape: "rounded",
            barHeight: "60px",
        },
    },
    dataLabels: {
        enabled: true,
        style: {
            fontSize: "22px",
            fontFamily: "Play, sans-serif",
            fontWeight: 600,
        },
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: [
        {
            labels: {
                maxWidth: 360,
                style: {
                    colors: "#00D02D",
                    fontSize: "22px",
                    fontFamily: "Play, sans-serif",
                    fontWeight: 700,
                },
            },
        },
    ],
};