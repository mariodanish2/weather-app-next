import { format, utcToZonedTime } from "date-fns-tz";

const compassScales = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

export function degreeToCompass(deg) {
    var scale = (Math.floor((deg / 22.5) + 0.5) % 16);
    return compassScales[scale];
}

export function mpsTOKmph(num) {
    if (typeof num !== "number"){
        return "--";
    }
    const value = (num * 3.6).toFixed(1);
    return value;
}

export function kelvinToCelsius(num) {
    return (num - 273.15).toFixed(1)
}

export function meterToKM(num) {
    return (num / 1000).toFixed(1)
}

export function timestampToReadableDateTime(timestamp, timezone, timeOnly=false) {
    const dt = new Date(timestamp * 1000 + timezone * 1000);
    const realDT = utcToZonedTime(dt, "UTC");
    return format(realDT, timeOnly ? "p" : "PP p")
}

export function capitalizeSentence(str) {
    if (typeof str === "string") {
        return str[0].toUpperCase() + str.slice(1,)
    }
    return str;
}