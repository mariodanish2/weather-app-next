import {NextResponse} from 'next/server';

export async function GET(request){
    try {
        const searchParams = request.nextUrl.searchParams;
        const location = searchParams.get('city') ?? "";

        if (!location.length){
            return NextResponse.json([]);
        }

        const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=10&appid=${process.env.API_KEY}`);

        const cities = await res.json();
        const formattedCities = cities.map(city=>({name: `${city.name}, ${city?.state?.length ? city.state+", " : ""}${city.country}`, lat: city.lat, lon: city.lon}))
        return NextResponse.json(formattedCities);
    } catch (error) {
        return NextResponse.json({error: error?.message ?? "Error Happened"}, {status: 500})
    }
}