import React from "react";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { GiWindSlap, GiCompass } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdAir } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

const Detail: React.FC = (dataText: any, icon: any) => {
  console.log(icon);
  return (
    <div
      className=" bg-white/50 flex p-4 items-center
 justify-center gap-6 rounded-xl"
    >
      <div className=" text-2xl">
        <h3>Wind Speed</h3>
        <h3>{dataText}</h3>
      </div>
      {/* <div>{icon}</div> */}
    </div>
  );
};

export default Detail;
