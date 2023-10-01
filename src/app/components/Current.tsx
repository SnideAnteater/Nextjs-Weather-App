/* eslint-disable @next/next/no-img-element */
import React from "react";
import getCurrentDate from "../utils/getCurrentDate";
import { IoLocationSharp } from "react-icons/io5";

type CurrentProps = {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location?: {
      name: string;
      region: string;
    };
  };
};

const Current = (props: CurrentProps) => {
  const weatherIcon = props.data.current?.condition.icon;
  const weatherCondition = props.data.current?.condition.text;
  return (
    <div
      className=" flex flex-col mb-8
    md:mb-0 items-start gap-2 w-1/2 p-4 lg:p-0"
    >
      <div className=" flex items-center">
        <div className=" text-white">
          <h1 className=" text-3xl">Today</h1>
          <p>{getCurrentDate()}</p>
        </div>
        {weatherIcon && (
          <div>
            <img
              className=" w-[50px] object-cover"
              src={weatherIcon}
              alt={weatherCondition}
            ></img>
          </div>
        )}
      </div>
      <div>
        <p className=" text-5xl text-white">
          {props.data.current?.temp_c.toFixed()}
          <span>°C</span>
        </p>
        <span className=" text-white">
          {props.data.current?.condition.text}
        </span>
      </div>
      <div>
        <div
          className=" flex items-center text-black 
          bg-white/90 px-2 py-2 
          rounded-xl"
        >
          <IoLocationSharp className=" text-xl"></IoLocationSharp>
          <span className=" text-xs">
            {props.data.location?.name}, {props.data.location?.region}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Current;
