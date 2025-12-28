
import { DollarSign } from "lucide-react"
import Image from "next/image"
import { GiCarSeat } from "react-icons/gi"
import { SiTransmission } from "react-icons/si"

const page = async () => {
  const response = await fetch('http://localhost:3000/api/cars');
  // console.log(response);
  const cars = await response.json();
  return (
        <main className="max-w-6xl mx-auto text-white font-sans dark:bg-black">
            <div className="grid grid-cols-1 gap-6">
             <header className="font-bold text-4xl mb-5">
                Units Details
             </header>
             <div className="flex-row-reverse my-0.5">
                  <a href="http://localhost:3000/units/create"
                  className="bg-purple-600 font-bold rounded p-3 m-1.5">
                    Add Car
                  </a>
             </div>
                {
                  cars.map((car: any) => (
                    <div key={car.id} className="flex justify-between bg-linear-to-l from-purple-600 to-purple-950 rounded-lg pr-1.5 h-28">
                      <div className="flex justify-center bg-purple-600 rounded-lg text-lg font-bold w-1/8">
                        <Image src={car.image} alt="photo" width={130} height={112} className="rounded-lg" />
                      </div>
                      <div className="text-white font-bold text-lg mt-1">
                        <p className="text-sm font-normal text-white">Car Model</p>
                        <p>{car.model}</p>
                        <p>{car.make}</p>
                      </div>
                      <div className="text-white font-bold text-lg mt-1">
                        <p className="text-sm font-normal text-white">
                            <SiTransmission className="inline-block mr-1 mb-1"/>   
                        </p>
                        <p>Transmission</p>
                        <p>
                          {car.transmission}
                        </p>
                      </div>
                      <div className="text-white font-bold text-lg mt-1">
                        <p className="text-sm font-normal text-white">
                            <GiCarSeat className="inline-block mr-1 mb-1"/>
                        </p>
                        <p>Seats</p>
                        <p>
                          {
                            car.seats
                          }
                        </p>
                      </div>
                      <div className="text-white font-bold text-lg mt-1">
                        <p className="text-sm font-normal text-white">
                            <DollarSign className="inline-block mr-1 mb-1"/>
                        </p>
                        <p>Price</p>
                        <p>
                          {
                            car.price_per_day
                          }
                        </p>
                      </div>
                      <div>
                        <button className="mt-8 bg-linear-to-r from-purple-500 to-purple-950 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg">
                          View Details
                        </button>
                      </div>
                      <div className="flex flex-col justify-evenly text-white font-bold text-lg border-l-2 pl-3">
                            <a href={`http://localhost:3000/units/edit/${car.id}`} className="bg-linear-to-r from-purple-500 to-purple-950 px-5 rounded">
                                Edit
                            </a>
                            <button 
                            className="bg-red-800 px-5 rounded">
                                Delete
                            </button>
                      </div>
                    </div>
                  ))
                }
            </div>
        </main>    
  )
}

export default page