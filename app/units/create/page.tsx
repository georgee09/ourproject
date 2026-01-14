
const page = () => {
    // https://ferraris-online.com/wp-content/uploads/2024/03/cover-photo-2.jpg
  return (
    <main className="ax-w-6xl mx-auto p-22 text-white font-sans dark:bg-black">
        <div className="grid grid-cols-1 gap-6">
            <div 
            className="bg-linear-to-r from-purple-900/60 to-transparent
             rounded-lg p-6 shadow-lg">
                <form method="POST" action="http://localhost:3000/api/cars" className="space-y-4">
                <div>
                    <label htmlFor="model">Model</label>
                    <input id="model" name="model" type="text" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <input id="make" name="make" type="text" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="acceleration">Acceleration</label>
                    <input id="acceleration" name="acceleration" type="text" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="transmission">Transmission</label>
                    <input id="transmission" name="transmission" type="text" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" cols={30} rows={10}></textarea>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" name="price_per_day" type="text" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="fuel">Fuel Type</label>
                    <input id="fuel" name="fuel" type="text" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="seats">Seats</label>
                    <input id="seats" name="seats" type="text" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="id">ID</label>
                    <input id="id" name="id" type="text" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="image">Image Path</label>
                    <input id="image" name="image" type="text" required className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                </div>
                <div>
                    <div className="flex justify-start">
                        <label htmlFor="is_available">Is Available</label>
                        <input id="is_available" name="is_available" type="checkbox" className="w-full border border-[#e3e3e0] rounded-sm px-3 py-2" />
                    </div>
                </div>
                <div>
                    <button type="submit" className="w-full bg-purple-950 hover:bg-purple-700 px-4 py-2 rounded-sm">Create the product</button>
                </div>
            </form>
            </div>
        </div>
    </main>
  )
}

export default page