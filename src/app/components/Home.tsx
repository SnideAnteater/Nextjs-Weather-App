"use client";

import React, { useState } from "react";
import Input from "../components/Input";
import WeatherDetails from "../components/WeatherDetails";
import WeatherForecast from "../components/WeatherForecast";
import Current from "../components/Current";
import { GetWeather } from "../api/GetWeather";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const data = await GetWeather(location);
      if (data === "") {
        setError("City Not Found");
        setData({});
      } else {
        setData(data);
        setLocation("");
        setError("");
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    // console.log(error);
    content = (
      <div
        className=" text-white text-center h-screen
      mt-[5rem]"
      >
        <h2
          className=" text-3xl font-bold
        mb-4"
        >
          Welcome to the Weather App
        </h2>
        <p className=" text-xl">
          Enter a city name to get the weather forecast
        </p>
      </div>
    );
  } else if (error !== "") {
    // console.log(error);
    content = (
      <div
        className=" text-white text-center h-screen
      mt-[5rem]"
      >
        <p
          className=" text-3xl font-bold
        mb-4"
        >
          City not found
        </p>
        <p className=" text-xl">Enter a valid city</p>
      </div>
    );
  } else {
    content = (
      <>
        <div
          className="flex md:flex-row flex-col p-12 items-center
         justify-between"
        >
          <Current data={data}></Current>
          <WeatherForecast data={data}></WeatherForecast>
        </div>
        <div>
          <WeatherDetails data={data}></WeatherDetails>
        </div>
      </>
    );
  }

  return (
    <div
      className=" bg-cover bg-gradient-to-r
    from-indigo-500 to-indigo-300 h-full min-h-screen"
    >
      <div
        className=" bg-white/25 w-full
       flex flex-col h-fit"
      >
        {/* {Input and Logo} */}
        <div
          className=" flex flex-col md:flex-row justify-between
          items-center p-12"
        >
          <Input handleSearch={handleSearch} setLocation={setLocation}></Input>
          <h1
            className=" mb-8 md:mb-0 order-1 text-white py-2
          px-4 rounded-xl italic font-bold"
          >
            Weather App
          </h1>
        </div>
        {content}
        {/* {data.current ? <div>{data.current.temp_c}</div> : null} */}
      </div>
    </div>
  );
};

export default Home;
