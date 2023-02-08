import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Form = ({ name, defaultQuoteValues, handleSubmit }) => {
  const shippingOptions = ["Air", "Ocean"];

  const [quoteData, setQuoteData] = useState(defaultQuoteValues);

  const { startingCountry, destinationCountry, quotePrice, shippingChannel } = quoteData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuoteData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    handleSubmit(e, quoteData);
    setQuoteData(defaultQuoteValues);
  };

  return (
    <form onSubmit={handleOnSubmit} name={name}>
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
      <Button
        label="Create quote"
        type="submit"
      />
    </form>
  )
};

export default Form;