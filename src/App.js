import './App.css';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className="App">
      <TextInput text="Starting country" />
      <TextInput text="Destination country" />
      <TextInput text="Quote price" />
      
    </div>
  );
}

export default App;
