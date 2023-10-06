import { ObjectWeather } from '../type';

const getWeather = async (city:string): Promise<ObjectWeather> => {
  const KEYApi = '7cb3e892308eb33cbc4e58af2903af27';
  const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEYApi}`);
  const requestJson = await request.json();

  if (!request.ok) {
    throw new Error(request.statusText);
  }

  return requestJson;
};

export default getWeather;
