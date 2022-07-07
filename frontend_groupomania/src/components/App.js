import React from 'react';
// import logo from './logo.svg';
import '../App.css';
import FormSignup from './FormSignup';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Switch from 'react-switch';
import { Redirect } from 'react-router-dom';

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
            {/* renvoie le component FormSignup */}
            <Routes>
              {/* <Route path="/" element={<FormSignup />} /> */}
              <Route path="/FormSignup" element={<FormSignup />} />
            </Routes>

          </div>
        </div>
      </BrowserRouter >
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
