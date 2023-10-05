import { FaWater } from 'react-icons/fa6';
import { LuWind } from 'react-icons/lu';

function WeatherBox() {
  return (
    <>
      <div className="weather-box">
        <img src="" alt="" />
        <p className="temperature" />
        <p className="description" />
      </div>

      <div className="weather-details">
        <div className="humidity">
          <FaWater className="icon-weather-box" />
          <div className="text">
            <span />
            <p>Humidity</p>
          </div>
        </div>

        <div className="wind">
          <LuWind className="icon-weather-box" />
          <div className="text">
            <span />
            <p>Wind Speed</p>
          </div>
        </div>
      </div>

    </>
  );
}

export default WeatherBox;
