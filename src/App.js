import { useEffect, useState } from 'react';
import './App.css';
import QuoteForm from './components/Form';

function App() {
  const [quoteHistory, setQuoteHistory] = useState([]);

  const defaultQuoteValues = {
    startingCountry: '',
    destinationCountry: '',
    quotePrice: NaN,
    shippingChannel: '',
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
      />
    </div>
  );
}

export default App;
