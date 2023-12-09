import styles from '@/styles/page.module.scss';
import getCurrentWeather from '@/helpers/getCurrentWeather';
import {MdSunny} from 'react-icons/md';
import { BsFillMoonStarsFill, BsCloudsFill } from "react-icons/bs";
import { IoPartlySunnySharp } from "react-icons/io5";
import { FaCloudMoon, FaCloud, FaCloudShowersHeavy, FaCloudSunRain, FaCloudMoonRain, FaRegSnowflake } from "react-icons/fa";
import {FaCloudBolt} from 'react-icons/fa6';
import { RiMistFill } from "react-icons/ri";




const weatherIcons = {
  "01d": <MdSunny />,
  "01n": <BsFillMoonStarsFill />,
  "02d": <IoPartlySunnySharp />,
  "02n": <FaCloudMoon />,
  "03d": <FaCloud />,
  "03n": <FaCloud />,
  "04d": <BsCloudsFill />,
  "04n": <BsCloudsFill />,
  "09d": <FaCloudShowersHeavy/>,
  "09n": <FaCloudShowersHeavy/>,
  "10d": <FaCloudSunRain/>,
  "10n": <FaCloudMoonRain />,
  "11d": <FaCloudBolt />,
  "11n": <FaCloudBolt/>,
  "13d": <FaRegSnowflake/>,
  "13n": <FaRegSnowflake />,
  "50d": <RiMistFill />,
  "50n": <RiMistFill />

}

export default async function Home() {
  const data = await getCurrentWeather();
  console.log(data);
  
  return (
    <div>
      {/* Basic Info-Box */}
      <div>
        <div>
          {weatherIcons[data.weather[0].icon.split(".")[0]]}
          <div>{data.weather[0].description}</div>
        </div>
        <div>
          <div>{(data.main.temp - 273).toFixed(2)} &#8451;</div>
          <div>{data.name}</div>
        </div>
      </div>

    </div>
  )
}
