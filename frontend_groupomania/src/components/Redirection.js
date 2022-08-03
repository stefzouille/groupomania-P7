// import React from "react";
// import { useNavigate } from 'react-router-dom';



function Redirection(props) {


  //   React.useEffect(() => {
  //     if (localStorage.getItem("token") && window.location.pathname === "/") {
  //       navigate("/Home");
  //     }
  //   }, []);

  //   return null;
  // }
  // si user déjà connecté et qu'on est sur / on redirige vers la page home
  if (localStorage.getItem("token") && window.location.pathname === "/") {
    window.location.href = '/Home';
  }

}

export default Redirection;