
import CarCard from "@/components/CarCard"

const page = async () => {
  const response = await fetch('http://localhost:3000/api/cars');
  // console.log(response);
  const cars = await response.json();
  return (
        <main className="max-w-6xl mx-auto px-8 text-white font-sans dark:bg-black">
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
                    <CarCard 
                      key={car.id}
                      make={car.make}
                      model={car.model}
                      transmission={car.transmission}
                      seats={car.seats}
                      price_per_day={car.price_per_day}
                      image={car.image}
                      id={car.id}
                    />
                  ))
                }
            </div>
        </main>    
  )
}

export default page