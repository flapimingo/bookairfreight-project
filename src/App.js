import { useEffect, useState } from 'react';
import './App.css';
import QuoteForm from './components/Form';
import Quote from './components/Quote';

function App() {
  const [quoteHistory, setQuoteHistory] = useState([]);

  // Defines default values
  // By default, the first shipping option is selected
  const shippingOptions = ['Ocean', 'Air'];

  const defaultQuoteValues = {
    startingCountry: '',
    destinationCountry: '',
    quotePrice: NaN,
    shippingChannel: shippingOptions[0],
  };

  const handleSubmit = (e, quoteData) => {
    e.preventDefault();
    setQuoteHistory([...quoteHistory, quoteData]);
  };

  return (
    <div className="App">
      <QuoteForm
        name="QuoteForm"
        handleSubmit={handleSubmit}
        defaultQuoteValues={defaultQuoteValues}
        shippingOptions={shippingOptions}
      />
      {quoteHistory.length > 0 && (
        <div className="QuoteBox">
          {quoteHistory.map((quote, index) => (
            <Quote
              data={quote}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
