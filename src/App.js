import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {

  const shippingOptions = ["Air", "Ocean"];

  const [quoteData, setQuoteData] = useState({
    startingCountry: '',
    destinationCountry: '',
    quotePrice: 0,
    shippingChannel: '',
  });

  const { startingCountry, destinationCountry, quotePrice, shippingChannel } = quoteData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuoteData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input
          label="Starting country"
          name="startingCountry"
          type="text"
          value={startingCountry}
          onChange={handleChange}
        />
        <Input
          label="Destination country"
          name="destinationCountry"
          type="text"
          value={destinationCountry}
          onChange={handleChange}
        />
        <Input
          label="Quote price"
          name="quotePrice"
          type="number"
          value={quotePrice}
          onChange={handleChange}
        />
        <Input
          label="Shipping channel"
          name="shippingChannel"
          options={shippingOptions}
          type="select"
          value={shippingChannel}
          onChange={handleChange}
        />
        <Button text="Create quote" type="submit" />
      </form>
    </div>
  );
}

export default App;
