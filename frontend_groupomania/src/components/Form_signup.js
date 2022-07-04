import React, { Component } from 'react';

class FormSignup extends Component {
  render() {
    return (
      <div>
        <form action="" method="post">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted"></small>
            {/* We'll never share your email with anyone else. */}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="userName">userName</label>
            <input type="text" className="form-control" id="userName" placeholder="userName" />

          </div>
          <input type="submit" value="Signup" onClick={sendToApi} />

        </form>
      </div>
    );



    function sendToApi(event) {
      event.preventDefault();
      console.log('sendToApi');
      //recuperer les données du formulaire
      const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        userName: document.getElementById('userName').value
      };
      const url = 'http://localhost:5000/auth/signup';
      var searchParams = new URLSearchParams(window.location.search);
      console.log(searchParams.get('redirect'));
      //envoyer les données au serveur
      fetch(url)
        //    {
        //   body: JSON.stringify(data)
        // })
        .then(response => response.json())
        .then(data => {
          console.log(data);


        }
        )
        .catch(error => console.error(error))

    }
  }
}
// sendToApi()



export default FormSignup;