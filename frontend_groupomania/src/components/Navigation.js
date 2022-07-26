import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navigation.css';


function Navigation(props) {

  if (!localStorage.getItem("token")) {
    return (
      <ul>
        <li>
          <Link to="/FormSignup"> Inscription </Link>
        </li>
        <li>
          <Link to="/Login"> Connexion </Link>
        </li>
        <hr />
      </ul>
    )
  }
}

export default Navigation;