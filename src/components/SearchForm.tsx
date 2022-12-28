import { SearchFormProps } from "../types";

const BUTTON_TEXT = 'Get JSON';

const SearchForm = ({ onSubmit, inputVal, setInputVal }: SearchFormProps) => {
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal((e.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={onSubmit} className="search-form">
      <input onChange={handleOnChange} className="input" type="url" placeholder="Get JSON from url" value={inputVal} />
      <button className="submit-btn" disabled={inputVal.length === 0}>
        {BUTTON_TEXT}
      </button>
    </form>
  );
};

export default SearchForm;