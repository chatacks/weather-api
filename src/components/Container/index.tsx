import { useState } from 'react';
import SearchBar from '../SearchBar';
import WeatherBox from '../WeatherBox';
import getWeather from '../../services/getWeatherApi';

function Container() {
  const [inputValue, setInputValue] = useState('');
  const [active, setActive] = useState(false);

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const requestApi = async () => {
    const teste = await getWeather(inputValue);
    console.log(teste);
  };

  const toggleMode = () => {
    setActive((prevActive) => !prevActive);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestApi();
    toggleMode();
  };

  return (
    <div className="container">
      <SearchBar
        onChange={ handleInputChange }
        onSubmit={ handleFormSubmit }
      />
      <WeatherBox active={ active } />
    </div>
  );
}

export default Container;
