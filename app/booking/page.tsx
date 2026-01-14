
const page = () => {
    const lis = [1,2,3,4,5]
  return (
    <div className="px-8">
        {
            lis.map((l) => (
                <div key={l} 
                className="flex justify-between items-center bg-linear-to-r from-purple-900/60 to-transparent
                my-4 px-4 h-20 rounded-lg text-white font-semibold
                hover:-translate-y-1 hover:scale-105 transform transition duration-300 cursor-pointer 
                ">
                    <div
                        className="flex justify-center items-center bg-purple-700 rounded-full h-12 w-12"
                    >G</div>
                    <div>Name: George</div>
                    <div>Car ID: 3</div>
                    <div>from: 1-1-2026</div>
                    <div>to: 1-2-2026</div>
                    <div>1 Day</div>
                </div>
            ))
        }
    </div>
  )
}

export default page