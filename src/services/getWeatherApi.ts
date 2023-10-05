const getWeather = async (city:string) => {
  try {
    const KEYApi = '7cb3e892308eb33cbc4e58af2903af27';
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEYApi}`);

    if (!request.ok) {
      throw new Error(request.statusText);
    }

    return await request.json();
  } catch (error) {
    console.log(error);
  }
};

export default getWeather;
