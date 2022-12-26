import { SearchFormProps } from "../types";

const SearchForm = ({ onSubmit, inputVal, setInputVal }: SearchFormProps) => {
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal((e.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={onSubmit} className="search-form">
      <input onChange={handleOnChange} className="input" type="url" placeholder="Get json from url" value={inputVal} />
      <button className="submit-btn" disabled={inputVal.length === 0}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;