import { FaWater } from 'react-icons/fa6';
import { LuWind } from 'react-icons/lu';
import { ObjectWeather } from '../../type';
import icons from '../../data/icons';

type WeatherBoxProps = {
  data: ObjectWeather;
};

function WeatherBox({ data }: WeatherBoxProps) {
  const { weather } = data;
  const [array] = weather;
  const { main } = array;

  return (
    <>
      <div className="weather-box fadeIn">
        {weather && <img src={ icons[main] } alt={ main } />}
        <p className="temperature">
          {`${data.main.temp} °C`}
        </p>
        <p className="description">{(data.weather[0].main)}</p>
      </div>

      <div className="weather-details fadeIn">
        <div className="humidity">
          <FaWater className="icon-weather-box" />
          <div className="text">
            <span>{`${data.main.humidity}%`}</span>
            <p>Humidity</p>
          </div>
        </div>

        <div className="wind">
          <LuWind className="icon-weather-box" />
          <div className="text">
            <span>{`${data.wind.speed}Km/h`}</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>

    </>
  );
}

export default WeatherBox;
