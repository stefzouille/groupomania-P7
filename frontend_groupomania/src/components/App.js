import React from 'react';
import logo from './logo.svg';
import '../App.css';
import FormSignup from './FormSignup';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './Login';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className='register'>
          <p>thank you for registering or logging in to be able to take advantage of this magnificent internal communication tool for our company</p>
          <ul>
            <li>
              <Link to="/FormSignup"> FormSignup </Link>
            </li>
            <li>
              <Link to="/Login"> Login </Link>
            </li>

          </ul>

          <hr />
          <div className="main-route-place">
            {/* renvoie le component FormSignup */}
            <Routes>
              <Route path="/FormSignup" element={<FormSignup />} />
              <Route path="/Login" element={<Login />} />
            </Routes>

          </div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
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
