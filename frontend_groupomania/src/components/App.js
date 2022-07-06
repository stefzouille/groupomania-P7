import React from 'react';
// import logo from './logo.svg';
import '../App.css';
import FormSignup from './FormSignup';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <p>sdrgsergsege</p>
          <ul>
            <li>
              <Link to="/FormSignup">FormSignup</Link>
            </li>

          </ul>

          <hr />
          <div className="main-route-place">
            <Switch>
              <Route path="/FormSignup" >
                <FormSignup />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}


// function App() {
//   return (
//     // <BrowserRouter>
//     //   <Link to="/signup" /> FormSignup </Link>
//     // </BrowserRouter >
//     // route pour la page d'inscription
//     <BrowserRouter>
//       <div>

//         <Link to="/">Home</Link>
//       </div>



//       <div className="App">
//         {/* bouton renvoie vers la page de signup */}



//         {/* <FormSignup /> */}


//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//       </div>
//     </BrowserRouter>
//   )
// }


export default App;
