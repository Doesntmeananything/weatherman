import React from "react";

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

interface Condition2 {
  text: string;
  icon: string;
  code: number;
}

interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  condition: Condition2;
  uv: number;
}

interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
}

interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
}

interface Forecast {
  forecastday: Forecastday[];
}

interface Alert {}

interface WeatherData {
  location: Location;
  current: Current;
  forecast: Forecast;
  alert: Alert;
}

export interface WeatherDataProps {
  weatherData: WeatherData;
}

const weatherData: WeatherData = {
  location: {
    name: "Saint Petersburg",
    region: "Saint Petersburg City",
    country: "Russia",
    lat: 59.89,
    lon: 30.26,
    tz_id: "Europe/Moscow",
    localtime_epoch: 1580037682,
    localtime: "2020-01-26 14:21"
  },
  current: {
    last_updated_epoch: 1580037311,
    last_updated: "2020-01-26 14:15",
    temp_c: 2.0,
    temp_f: 35.6,
    is_day: 1,
    condition: {
      text: "Light rain",
      icon: "//cdn.weatherapi.com/weather/64x64/day/296.png",
      code: 1183
    },
    wind_mph: 11.9,
    wind_kph: 19.1,
    wind_degree: 240,
    wind_dir: "WSW",
    pressure_mb: 998.0,
    pressure_in: 29.9,
    precip_mm: 2.4,
    precip_in: 0.09,
    humidity: 93,
    cloud: 100,
    feelslike_c: -2.6,
    feelslike_f: 27.3,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 1.0,
    gust_mph: 17.0,
    gust_kph: 27.4
  },
  forecast: {
    forecastday: [
      {
        date: "2020-01-26",
        date_epoch: 1579996800,
        day: {
          maxtemp_c: 3.9,
          maxtemp_f: 39.0,
          mintemp_c: -1.8,
          mintemp_f: 28.8,
          avgtemp_c: 1.2,
          avgtemp_f: 34.2,
          maxwind_mph: 16.8,
          maxwind_kph: 27.0,
          totalprecip_mm: 8.5,
          totalprecip_in: 0.33,
          avgvis_km: 5.6,
          avgvis_miles: 3.0,
          avghumidity: 88.0,
          condition: {
            text: "Moderate or heavy rain shower",
            icon: "//cdn.weatherapi.com/weather/64x64/day/356.png",
            code: 1243
          },
          uv: 0.1
        },
        astro: {
          sunrise: "09:27 AM",
          sunset: "04:57 PM",
          moonrise: "10:34 AM",
          moonset: "06:30 PM"
        }
      },
      {
        date: "2020-01-27",
        date_epoch: 1580083200,
        day: {
          maxtemp_c: -1.3,
          maxtemp_f: 29.7,
          mintemp_c: -10.5,
          mintemp_f: 13.1,
          avgtemp_c: -2.8,
          avgtemp_f: 26.9,
          maxwind_mph: 7.8,
          maxwind_kph: 12.6,
          totalprecip_mm: 4.0,
          totalprecip_in: 0.16,
          avgvis_km: 3.8,
          avgvis_miles: 2.0,
          avghumidity: 94.0,
          condition: {
            text: "Heavy snow",
            icon: "//cdn.weatherapi.com/weather/64x64/day/338.png",
            code: 1225
          },
          uv: 0.2
        },
        astro: {
          sunrise: "09:25 AM",
          sunset: "04:59 PM",
          moonrise: "10:48 AM",
          moonset: "07:49 PM"
        }
      },
      {
        date: "2020-01-28",
        date_epoch: 1580169600,
        day: {
          maxtemp_c: 1.9,
          maxtemp_f: 35.4,
          mintemp_c: -5.3,
          mintemp_f: 22.5,
          avgtemp_c: 0.2,
          avgtemp_f: 32.3,
          maxwind_mph: 7.8,
          maxwind_kph: 12.6,
          totalprecip_mm: 0.1,
          totalprecip_in: 0.0,
          avgvis_km: 2.5,
          avgvis_miles: 1.0,
          avghumidity: 96.0,
          condition: {
            text: "Mist",
            icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
            code: 1030
          },
          uv: 0.2
        },
        astro: {
          sunrise: "09:23 AM",
          sunset: "05:02 PM",
          moonrise: "10:59 AM",
          moonset: "09:07 PM"
        }
      },
      {
        date: "2020-01-29",
        date_epoch: 1580256000,
        day: {
          maxtemp_c: 1.8,
          maxtemp_f: 35.2,
          mintemp_c: 1.0,
          mintemp_f: 33.8,
          avgtemp_c: 1.4,
          avgtemp_f: 34.5,
          maxwind_mph: 8.7,
          maxwind_kph: 14.0,
          totalprecip_mm: 0.2,
          totalprecip_in: 0.01,
          avgvis_km: 9.0,
          avgvis_miles: 5.0,
          avghumidity: 96.0,
          condition: {
            text: "Patchy rain possible",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063
          },
          uv: 0.1
        },
        astro: {
          sunrise: "09:21 AM",
          sunset: "05:04 PM",
          moonrise: "11:07 AM",
          moonset: "10:23 PM"
        }
      },
      {
        date: "2020-01-30",
        date_epoch: 1580342400,
        day: {
          maxtemp_c: 1.4,
          maxtemp_f: 34.5,
          mintemp_c: -4.4,
          mintemp_f: 24.1,
          avgtemp_c: 0.2,
          avgtemp_f: 32.4,
          maxwind_mph: 8.3,
          maxwind_kph: 13.3,
          totalprecip_mm: 0.1,
          totalprecip_in: 0.0,
          avgvis_km: 8.0,
          avgvis_miles: 4.0,
          avghumidity: 95.0,
          condition: {
            text: "Overcast",
            icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
            code: 1009
          },
          uv: 0.2
        },
        astro: {
          sunrise: "09:18 AM",
          sunset: "05:07 PM",
          moonrise: "11:15 AM",
          moonset: "11:39 PM"
        }
      },
      {
        date: "2020-01-31",
        date_epoch: 1580428800,
        day: {
          maxtemp_c: -0.2,
          maxtemp_f: 31.6,
          mintemp_c: -1.6,
          mintemp_f: 29.1,
          avgtemp_c: -0.6,
          avgtemp_f: 30.9,
          maxwind_mph: 8.3,
          maxwind_kph: 13.3,
          totalprecip_mm: 0.3,
          totalprecip_in: 0.01,
          avgvis_km: 9.4,
          avgvis_miles: 5.0,
          avghumidity: 90.0,
          condition: {
            text: "Light snow",
            icon: "//cdn.weatherapi.com/weather/64x64/day/326.png",
            code: 1213
          },
          uv: 1.0
        },
        astro: {
          sunrise: "09:16 AM",
          sunset: "05:10 PM",
          moonrise: "11:22 AM",
          moonset: "No moonset"
        }
      },
      {
        date: "2020-02-01",
        date_epoch: 1580515200,
        day: {
          maxtemp_c: -0.4,
          maxtemp_f: 31.3,
          mintemp_c: -6.2,
          mintemp_f: 20.8,
          avgtemp_c: -2.2,
          avgtemp_f: 28.1,
          maxwind_mph: 4.7,
          maxwind_kph: 7.6,
          totalprecip_mm: 0.0,
          totalprecip_in: 0.0,
          avgvis_km: 10.0,
          avgvis_miles: 6.0,
          avghumidity: 87.0,
          condition: {
            text: "Overcast",
            icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
            code: 1009
          },
          uv: 1.0
        },
        astro: {
          sunrise: "09:14 AM",
          sunset: "05:12 PM",
          moonrise: "11:30 AM",
          moonset: "12:54 AM"
        }
      }
    ]
  },
  alert: {}
};

export const WeatherDataContext = React.createContext(weatherData);
