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

## TODOS for 10-December:
- [ ] Design the basic box according to the color-codes & main-code.
- [ ] Render the Current Weather Info
- [ ] Fetch & Render the 5-day Weather Forecast. Make it collapsable.
- [ ] Make everything responsive