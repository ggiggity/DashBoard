import Slider from "../Slider/page";
import { SliderData } from "../Slider/SliderData";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
export default function Dashboard2() {
  return (
    <div>
      <h3 className="flex text-white text-3xl font-semibold mx-3.5">
        <FaHome size={20} className="mx-3 my-auto" />
        Dashboard
      </h3>
      <div className="flex flex-col  text-white rounded-lg mt-6 p-8 mx-2 ">
        <Slider slides={SliderData} />
      </div>
      <div className="bg-white rounded-lg mt-10 p-8 mx-2 text-2xl font-semibold">
        Connection
        <ul className="flex space-x-10 mx-3">
          <li className="my-auto">
            <Image
              width={65}
              height={70}
              src={
                "https://i.pinimg.com/originals/52/6f/5a/526f5ac05b614362625eceb34a2b869f.png"
              }
            />
          </li>
          <li className="my-auto">
            <Image
              className="rounded-full"
              src={
                "https://i.etsystatic.com/38129391/r/il/4d8e37/4247478712/il_fullxfull.4247478712_ji5c.jpg"
              }
              width={70}
              height={70}
            />
          </li>
          <li className="my-auto">
            <Image
              src={
                "https://i.pinimg.com/originals/65/d5/dc/65d5dc229f00ea08d567cd19b047d30f.png"
              }
              width={70}
              height={70}
            />
          </li>
          <li className="my-auto">
            <Image
              className="rounded-full"
              src={
                "https://w7.pngwing.com/pngs/143/822/png-transparent-rick-sanchez-morty-smith-total-rickall-meeseeks-and-destroy-mr-toad-in-the-hole-hand-cartoon-fictional-character.png"
              }
              width={70}
              height={70}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
