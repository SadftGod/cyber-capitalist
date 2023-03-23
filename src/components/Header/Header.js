import React from 'react';
import './dist/Header.css';




class Header extends React.Component {



   
   render() {
      return(
         <div className="Header">

               <img src='./img/logo.svg'/>
               <ul>
                  <li><a href="#home">about us</a></li>
                  <li><a href="#news">technology</a></li>
                  <li><a href="#contact">game</a></li>
                  <li><a href="#about">roadmap</a></li>
                  <li><a href="#team">team</a></li>
                  <li><a href="#faq">faq</a></li>
               </ul>

               <div className='burger'>
                  <div className='f__line'></div>
                  <div className='s__line'></div>
                  <div className='t__line'></div>
               </div>

         </div>
      )
   }
}


export default Header;
