import React from 'react';
import './ChatButton.css';
import Wame from '../../assets/images/wame.png';

const ChatButton = () => {
  const url = "https://wa.me/573102042673/?text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20frutas%20exóticas."
  return (
    <div className="container-boton">
      <a href={url} target="blank">
        <img className="boton" src={Wame} alt="whatsApp"></img>
      </a>
    </div>
  );
};

export { ChatButton };