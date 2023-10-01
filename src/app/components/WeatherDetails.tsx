import React from "react";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { GiWindSlap, GiCompass } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdAir } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

type DayForecastProps = {
  astro: {
    sunrise: string;
    sunset: string;
  };
};

type WeatherDetailProps = {
  data: {
    current?: {
      wind_kph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    };
    forecast?: {
      forecastday: DayForecastProps[];
    };
  };
};

const WeatherDetails = (props: WeatherDetailProps) => {
  return (
    <div className="p-12">
      <h1 className=" mb-4 text-2xl text-white">Weather Details</h1>
      <div
        className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
       lg:grid-cols-4 gap-4 text-black text-center"
      >
        <div
          className=" bg-white/50 flex p-4 items-center
         justify-center gap-6 rounded-xl"
        >
          <div className=" text-base">
            <h3>Wind Speed</h3>
            <h3>{props.data.current?.wind_kph} km/h</h3>
          </div>
          <div>
            <GiWindSlap className=" text-2xl"></GiWindSlap>
          </div>
        </div>
        <div
          className=" bg-white/50 flex p-4 items-center
         justify-center gap-6 rounded-xl"
        >
          <div className=" text-base">
            <h3>Humidity</h3>
            <h3>{props.data.current?.humidity} %</h3>
          </div>
          <div>
            <WiHumidity className=" text-2xl"></WiHumidity>
          </div>
        </div>
        <div
          className=" bg-white/50 flex p-4 items-center
         justify-center gap-6 rounded-xl"
        >
          <div className=" text-base">
            <h3>Wind Direction</h3>
            <h3>{props.data.current?.wind_dir}</h3>
          </div>
          <div>
            <GiCompass className=" text-2xl"></GiCompass>
          </div>
        </div>
        <div
          className=" bg-white/50 flex p-4 items-center
         justify-center gap-6 rounded-xl"
        >
          <div className=" text-base">
            <h3>Sunrise</h3>
            <h3>{props.data.forecast?.forecastday[0].astro.sunrise}</h3>
          </div>
          <div>
            <BsSunrise className=" text-2xl"></BsSunrise>
          </div>
        </div>
        <div
          className=" bg-white/50 flex p-4 items-center
         justify-center gap-6 rounded-xl"
        >
          <div className=" text-base">
            <h3>Sunset</h3>
            <h3>{props.data.forecast?.forecastday[0].astro.sunset}</h3>
          </div>
          <div>
            <BsSunset className=" text-2xl"></BsSunset>
          </div>
        </div>

        <div
          className=" bg-white/50 flex p-4 items-center
         justify-center gap-6 rounded-xl"
        >
          <div className=" text-base">
            <h3>Feels Like</h3>
            <h3>{props.data.current?.feelslike_c} °C</h3>
          </div>
          <div>
            <CiTempHigh className=" text-2xl"></CiTempHigh>
          </div>
        </div>
        <div
          className=" bg-white/50 flex p-4 items-center
         justify-center gap-6 rounded-xl"
        >
          <div className=" text-base">
            <h3>Air Pressure</h3>
            <h3>{props.data.current?.pressure_mb} hPa</h3>
          </div>
          <div>
            <MdAir className=" text-2xl"></MdAir>
          </div>
        </div>

        <div
          className=" bg-white/50 flex p-4 items-center
         justify-center gap-6 rounded-xl"
        >
          <div className=" text-base">
            <h3>Visibility</h3>
            <h3>{props.data.current?.vis_km} km</h3>
          </div>
          <div>
            <FaEye className=" text-2xl"></FaEye>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
