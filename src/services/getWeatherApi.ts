import { ObjectWeather } from '../type';

const KEYApi = import.meta.env.VITE_API_TOKEN;

const getWeather = async (city:string): Promise<ObjectWeather> => {
  const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEYApi}&units=metric`);
  const requestJson = await request.json();

  if (!request.ok) {
    throw new Error(request.statusText);
  }

  return requestJson;
};

export default getWeather;
