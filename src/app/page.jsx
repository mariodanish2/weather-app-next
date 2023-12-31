import styles from '@/styles/page.module.scss';
import getCurrentWeather from '@/helpers/getCurrentWeather';
import { mpsTOKmph, degreeToCompass, kelvinToCelsius, meterToKM, timestampToReadableDateTime, capitalizeSentence } from '@/helpers/converters';
import codeToWeatherIcon from '@/helpers/codeToWeatherIcon';
import { WiSunrise, WiSunset } from "react-icons/wi";
import { IoMdRefresh } from "react-icons/io";
import get5DayForecast from '@/helpers/get5DayForecast';
import InfoRow from '@/components/InfoRow';
import ForeacstBox from '@/components/ForecastBox';
import { Suspense } from 'react';
import LoaderBox from '@/components/LoaderBox';
import revalidateData from '@/helpers/revalidateData';



export default async function Home({ searchParams }) {

  const lat = searchParams["lat"];
  const lon = searchParams["lon"];

  const currentData = await getCurrentWeather(lat, lon);
  const forecastData = await get5DayForecast(lat, lon);

  return (
    <div className={styles.homePage}>
      {/* refresh button */}
      <form action={revalidateData}><button type="submit" className={styles.revalidateBTN}><IoMdRefresh /></button></form>
      {/* Current Weather Info Box */}
      <div className={styles.currentInfo}>
        <div className={styles.header}>
          <div className={styles.header_left}>
            <div className={styles.title}>Current weather</div>
            <div className={styles.calcTime}>Calculated At: {timestampToReadableDateTime(currentData.dt, currentData.timezone)}</div>
          </div>
          <div className={styles.header_right}>
            <div className={styles.cityName}>{currentData.name}</div>
            <div className={styles.coordinates}>Lat: {currentData.coord.lat}, Lon: {currentData.coord.lon}</div>
          </div>
        </div>

        <div className={styles.basicInfo}>
          <div className={styles.iconGRP}>
            <div className={styles.icon}>{codeToWeatherIcon(currentData.weather[0].icon)}</div>
            <div className={styles.iconText}>{capitalizeSentence(currentData.weather[0].description)}{currentData?.rain ? `, ${Object.values(currentData.rain)[0]} mm` : ""}</div>
          </div>
          <div className={styles.tempGRP}>
            <div className={styles.temp}>{kelvinToCelsius(currentData.main.temp)} &#8451;</div>
            <div className={styles.infos}>
              <InfoRow label="Feels Like:" value={<>{kelvinToCelsius(currentData.main.feels_like)} &#8451;</>} stripped />
              <InfoRow label="Visibility" value={`${meterToKM(currentData.visibility)} km`} stripped />
            </div>
          </div>
        </div>

        <div className={styles.detailedInfos}>
          <InfoRow label="Temperature:" value={<>{kelvinToCelsius(currentData.main.temp)} &#8451;</>} />
          <InfoRow label="Feels Like:" value={<>{kelvinToCelsius(currentData.main.feels_like)} &#8451;</>} />
          <InfoRow label="Min. Temperature:" value={<>{kelvinToCelsius(currentData.main.temp_min)} &#8451;</>} />
          <InfoRow label="Max. Temperature:" value={<>{kelvinToCelsius(currentData.main.temp_max)} &#8451;</>} />
          <InfoRow label="Wind Speed:" value={`${degreeToCompass(currentData.wind.deg)} ${mpsTOKmph(currentData.wind.speed)} km/hr`} />
          <InfoRow label="Wind Gust:" value={`${mpsTOKmph(currentData.wind.gust)} km/hr`} />
          <InfoRow label="Pressure:" value={`${currentData.main.pressure}hpa`} />
          <InfoRow label="Humidity:" value={`${currentData.main.humidity}%`} />
          <InfoRow label={<><WiSunrise /> Sunrise: </>} value={timestampToReadableDateTime(currentData.sys.sunrise, currentData.timezone, true)} />
          <InfoRow label={<><WiSunset /> Sunset:</>} value={timestampToReadableDateTime(currentData.sys.sunset, currentData.timezone, true)} />
        </div>
      </div>

      {/* Forecast Info Section */}
      <h1 className={styles.forecast_title}>5-Day Forecasts</h1>
      <div className={styles.forecastBoxes}>
        {
          forecastData?.list.map(forecast => (
            <Suspense key={forecast.dt} fallback={<LoaderBox />}>
              <ForeacstBox data={forecast} timezone={forecastData.city.timezone} />
            </Suspense>
          )
          )
        }
      </div>
    </div>
  )
}


export const revalidate = 3600;
export const dynamic = "force-dynamic";