import { FaWater } from 'react-icons/fa6';
import { LuWind } from 'react-icons/lu';

function WeatherBox() {
  return (
    <>
      <div className="weather-box">
        <img src="" alt="" />
        <p className="temperature">temp</p>
        <p className="description">desc</p>
      </div>

      <div className="weather-details">
        <div className="humidity">
          <FaWater />
          <div className="text">
            <span />
            <p>Humidity</p>
          </div>
        </div>

        <div className="wind">
          <LuWind />
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
