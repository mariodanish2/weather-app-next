"use server";

const nglCOORD = {
    lat: 8.18,
    lon: 77.43
}

export default async function get5DayForecast(){
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${nglCOORD.lat}&lon=${nglCOORD.lon}&appid=${process.env.API_KEY}`, {next: {revalidate: 7200}});

    if (!res.ok){
        throw new Error("Failed Data");
    }

    return res.json();
}