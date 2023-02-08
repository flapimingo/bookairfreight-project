import { useEffect } from 'react';
import './Quote.css';

const Quote = ({ data }) => {
  const { startingCountry, destinationCountry, shippingChannel, quotePrice } = data;

  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const addDays = (date, days) => {
    return date.setDate(date.getDate() + days);
  };

  const getEstimatedDelivery = () => {
    let startDate, endDate, startRange, endRange;
    // Validate how many days to consider in the range
    if (shippingChannel === 'Air') {
      startDate = randomInteger(3, 7);
      endDate = randomInteger(2, 4);
    } else if (shippingChannel === 'Ocean') {
      startDate = randomInteger(25, 30);
      endDate = randomInteger(5, 10);
    }
    // Preformat range response
    const estimatedRange = `${startDate}-${startDate + endDate} days`;
    startRange = addDays(new Date(), startDate);
    endRange = addDays(new Date(), endDate);

  };

  useEffect(() => { getEstimatedDelivery() }, []);

  return (
    <div className="row">
      <div className="column left">
        <div className="QuoteShipping">
          {shippingChannel === 'Ocean' && (
            <span>Traditional ocean freight</span>
          )}
          {shippingChannel === 'Air' && (
            <span>Traditional air freight</span>
          )}
        </div>
        <div className="QuoteDelivery">
        </div>
      </div>
      <div className="column right">
        <div className="QuoteRoute">
          {startingCountry} -&gt; {destinationCountry}
        </div>
        <div className="QuotePrice">
          {quotePrice}
        </div>
      </div>
    </div>
  );
};

export default Quote;