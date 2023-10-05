import SearchBar from '../SearchBar';
import WeatherBox from '../WeatherBox';
import './index.css';

function Container() {
  return (
    <div className="container">
      <SearchBar />
      <WeatherBox />
    </div>
  );
}

export default Container;
