import { useState } from 'react';
import SearchBar from '../SearchBar';
import WeatherBox from '../WeatherBox';
import getWeather from '../../services/getWeatherApi';
import { ObjectWeather } from '../../type';

function Container() {
  const [inputValue, setInputValue] = useState('');
  const [dataWeather, setDataWeather] = useState<ObjectWeather>({
    name: '',
    cod: 0,
    main: {
      humidity: 0,
      temp: 0,
    },
    weather: [{
      description: '',
      main: 'Clear' || 'Cloud' || 'Mist' || 'Rain' || 'Snow',
    }],
    wind: {
      speed: 0,
    },
  });

  const [style, setStyle] = useState('container2');

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const requestApi = async () => {
    const data = await getWeather(inputValue);
    console.log(data);
    setDataWeather(data);
    setStyle('container');
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestApi();
  };

  return (
    <div className={ style }>
      <SearchBar
        onChange={ handleInputChange }
        onSubmit={ handleFormSubmit }
      />
      <WeatherBox
        data={ dataWeather }
      />
    </div>
  );
}

export default Container;
