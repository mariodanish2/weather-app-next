
const tvmCOORD = {
    lat: 8.4833,
    lon: 76.9167
}

export default function parseCoordinates(lat, lon){
    let coord;
    
    if (Number.isNaN(Number(lat)) || Number.isNaN(Number(lon))){
        coord = tvmCOORD;
    } else{
        coord = {
            lat,
            lon
        }
    }
    
    return coord;
}