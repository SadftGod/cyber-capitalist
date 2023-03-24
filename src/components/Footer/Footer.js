import React from 'react';
import './dist/Footer.css';

class Footer extends React.Component {
   render() {
      return(
         <div className="Footer">
            <div>
               <div className='cyberCapitalist'>
                  Cyber Capitalist Game
                  <button className='footter_join'>Join the game</button>
               </div>
               <div></div>
            </div>






            
            <div className='bottom_footer'>
               <div>@CYBCAP 2023,all rights reserved </div>
               <div className='footer_buttons'>
                  <div>Privacy policy</div>
                  <div>Cookies policy</div>
                  <div>Terms of use</div>
               </div>
            </div>
         </div>
      )
   }
}

export default Footer;
