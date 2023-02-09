import { useEffect, useState } from 'react';
import './Quote.css';

import { MdOutlineAirplanemodeActive, MdDirectionsBoat } from "react-icons/md";

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
    setEstimatedDeliveryDate(`${startRange} - ${endRange}`);
  };

  const formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  };

  let dollarString = new Intl.NumberFormat('en-US', formatting_options);

  useEffect(() => {
    if (shippingChannel) generateEstimatedDelivery();
  }, [shippingChannel]);

  return (
    <div className="Quote">
      <div className="column left">
        <div className="QuoteShipping">
          {shippingChannel === 'Ocean' && (
            <div className="QuoteShippingHeader">
              <span className="QuoteShippingIcon"><MdDirectionsBoat /></span>
              <span className="QuoteShippingTitle">Traditional ocean freight</span>
            </div>
          )}
          {shippingChannel === 'Air' && (
            <div className="QuoteShippingHeader">
              <span className="QuoteShippingIcon"><MdOutlineAirplanemodeActive /></span>
              <span className="QuoteShippingTitle">Traditional air freight</span>
            </div>
          )}
        </div>
        <div className="QuoteDelivery">
        <div className="QuoteDeliveryBox">
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
      </div>
      <div className="column right">
        <div className="QuoteRoute">
          <p>{startingCountry} -&gt; {destinationCountry}</p>
        </div>
        <div className="QuotePrice">
          <p>US {dollarString.format(quotePrice)}</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;