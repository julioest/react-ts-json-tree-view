import React from 'react';
import mockData from './MOCK_DATA.json';
import SearchForm from './components/SearchForm';
import TreeView from './components/TreeView';
import { JSONValue } from './types';
import { fetchJSON } from './utils';
import './App.css';

function App() {
  const [inputVal, setInputVal] = React.useState<string>('');
  const [responseJSON, setResponseJSON] = React.useState<JSONValue | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetchJSON({ endpoint: inputVal });

      if (!response.ok) {
        let { statusText, status } = response;
        throw new Error(`${statusText ? `${statusText}` : `${status}`}`);
      }

      const data = await response.json();
      setResponseJSON(data);
      setError(null);
    } catch (error) {
      if (error instanceof Error) setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <SearchForm onSubmit={handleFormSubmit} inputVal={inputVal} setInputVal={setInputVal} />
        {isLoading && (
          <div className="loader-container">
            <span className="loader" />
          </div>
        )}
        {error && (
          <div className="error-msg">
            <p>
              {`❌`}&nbsp; {'Whoops! Something went wrong'}
            </p>
            <pre>{`${error}`}</pre>
          </div>
        )}
        {!isLoading && !error && responseJSON && <TreeView data={responseJSON} />}
      </div>
    </div>
  );
}

export default App;
