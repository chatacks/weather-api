import { FaLocationDot } from 'react-icons/fa6';
import { BiSearchAlt2 } from 'react-icons/bi';
import notFound from '../../assets/404.png';

function SearchBar() {
  return (
    <>
      <div className="container">
        <div className="search-box">
          <FaLocationDot />
          <input type="text" placeholder="Digite sua localização" />
          <button>
            <BiSearchAlt2 />
          </button>
        </div>
      </div>

      <div className="not-found">
        <img src={ notFound } alt="" />
      </div>
    </>

  );
}

export default SearchBar;
