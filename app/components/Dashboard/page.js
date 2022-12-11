"use client";
import rick from "../../../public/rick.webp";
import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillCalendar, AiFillAliwangwang, AiFillFile } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import Dashboard2 from "../Dashboard2/page";
import Dashboard3 from "../Dashboard3/Dashboard3";
export default function Dashboard() {
  return (
    <div className="back">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="flex flex-col bg-white rounded-lg mt-6 mb-10 p-8 mx-2">
          <ul className="mx-auto text-center">
            <li>
              <h1 className="text-4xl font-semibold">Kevin</h1>
            </li>
            <li>
              <Image
                src={rick}
                width={100}
                height={100}
                className="rounded-full mt-5 mx-auto"
              />
            </li>
            <li>
              <p className="text-sm mt-5 text-gray-400">Welcome</p>
              <h3 className="font-semibold">Kevin An</h3>
            </li>
            <li>
              <p className="mt-10 text-2xl font-semibold">Fullstack Engineer</p>
              <p className="text-sm mt-3 text-zinc-800">
                Javascript | Node.js | React | Redux | Sequelize
              </p>
            </li>
            <li className="flex space-x-6 hover:text-gray-300 cursor-pointer ml-10 mt-10 ">
              <div>
                <BsFillPersonFill size={22} />
              </div>
              <div className="font-semibold text-sm">Introduction</div>
            </li>
            <li className="flex space-x-6 hover:text-gray-300 cursor-pointer ml-10 mt-5">
              <div>
                <AiFillCalendar size={22} />
              </div>
              <div className="font-semibold text-sm">calender</div>
            </li>
            <li className="flex space-x-6 hover:text-gray-300 cursor-pointer ml-10 mt-5">
              <div>
                <AiFillFile size={22} />
              </div>
              <div className="font-semibold text-sm">projects</div>
            </li>
            <li className="flex space-x-6 hover:text-gray-300 cursor-pointer ml-10 mt-5">
              <div>
                <AiFillAliwangwang size={22} />
              </div>
              <div className="font-semibold text-sm">Favorites</div>
            </li>
            <li className="flex space-x-3 hover:text-gray-300 cursor-pointer ml-10 mt-20">
              <div>
                <GoSignOut />
              </div>
              <div className="text-sm">Sign Out</div>
            </li>
          </ul>
        </div>
        <div className="col-span-2 py-10">
          <Dashboard2 />
        </div>
        <div className="col-span-2 py-10">
          <Dashboard3 />
        </div>
      </div>
    </div>
  );
}
