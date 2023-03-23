import React from 'react';
import Header from '../Header/Header';
import './dist/BannerSection1.css';

class BannerSection1 extends React.Component {
   render() {
      return(
         <div className="BannerSection1">
            <Header/>
            <main className='main__section'>
               <div className='text__con'>
                  <div className='top__text'>
                     <p className='text'>Become a</p>
                     <p className='smaller__text'>cyber capitalist game   </p>
                  </div>
                  <div className='midlle__text'>
                     <p className='text'>#1 businessmen</p>
                  </div>
                  <div className='bottomn__text'>
                     <p className='text'>in cyber reality</p>
                  </div>
               </div>
               <img className='cyberpunk__girl' src='./img/img-section1-3d.png'/>
               <button className='join__btn'>join the game</button>

               <div className='links'>
                  <div className='icons'>
                     <img src='./img/discord.png'/>
                     <img src='./img/medium.png'/>
                     <img src='./img/telegram.png'/>
                     <img src='./img/twitter.png'/>
                  </div>
                  <p>social media</p>

               </div>
               <img className='arrow' src='./img/Scroll-up-button.svg'/>
            </main>
         </div>
      )
   }
}

export default BannerSection1;
