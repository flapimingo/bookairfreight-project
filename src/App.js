import './App.css';
import Button from './components/Button';
import NumberInput from './components/NumberInput';
import SelectInput from './components/SelectInput';
import TextInput from './components/TextInput';

function App() {

  const shippingOptions = ["Air", "Ocean"];

  return (
    <div className="App">
      <form>
        <TextInput text="Starting country" />
        <TextInput text="Destination country" />
        <NumberInput text="Quote price" />
        <SelectInput text="Shipping channel" options={shippingOptions}/>
        <Button text="Create quote"/>
      </form>
    </div>
  );
}

export default App;
