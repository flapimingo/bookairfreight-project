import './App.css';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className="App">
      <form>
        <TextInput text="Starting country" />
        <TextInput text="Destination country" />
        <TextInput text="Quote price" />
      </form>
    </div>
  );
}

export default App;
