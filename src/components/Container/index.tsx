import { useState } from 'react';
import SearchBar from '../SearchBar';
import WeatherBox from '../WeatherBox';

function Container() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  console.log(inputValue);

  return (
    <div className="container">
      <SearchBar onChange={ handleInputChange } />
      <WeatherBox />
    </div>
  );
}

export default Container;
