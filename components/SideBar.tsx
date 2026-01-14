"use client";
import { BsKanban } from "react-icons/bs";
import { BookCheck, Car, Settings } from "lucide-react";
import { RiNotification2Line } from "react-icons/ri";
import {  MdPayments } from "react-icons/md";
import { TbTransactionBitcoin } from "react-icons/tb";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const baseURL = "http://localhost:3000";

const SideBar = () => {
  const isActive = usePathname();
  return (
    <aside
    style={{
      borderRight:"4px solid #7766a9"
    }}
     className="w-1/6 fixed bg-linear-to-b from-purple-900/60 to-transparent mr-0.5 pr-1.5 border-r-[#776699] rounded-br-2xl rounded-tr-2xl">
           {/* Home */}
           <div className="flex flex-col justify-between min-h-screen">
              <div className="">
                <div className="flex justify-center items-center w-full my-2.5">
                {/* <div className="flex justify-center items-center p-6 rounded-full text-5xl font-bold text-purple-700 bg-purple-700/25 w-20 h-20"> */}
                  {/* C */}
                {/* </div> */}
                <Image src="/logo7.svg" alt="Company Logo" width={80} height={80} />
            </div>
            {/* <h2 className="text-lg mb-4 ml-3.5 text-white font-bold">Admin Panel</h2> */}
                  <nav className="space-y-2 ml-5 text-white font-medium">
                      <Link href="/" className={`block px-4 py-2 rounded hover:bg-purple-600 ${isActive === "/" ? "bg-purple-600" : ""}`}><span>
                      <BsKanban className="mr-2 inline" /></span> Dashboard</Link>
                      <Link href={`${baseURL}/units`} className={`block px-4 py-2 rounded ${isActive === "/units" ? "bg-purple-600": ""} hover:bg-purple-600`}>
                        <span> 
                          {/* <CarI  */}
                          <Car className="mr-2 inline" />
                        </span>
                        Units</Link>
                      <Link href="/booking" className={`block px-4 py-2 rounded ${isActive === "/booking" ? "bg-purple-600": ""} hover:bg-purple-600`}>
                        <BookCheck className="mr-2 inline" />
                        Booking
                        </Link>
                      <Link href="/notifications" className={`block px-4 py-2 rounded ${isActive === "/notifications" ? "bg-purple-600": ""} hover:bg-purple-600`}>
                        {/* <BiNotification className="mr-2 inline" /> */}
                        <RiNotification2Line className="mr-2 inline" />
                        Notifications
                      </Link>
                      <Link href="/settings" className={`block px-4 py-2 rounded ${isActive === "/settings" ? "bg-purple-600": ""} hover:bg-purple-600`}>
                        <Settings className="mr-2 inline" />
                        Settings
                      </Link>
                  </nav>
                  <hr className="text-white my-4 mx-4" />
            <h2 className="text-sm mb-4 ml-3.5 text-white font-semibold">Report</h2>
                  <nav className="space-y-2 ml-5 text-white font-medium">
                      <Link href="/payments" className={`block px-4 py-2 rounded ${isActive === "/payments" ? "bg-purple-600": ""} hover:bg-purple-600`}><span>
                      <MdPayments className="mr-2 inline" /></span> Payments Details</Link>
                      <Link href="/transactions" className={`block px-4 py-2 rounded ${isActive === "/transactions" ? "bg-purple-600": ""} hover:bg-purple-600`}>
                        <span> 
                          {/* <CarI  */}
                          <TbTransactionBitcoin className="mr-2 inline" />
                        </span>
                        Transactions</Link>
                    </nav>
              </div>
              <div className="w-full h-20 p-2">
                <button className="bg-purple-600/25 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded w-full">
                  Logout
                </button>
              </div>
           </div>
         </aside>
  );
}

export default SideBar