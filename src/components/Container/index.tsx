import SearchBar from '../SearchBar';
import WeatherBox from '../WeatherBox';
import './container.css';

function Container() {
  return (
    <div className="container">
      <SearchBar />
      <WeatherBox />
    </div>
  );
}

export default Container;
