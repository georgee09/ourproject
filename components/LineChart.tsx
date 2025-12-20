// import React from 'react'
"use client";
import { Line } from "react-chartjs-2"
import { ChartData, ChartOptions } from "chart.js"
import { Chart as ChartJS} from 'chart.js';
import { CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);


interface LineChartProps {
  data: ChartData<'line', number[], unknown>
  options?: ChartOptions<'line'>
}

const LineChart = ({data,options}: LineChartProps) => {
  return (
    <div className='bg-linear-to-b from-white to-purple-950 w-full my-4 rounded-lg p-4'>
        {/* Line Chart */}
        <Line data={data} options={options} />
    </div>
  )
}

export default LineChart