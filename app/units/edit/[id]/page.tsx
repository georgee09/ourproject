// ************************************************* continue later
const page = ({params , car}: {params: {id: string}, car: any}) => {
  return (
    <main className="ax-w-6xl mx-auto text-white font-sans dark:bg-black">
        <div className="grid grid-cols-1 gap-6">
            <div 
            className="bg-linear-to-l
             from-purple-500 to-purple-950 rounded-lg p-6 shadow-lg">
                <form method="POST" action={`http://localhost:3000/api/cars/${params.id}`} className="space-y-4">
                <div>
                    <label htmlFor="model">Model</label>
                    <input id="model" name="model" type="text" value={car.model} required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <input id="make" name="make" type="text" value={car.make} required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="acceleration">Acceleration</label>
                    <input id="acceleration" name="acceleration" value={car.acceleration} type="text" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="transmission">Transmission</label>
                    <input id="transmission" name="transmission" value={car.transmission} type="text" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={car.description} required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" cols={30} rows={10}></textarea>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" name="price_per_day" value={car.price_per_day} type="text" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="fuel">Fuel Type</label>
                    <input id="fuel" name="fuel" type="text" value={car.fuel} required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="seats">Seats</label>
                    <input id="seats" name="seats" type="text" value={car.seats} required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="id">ID</label>
                    <input id="id" name="id" type="text" value={car.id} required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="image">Image Path</label>
                    <input id="image" name="image" type="text" value={car.image} required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <div className="flex justify-start">
                        <label htmlFor="is_available">Is Available</label>
                        <input id="is_available" name="is_available"
                         value=
                         {
                            car.is_available ? "is_available" : ""

                         } 
                         type="checkbox" className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                    </div>
                </div>
                <div>
                    <button type="submit" className="w-full bg-purple-600 px-4 py-2 rounded-sm">Create the product</button>
                </div>
            </form>
            </div>
        </div>
    </main>
  )
}

export default page