"use client"
import { GrJava } from "react-icons/gr";

export default function Sidebar() {
   return (
      <div className="p-4 bg-transparent">
         <div className="flex flex-col bg-black w-72 h-full text-white rounded-lg shadow-sm">
            <div className="flex items-center p-4 text-xl font-bold uppercase">
               <GrJava className="mr-2 bg-accent text-black text-2xl"/>
               Selenify
            </div>
         </div>
      </div>
   );
}
