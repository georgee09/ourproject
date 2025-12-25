// 'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { RiNotification4Fill } from 'react-icons/ri';
// import { Line } from 'react-chartjs-2';
import { CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Car} from 'lucide-react';
import PieChart from '@/components/PieChart';
import LineChart from '@/components/LineChart';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
  options: {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top' as const,
        labels: {
          color: 'white'
        }
      },
        datalabels: {
            display: true,
            // fontColor: 'white',
            // font: {
            //   color: 'rgba(255, 255, 255, 1)'
            // }
        }
      }
    }
};

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgba(150, 0, 255, 0.5)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

// import Image from "next/image";
export default function Home() {
  // console.log(`${process.env.NEXT_PUBLIC_API_KEY}`);
  return (
    <main className="max-w-6xl mx-auto text-white font-sans dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-transparent min-h-screen col-span-1">
            <p className="font-bold text-2xl">
              Today Statistics
            </p>
            <p className="font-sm text-gray-300">
              Tue, 16 Dec, 2025, 8:30 AM
            </p>
            <div className="font-bold p-2 my-1 rounded-lg bg-linear-to-l from-purple-500 to-purple-950">
              <div className="flex justify-between my-3">
                <p>
                Incomes 
              </p>
              <p className="bg-purple-950/25 p-1 font-medium text-sm">
                Today
              </p>
              </div>
              <div className="flex justify-between my-1">
                <p className="font-bold text-3xl">
                $9001
               </p>
              <p className="p-1 text-red-500 font-bold">
                1.5%
              </p>
              </div>
              <hr />
              <p className="my-1 text-sm">
                <span className="font-medium">Compared to $9201 yesterday</span> <br />
                Last Week &nbsp; $25301
              </p>
            </div>
            <div className="font-bold p-2 my-4 rounded-lg bg-linear-to-l from-purple-500 to-purple-950">
              <div className="flex justify-between my-3">
                <p>
                Expenses
              </p>
              <p className="bg-purple-950/25 p-1 font-medium text-sm">
                Today
              </p>
              </div>
              <div className="flex justify-between my-1">
                <p className="font-bold text-3xl">
                $9001
               </p>
              <p className="p-1 text-green-500 font-bold">
                1.5%
              </p>
              </div>
              <hr />
              <p className="my-1 text-sm">
                <span className="font-medium">Compared to $9201 yesterday</span> <br />
                Last Week &nbsp; $25301
              </p>
            </div>
            {/* <div className="font-bold p-2 my-1 rounded-lg bg-linear-to-b from-white to-purple-950">
              /* Pie Chart */
             /* <Pie data={data} />
            </div> */}
            <PieChart piedata={data} />
          </div>
          <div className="col-span-2 p-6 bg-linear-to-l rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.06)]">
            <header className='flex justify-between '>
              <input type="text" placeholder='Search...' className='border p-4 ml-3 rounded-4xl w-3/4 focus:border-purple-800' />
              <RiNotification4Fill className="inline text-2xl float-right mt-4 cursor-pointer" />
            </header>
            <div className='bg-linear-to-l from-purple-600 to-purple-950 w-full my-4 rounded-lg p-1.5'>
              <p className='p-4 font-bold text-lg'>Car Availabilty</p>
              <br />
              <div className='flex justify-evenly pb-1'>
                <div>
                  <i className=' absolute p-1 min-w-10 ml-1 mt-3'>
                    <Car />
                  </i>
                <input list='car-number' id='car' placeholder='Car Number'
                 className='border border-white rounded-lg py-4 pl-9'
                  />
                <datalist id='car-number'>
                  <option value='KA-01-HH-1234' />
                  <option value='KA-01-HH-9999' />
                  <option value='KA-01-BB-0001' />
                  <option value='KA-01-HH-7777' />
                  <option value='KA-01-HH-2701' />
                  <option value='KA-01-HH-3141' />
                </datalist>
                </div>
                <input type="date" name="Date" id="Date"  className='border border-white py-2 px-1 rounded-4xl'/>
                <input type="time" name="Time" id="Time" className='border border-white py-4 px-1 rounded-4xl' />
                <button className='bg-purple-950/50 hover:bg-purple-700 rounded-lg py-4 px-2 font-bold'>
                  Check
                </button>
              </div>
            </div>
            <div className='bg-linear-to-l from-purple-600 to-purple-950 w-full my-4 rounded-lg p-4'>
              <p className='p-4 font-bold text-lg'>Live Car Status</p>
             </div>
              {/* <div className='bg-linear-to-b from-white to-purple-950 w-full my-4 rounded-lg p-4'>
                 Line Chart 
                <Line data={lineData} options={lineOptions} />
              </div> */}
              <LineChart data={lineData} options={lineOptions} />
            </div>
        </div>
    </main>
  );
}
