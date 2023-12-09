"use server";

const nglCOORD = {
    lat: 8.18,
    lon: 77.43
}

export default async function getCurrentWeather(){
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${nglCOORD.lat}&lon=${nglCOORD.lon}&appid=${process.env.API_KEY}`, {next: {revalidate: 3600}});

    if (!res.ok){
        throw new Error("Failed Data");
    }

    return res.json();
}