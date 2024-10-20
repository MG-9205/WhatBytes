"use client"
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Image from 'next/image'; 
import {useRef } from 'react';

Chart.register(...registerables);

const DoughnutChart = ({correct}:any) => {
  const chartRef = useRef<any>(null);
  
  const correctAnswers = correct;
  const totalQuestions = 15;
  const percentage = (correctAnswers / totalQuestions) * 100;

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'Questions Attempted',
        data: [totalQuestions - correctAnswers,correctAnswers, ],
        backgroundColor: ['rgba(39, 153, 245, 0.28)', 'rgba(39, 153, 245, 0.97)'],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: false,
        text: 'Quiz Performance',
      },
    },
  };

  return (
    <div className="relative w-full max-w-[180px] mx-auto">
      <Doughnut ref={chartRef} data={data} options={options} className=' transform rotate-90' />
      
     
      <div className="absolute inset-0 flex justify-center items-center w-[100%]">
        <div className="text-center flex justify-center items-center">
          <Image
            src="/score.png" 
            alt="Center Image"
            width={80} 
            height={80}
          />
        
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
