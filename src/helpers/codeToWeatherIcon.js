import { MdOutlineWbSunny } from 'react-icons/md';
import { BsMoonStars, BsClouds, BsCloudMoon, BsCloud, BsCloudRainHeavy } from "react-icons/bs";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { WiDayShowers, WiNightShowers } from "react-icons/wi";
import { FaRegSnowflake } from "react-icons/fa";
import { BiCloudLightning } from "react-icons/bi";
import { RiMistFill } from "react-icons/ri";

const weatherIcons = {
    "01d": <MdOutlineWbSunny />,
    "01n": <BsMoonStars />,
    "02d": <IoPartlySunnyOutline />,
    "02n": <BsCloudMoon />,
    "03d": <BsCloud />,
    "03n": <BsCloud />,
    "04d": <BsClouds />,
    "04n": <BsClouds />,
    "09d": <BsCloudRainHeavy />,
    "09n": <BsCloudRainHeavy />,
    "10d": <WiDayShowers />,
    "10n": <WiNightShowers />,
    "11d": <BiCloudLightning />,
    "11n": <BiCloudLightning />,
    "13d": <FaRegSnowflake />,
    "13n": <FaRegSnowflake />,
    "50d": <RiMistFill />,
    "50n": <RiMistFill />
}

export default function codeToWeatherIcon(code) {
    return weatherIcons[code]
}