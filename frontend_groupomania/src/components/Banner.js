import React from 'react';
import logo from '../assets/logo.png';
import logo from '../logo_groupo.svg';
import '../styles/Banner.css';


class Banner extends React.Component {
  render() {
    const title = 'Groupomania Social Network'
    return (
      <div className='gpm-banner' >
        <img src={logo} alt='Groupomania' className='gpm-logo' />
        <h1 className='gpm-title'>{title}</h1>
        {/* <header className="App-header"> */}
        <img src={logo_groupo} className="App-logo" alt="logo" />
        {/* </header> */}
      </div>
    )
  }
}

export default Banner;


