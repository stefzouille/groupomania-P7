import React from 'react';
import logo from './logo.svg';
import '../App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FormSignup from './FormSignup';
import Login from './Login';
import Home from './Home';
import Createpost from './Create_post';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className='register'>
          <p>Bonjour, que voulez-vous faire ?</p>
          <ul>
            <li>
              <Link to="/FormSignup"> Inscription </Link>
            </li>
            <li>
              <Link to="/Login"> Connexion </Link>
            </li>
            {/* <li>
              <Link to="/Home"> Accueil </Link>
            </li> */}


          </ul>

          <hr />
          <div className="main-route-place">
            {/* renvoie le component FormSignup */}
            <Routes>
              <Route path="/FormSignup" element={<FormSignup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Create_post" element={<Createpost />} />
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
