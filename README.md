# Weather App
The purpose of this project is to create a Weather App that provides users with up-to-date weather information for their selected locations. The app aims to deliver a user-friendly and informative weather experience

## Functional Requirements 

### Weather Information 
- [ ] Users can view current weather conditions, including temperature, humidity, wind speed, and conditions (e.g., sunny, rainy). 
- [ ] The app should display a 7-day weather forecast for the selected location. (optional) [Only 5 Days is possible]

### Location Search 
- [ ] Users can search for weather information by entering a city name. 
- [ ] Users can select a suggested location or submit their query to fetch weather data. 

### Data Update
- [ ] Weather data should automatically update at regular intervals (e.g., every hour). 
- [ ] Users can manually refresh weather data if needed.
 

### Non-Functional Requirements 
- [ ] The application should have a user-friendly and responsive design. 
- [ ] The application should be visually appealing and easy to navigate. 

### Additional Features (Optional)
- [ ] Fetch the current location of the user without asking for it, and display the weather details related to that location.

## Required Libs:
- react-icons
- Framer-motion
- SASS
- react-responsive ??

> Using openweathermap api


## OUTPUTS:

### Current Weather:
```js
{
  coord: { lon: 77.43, lat: 8.18 },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d'
    }
  ],
  base: 'stations',
  main: {
    temp: 304.26,
    feels_like: 309.02,
    temp_min: 304.26,
    temp_max: 304.26,
    pressure: 1008,
    humidity: 63,
    sea_level: 1008,
    grnd_level: 1003
  },
  visibility: 10000,
  wind: { speed: 3.96, deg: 78, gust: 5.34 },
  clouds: { all: 39 },
  dt: 1702114187,
  sys: { country: 'IN', sunrise: 1702083161, sunset: 1702125138 },
  timezone: 19800,
  id: 1262204,
  name: 'Nagercoil',
  cod: 200
}
```

```js
{
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1702630800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.59,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-15 09:00:00'
    },
    {
      dt: 1702641600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.88,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-15 12:00:00'
    },
    {
      dt: 1702652400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.99,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-15 15:00:00'
    },
    {
      dt: 1702663200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 1,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-15 18:00:00'
    },
    {
      dt: 1702674000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.56,
      sys: [Object],
      dt_txt: '2023-12-15 21:00:00'
    },
    {
      dt: 1702684800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.44,
      sys: [Object],
      dt_txt: '2023-12-16 00:00:00'
    },
    {
      dt: 1702695600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.19,
      sys: [Object],
      dt_txt: '2023-12-16 03:00:00'
    },
    {
      dt: 1702706400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.38,
      sys: [Object],
      dt_txt: '2023-12-16 06:00:00'
    },
    {
      dt: 1702717200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.87,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-16 09:00:00'
    },
    {
      dt: 1702728000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 1,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-16 12:00:00'
    },
    {
      dt: 1702738800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.99,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-16 15:00:00'
    },
    {
      dt: 1702749600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.93,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-16 18:00:00'
    },
    {
      dt: 1702760400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 6203,
      pop: 0.84,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-16 21:00:00'
    },
    {
      dt: 1702771200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.87,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-17 00:00:00'
    },
    {
      dt: 1702782000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.51,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-17 03:00:00'
    },
    {
      dt: 1702792800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.48,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-17 06:00:00'
    },
    {
      dt: 1702803600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.36,
      sys: [Object],
      dt_txt: '2023-12-17 09:00:00'
    },
    {
      dt: 1702814400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.28,
      sys: [Object],
      dt_txt: '2023-12-17 12:00:00'
    },
    {
      dt: 1702825200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.25,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-17 15:00:00'
    },
    {
      dt: 1702836000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.25,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-17 18:00:00'
    },
    {
      dt: 1702846800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.3,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-17 21:00:00'
    },
    {
      dt: 1702857600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.31,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-18 00:00:00'
    },
    {
      dt: 1702868400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.08,
      sys: [Object],
      dt_txt: '2023-12-18 03:00:00'
    },
    {
      dt: 1702879200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.04,
      sys: [Object],
      dt_txt: '2023-12-18 06:00:00'
    },
    {
      dt: 1702890000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2023-12-18 09:00:00'
    },
    {
      dt: 1702900800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2023-12-18 12:00:00'
    },
    {
      dt: 1702911600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2023-12-18 15:00:00'
    },
    {
      dt: 1702922400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2023-12-18 18:00:00'
    },
    {
      dt: 1702933200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2023-12-18 21:00:00'
    },
    {
      dt: 1702944000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2023-12-19 00:00:00'
    },
    {
      dt: 1702954800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2023-12-19 03:00:00'
    },
    {
      dt: 1702965600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2023-12-19 06:00:00'
    },
    {
      dt: 1702976400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.18,
      sys: [Object],
      dt_txt: '2023-12-19 09:00:00'
    },
    {
      dt: 1702987200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.23,
      sys: [Object],
      dt_txt: '2023-12-19 12:00:00'
    },
    {
      dt: 1702998000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.22,
      sys: [Object],
      dt_txt: '2023-12-19 15:00:00'
    },
    {
      dt: 1703008800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.49,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-19 18:00:00'
    },
    {
      dt: 1703019600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.53,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-19 21:00:00'
    },
    {
      dt: 1703030400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.57,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-20 00:00:00'
    },
    {
      dt: 1703041200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.24,
      sys: [Object],
      dt_txt: '2023-12-20 03:00:00'
    },
    {
      dt: 1703052000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.53,
      rain: [Object],
      sys: [Object],
      dt_txt: '2023-12-20 06:00:00'
    }
  ],
  city: {
    id: 1262204,
    name: 'Nagercoil',
    coord: { lat: 8.18, lon: 77.43 },
    country: 'IN',
    population: 213858,
    timezone: 19800,
    sunrise: 1702601741,
    sunset: 1702643682
  }
}
```

## TODOS for 10-December:
- [ ] Design the basic box according to the color-codes & main-code.
- [ ] Render the Current Weather Info
- [ ] Fetch & Render the 5-day Weather Forecast. Make it collapsable.
- [ ] Make everything responsive