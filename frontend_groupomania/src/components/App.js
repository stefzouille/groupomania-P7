import React from "react";

import "../App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import FormSignup from "./FormSignup";
import Login from "./Login";
import Home from "./Home";
import Createpost from "./Create_post";
import Redirection from "./Redirection";
import Navigation from "./Navigation";
import ModifyPost from "./ModifyPost";

function App(props) {

  //si user déjà connecté on redirige vers la page home

  return (
    <BrowserRouter>
      <Redirection />

      {/* cacher une fois connecté */}

      <div className="register">

        <Navigation />


        <div className="main-route-place">
          {/* renvoie le component FormSignup */}
          <Routes>
            <Route path="/FormSignup" element={<FormSignup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Create_post" element={<Createpost />} />
            <Route path="/ModifyPost" element={<ModifyPost />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;