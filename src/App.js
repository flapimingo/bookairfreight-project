import './App.css';
import SelectInput from './components/SelectInput';
import TextInput from './components/TextInput';

function App() {

  const shippingOptions = ["Air", "Ocean"];

  return (
    <div className="App">
      <form>
        <TextInput text="Starting country" />
        <TextInput text="Destination country" />
        <TextInput text="Quote price" />
        <SelectInput text="Shipping channel" options={shippingOptions}/>
      </form>
    </div>
  );
}

export default App;
