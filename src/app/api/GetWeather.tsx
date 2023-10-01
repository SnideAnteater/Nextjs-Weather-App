import React from "react";

export async function GetWeather(location: string) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`
    );
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return {};
  }
}
