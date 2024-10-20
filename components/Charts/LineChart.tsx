"use client";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface StudentData {
  percentile: number;
  count: number;
}

const LineChart = () => {
  
    const data: Array<StudentData> = [
   {percentile:10,count:5},
   {percentile:15,count:3},
   {percentile:40,count:10},
   {percentile:60,count:5},
   {percentile:65,count:11},
   {percentile:70,count:2},
   {percentile:80,count:4},
   {percentile:90,count:2},
   {percentile:75,count:5},
   {percentile:85,count:4},
   {percentile:100,count:1},
    ];
    

  
  const percentileIndexes = ['0', '25', '50', '75', '100'];
  const chartData = {
    labels: percentileIndexes, 
    datasets: [
      {
        label: 'Number of Students',
        data: data.map(item => item.count), 
    
       
        borderColor: 'rgba(75, 192, 192, 1)', 
        tension: 0.4,
        borderWidth: 2, 
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
        tooltip: {
            callbacks: {
                label: (context: any) => {
                    const percentile = context.label;
                    const studentCount = data.find(item => item.percentile.toString() === percentile)?.count; // Find the count
                    return `Percentile ${percentile}: ${studentCount} students`;
                },
            },
        },
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            stacked: true,
            display: true,
            title: {
                display: false,
                text: 'Percentiles',
            },
            grid: {
                display: false,
            },
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Number of Students',
            },
            grid: {
                display: false,
            },
            ticks: {
                stepSize: 25, 
                beginAtZero: true, 
            },
            min: 0, 
            max: 100, 
        },
    },
    elements: {
        line: {
            borderWidth: 2,
        },
        point: {
            radius: 4, 
            hoverRadius: 6, 
            backgroundColor: 'white', 
            hoverBackgroundColor: 'red', 
        },
    },
    interaction: {
        mode: 'nearest', 
        intersect: true, 
    },
    layout: {
        padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
        },
    },
};


  return (
    
      <Line options={options} data={chartData} />
   
  );
};

export default LineChart;
