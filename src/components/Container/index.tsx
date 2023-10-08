import { useEffect, useState } from 'react';
import { ObjectWeather } from '../../type';
import SearchBar from '../SearchBar';
import WeatherBox from '../WeatherBox';
import getWeather from '../../services/getWeatherApi';
import notFound from '../../assets/404.png';

function Container() {
  const [inputValue, setInputValue] = useState('');
  const [style, setStyle] = useState('container2');
  const [validate, setValidate] = useState(false);
  const [locNotFound, setLocNotFound] = useState('');
  const [dataWeather, setDataWeather] = useState<ObjectWeather>({
    cod: 0,
    name: '',
    main: {
      humidity: 0,
      temp: 0,
    },
    weather: [{
      description: '',
      main: 'Clear' || 'Clouds' || 'Mist' || 'Rain' || 'Snow',
    }],
    wind: {
      speed: 0,
    },
  });

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const requestApi = async () => {
    try {
      const data = await getWeather(inputValue);
      setDataWeather(data);
      setStyle('container');
      setValidate(false);
    } catch (error) {
      setValidate(true);
      setLocNotFound('container-not-found');
    }
  };

  useEffect(() => {
    sessionStorage.setItem('weather', JSON.stringify(dataWeather));
  }, [dataWeather]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestApi();
  };

  return (
    <div className={ validate ? locNotFound : style }>
      <SearchBar
        onChange={ handleInputChange }
        onSubmit={ handleFormSubmit }
      />
      {validate
        ? (
          <div
            className={ `${locNotFound} not-found fadeIn` }
          >
            <img src={ notFound } alt="Not Found 404" />
            <p>Opa! Localização inválida. Insira uma localização válida.</p>
          </div>)
        : <WeatherBox
            data={ dataWeather }
        />}
    </div>
  );
}

export default Container;
