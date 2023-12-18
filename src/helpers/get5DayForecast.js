"use server";

import parseCoordinates from "./parseCoordinates";

export default async function get5DayForecast(lat, lon){

    const coords = parseCoordinates(lat, lon);

    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.API_KEY}`, {next: {revalidate: 7200}});

    if (!res.ok){
        throw new Error("Failed Data");
    }

    return res.json();
}