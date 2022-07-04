import logo from './logo.svg';
import '../App.css';
import FormSignup from './Form_signup';

function App() {
  return (
    <div className="App">

      <FormSignup />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
