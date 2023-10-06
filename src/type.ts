type IconType = 'Clear' | 'Cloud' | 'Mist' | 'Rain' | 'Snow';

export type ObjectWeather = {
  name: string;
  main: MainType;
  weather: WeatherType[];
  wind: WindType;
};

export type MainType = {
  humidity: number;
  temp: number;
};

export type WeatherType = {
  description: string;
  main: IconType;
};

export type WindType = {
  speed: number;
};
