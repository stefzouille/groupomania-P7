import React, { Component } from 'react';
import '../styles/FormSignup.css';

class FormSignup extends Component {
  render() {
    return (
      <div className="formcontrol">
        <form action="" method="post">
          <div className="form-group">
            {/* <label htmlFor="email">Email address</label> */}
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted"></small>
            {/* We'll never share your email with anyone else. */}
          </div>
          <div className="form-group">
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            {/* <label htmlFor="userName">Username</label> */}
            <input type="text" className="form-control" id="userName" placeholder="userName" />
          </div>
          <input className='signbutton' type="submit" value="Signup" onClick={sendToApi} />

        </form>
      </div>
    );

    //  recuperer les données du formulaire
    function sendToApi(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const userName = document.getElementById('userName').value;

      const data = {
        email: email,
        password: password,
        userName: userName
      }


      // affiche le resultat de la requete
      // si le mail est vide on affiche un message d'erreur
      if (data.email === "") {
        alert("Veuillez entrer un email")
      }
      else if (data.password === "") {
        alert("Veuillez entrer un mot de passe")
      }
      else if (data.userName === "") {
        alert("Veuillez entrer un nom d'utilisateur")
      }

      else {

        fetch('http://localhost:5000/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)

        })

          .then(response => response.json())
          .then(data => {

            window.location.href = '/Home';
          }
          )
          .catch(error => {
            console.log(error);
            alert(data.message)
          }
          )
      }
    }
  }
}

export default FormSignup;

