import { FaLocationDot } from 'react-icons/fa6';
import { BiSearchAlt2 } from 'react-icons/bi';
import notFound from '../../assets/404.png';

function SearchBar() {
  return (
    <>
      <div className="search-box">
        <FaLocationDot />
        <input type="text" placeholder="Digite sua localização" />
        <button>
          <BiSearchAlt2 />
        </button>
      </div>

      <div className="not-found">
        <img src={ notFound } alt="Not Found 404" />
        <p>Opa! Localização inválida. Insira uma localização válida.</p>
      </div>
    </>

  );
}

export default SearchBar;
