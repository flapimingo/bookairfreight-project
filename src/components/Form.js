import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Form = ({ name, defaultQuoteValues, shippingOptions, handleSubmit }) => {

  const [quoteData, setQuoteData] = useState(defaultQuoteValues);

  const { startingCountry, destinationCountry, quotePrice, shippingChannel } = quoteData;

  const handleOnSubmit = (e) => {
    let formIsValid = true;

    // Validate if values are not empty
    if ([startingCountry, destinationCountry].includes('') || Number.isNaN(quotePrice)) {
      alert('Cannot be empty');
      formIsValid = false;
    } else if ((startingCountry !== 'undefined') && (destinationCountry !== 'undefined')) {
      // Validate if country includes only letters
      if ((!startingCountry.match(/^[a-zA-Z]+$/)) || (!destinationCountry.match(/^[a-zA-Z]+$/))) {
        alert('Invalid input');
        formIsValid = false;
      }
    }

    if (formIsValid) {
      handleSubmit(e, quoteData);
      setQuoteData(defaultQuoteValues);
    }
  };

  return (
    <form onSubmit={handleOnSubmit} name={name} data-testid="QuoteForm">
      <Input
        label="Starting country"
        name="startingCountry"
        type="text"
        value={startingCountry}
        dataSetter={setQuoteData}
      />
      <Input
        label="Destination country"
        name="destinationCountry"
        type="text"
        value={destinationCountry}
        dataSetter={setQuoteData}
      />
      <Input
        label="Quote price"
        name="quotePrice"
        type="number"
        value={quotePrice}
        min={0}
        dataSetter={setQuoteData}
      />
      <Input
        label="Shipping channel"
        name="shippingChannel"
        options={shippingOptions}
        type="select"
        value={shippingChannel}
        dataSetter={setQuoteData}
      />
      <Button
        label="Create quote"
        type="submit"
      />
    </form>
  )
};

export default Form;