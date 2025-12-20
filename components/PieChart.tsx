// import React from 'react'
"use client";
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  piedata: ChartData<'pie', number[], unknown>
}

const PieChart = ({piedata}: PieChartProps) => {
  return (
    <div className="font-bold p-2 my-1 rounded-lg bg-linear-to-b from-white to-purple-950">
        {/* Pie Chart */}
        <Pie data={piedata} />
    </div>
  )
}

export default PieChart