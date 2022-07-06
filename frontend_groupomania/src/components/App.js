import logo from './logo.svg';
import '../App.css';
// import FormSignup from './FormSignup';
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    // <BrowserRouter>
    //   <Link to="/signup" /> FormSignup </Link>
    // </BrowserRouter >
    // route pour la page d'inscription
    <BrowserRouter>
      <div>

        <Link to="/">Home</Link>
      </div>



      <div className="App">
        {/* bouton renvoie vers la page de signup */}



        {/* <FormSignup /> */}


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </BrowserRouter>
  )
}


export default App;
