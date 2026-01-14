"use client";

import { Car, DollarSign } from "lucide-react";
import Image from "next/image";
import { GiCarSeat } from "react-icons/gi";
import { SiTransmission } from "react-icons/si";

const CarCard = ({
    model,
    make,
    price_per_day,
    transmission,
    seats,
    id,
    image
}:{
    model: string;
    make: string;
    price_per_day: string;
    transmission: string;
    seats: string;
    id: string;
    image: string
}) => {
  return (
    <div className="group relative h-101 pb-2 rounded-2xl overflow-hidden bg-linear-to-b from-purple-900/40 to-purple-950/60 border border-purple-700/30 hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm mx-5 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 cursor-pointer">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-linear-to-b from-purple-800/20 to-black/40">
        {image ? (
          <Image
            src={image}
            alt={`${make} ${model}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-purple-900/30">
            <Car className="w-20 h-20 text-purple-400/50" />
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="p-5 h-48 flex flex-col justify-between">
        {/* Car Info */}
        <div>
          <h3 className="text-lg font-bold text-white">{make}</h3>
          <p className="text-purple-300 text-sm font-medium">{model}</p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 my-4">
          {/* Seats */}
          <div className="flex items-center gap-2 bg-purple-800/30 rounded-lg p-2 hover:bg-purple-700/40 transition-colors">
            <GiCarSeat className="w-5 h-5 text-purple-400" />
            <div className="text-xs">
              <p className="text-purple-300 text-xs">Seats</p>
              <p className="text-white font-semibold">{seats}</p>
            </div>
          </div>

          {/* Transmission */}
          <div className="flex items-center gap-2 bg-purple-800/30 rounded-lg p-2 hover:bg-purple-700/40 transition-colors">
            <SiTransmission className="w-5 h-5 text-purple-400" />
            <div className="text-xs">
              <p className="text-purple-300 text-xs">Trans</p>
              <p className="text-white font-semibold">{transmission}</p>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between pt-3 border-t border-purple-600/40">
          <div className="flex items-center gap-1">
            <DollarSign className="w-5 h-5 text-green-400" />
            <div>
              <p className="text-purple-300 text-xs">Per Day</p>
              <p className="text-white font-bold text-lg">{price_per_day}</p>
            </div>
          </div>
          <button className="bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarCard