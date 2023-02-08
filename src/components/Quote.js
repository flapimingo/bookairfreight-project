import { useEffect, useState } from 'react';
import './Quote.css';

const Quote = ({ data }) => {
  const { startingCountry, destinationCountry, shippingChannel, quotePrice } = data;

  const [estimatedRange, setEstimatedRange] = useState('');
  const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState('');

  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const addDays = (date, days) => {
    return new Date(date.setDate(date.getDate() + days));
  };

  const generateEstimatedDelivery = () => {
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
    setEstimatedRange(`${startDate}-${startDate + endDate} days`);
    startRange = addDays(new Date(), startDate).toLocaleString('default', { month: 'short', day: '2-digit' });
    endRange = addDays(new Date(), startDate + endDate).toLocaleString('default', { month: 'short', day: '2-digit' });
    setEstimatedDeliveryDate(`${startRange}-${endRange}`);
  };

  useEffect(() => {
    if (shippingChannel) generateEstimatedDelivery();
  }, [shippingChannel]);

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
          <div className="QuoteDeliveryDays">
            <span>{estimatedRange}</span>
          </div>
          <div className="QuoteDeliveryEstimation">
            <span>Estimated delivery</span>
          </div>
          <div className="QuoteDeliveryDate">
            <span>{estimatedDeliveryDate}</span>
          </div>
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