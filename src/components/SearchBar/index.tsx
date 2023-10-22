import { FaLocationDot } from 'react-icons/fa6';
import { BiSearchAlt2 } from 'react-icons/bi';

type SearchBarProps = {
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function SearchBar({ onChange, onSubmit }: SearchBarProps) {
  return (
    <div>
      <div className="search-box">
        <FaLocationDot className="icon-dot-location" />
        <form onSubmit={ onSubmit }>
          <input
            data-testid="input-search"
            onChange={ onChange }
            type="text"
            placeholder="Digite sua localização"
          />
          <button>
            <BiSearchAlt2 data-testid="button-search" />
          </button>
        </form>
      </div>
    </div>

  );
}

export default SearchBar;
