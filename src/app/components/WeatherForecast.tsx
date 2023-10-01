/* eslint-disable @next/next/no-img-element */
import React from "react";

type DayForecastProps = {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
};

type WeekForecastProps = {
  data: {
    forecast?: {
      forecastday: DayForecastProps[];
    };
  };
};

const WeatherForecast = (props: WeekForecastProps) => {
  return (
    <div
      className=" grid grid-cols-2 sm:grid-col-2
    md:grid-cols-3 lg:grid-cols-7 gap-8 w-full"
    >
      {props.data.forecast?.forecastday.map((day: any, index: any) => (
        <div
          key={index}
          className=" bg-white/40 p-2
        text-center rounded-lg flex flex-col
        items-center"
        >
          <p>
            {new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
          </p>
          <img src={day.day.condition.icon} alt={day.day.condition.text}></img>
          <div>
            <p>H {day.day.maxtemp_c.toFixed()}°C</p>
            <p>L {day.day.mintemp_c.toFixed()}°C</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
