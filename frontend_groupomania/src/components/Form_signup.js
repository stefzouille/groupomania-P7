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
            <label htmlFor="userName">Username</label>
            <input type="text" className="form-control" id="userName" placeholder="userName" />
          </div>
          <input type="submit" value="Signup" onClick={sendToApi} />

        </form>
      </div>
    );

    //  recuperer les données du formulaire
    function sendToApi() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const userName = document.getElementById('userName').value;
      console.log(email, password, userName);

      // envoyer les données a l api
      // var email = document.getElementById('email').value;
      // var password = document.getElementById('password').value;
      // var userName = document.getElementById('userName').value;

      const data = {
        email: email,
        password: password,
        userName: userName
      }

      // sendToApi(data.
      //   e.preventDefault(),)
      fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

      })
        // affiche le resultat de la requete
        .then(response => response.json())
        .then(data => {
          console.log(data);
        }
        )
        .catch(error => {
          console.log(error);
        }
        )
      // affiche data sur le frontend
      // .then(() => {

      //   // affiche le message de succes
      //   alert('Utilisateur créé !');
      // }
      // )


      // renvoi sur la page d accueil
      window.location.href = 'http://localhost:3000/';

    }
  }

}




//     function sendToApi(event) {
//       event.preventDefault();
//       console.log('sendToApi');
//       //recuperer les données du formulaire
//       const data = {
//         email: document.getElementById('email').value,
//         password: document.getElementById('password').value,
//         userName: document.getElementById('userName').value
//       };
//       const url = 'http://localhost:5000/auth/signup';
//       var searchParams = new URLSearchParams(window.location.search);
//       console.log(searchParams.get('redirect'));
//       //envoyer les données au serveur
//       fetch(url)
//         //    {
//         //   body: JSON.stringify(data)
//         // })
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);


//         }
//         )
//         .catch(error => console.error(error))

//     }
//   }
// }

export default FormSignup;

