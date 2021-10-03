import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import zap from '../images/zap.png';

export default function Contact() {
  return (
    <div className="modal" >
      <button className="close">x</button>
      <h2>Tic tac toe feito com:</h2>
        <div class="icons">
          <p><img alt='cris-react' src="https://img.icons8.com/office/40/000000/react.png"/></p>
          <p><img alt='cris-js' src='https://icongr.am/devicon/javascript-original.svg?size=50&color=currentColor' /></p>
          <p><img alt='cris-html' src='https://icongr.am/devicon/html5-original-wordmark.svg?size=50&color=currentColor' /></p>
          <p><img alt='cris-css' src='https://icongr.am/devicon/css3-original-wordmark.svg?size=50&color=currentColor' /></p>
        </div>
      <div className="links">
        <p>
          <img alt="cris-git" src={ github } width="48px"/>
          <a href="https://github.com/CristinaPineda" target="blank">GitHub</a>
        </p>
        <p>
          <img alt="cris-link" src={ linkedin }/>
          <a href="https://www.linkedin.com/in/cristina-pineda-41596044/" target="blank">Linkedin</a>
        </p>
        <p>
          <img alt="cris-zap" src={ zap }/>
          Meu contato: (11)94720.1686
        </p>
        <p>
          <img alt="cris-mail" src="https://img.icons8.com/fluency/48/000000/email-open.png"/>
          Email: cristinadaspineda@yahoo.com.br
        </p>
      </div>
    </div>
  )
}
