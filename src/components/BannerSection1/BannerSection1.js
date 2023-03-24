import React from 'react';
import Header from '../Header/Header';
import './dist/BannerSection1.css';

class BannerSection1 extends React.Component {
   render() {
      return(
         <div className="BannerSection1">
            <Header/>
            <main className='main__section1'>
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
               <div className='cyberpunk__girl'>
                  <img className='girl__img' src='./img/img-section1-3d.png' alt=''/>
                  <img className='girl__blur' src='./img/img-section1-3d-blur.svg' alt=''/>
               </div>
               
               <button className='join__btn'>join the game</button>

               <div className='links'>
                  <div className='icons'>
                     <div className='img'>
                        <img src='./img/discord.svg' alt=''/>
                     </div>
                     <div className='img'>
                        <img src='./img/medium.svg' alt=''/>
                     </div>
                     <div className='img'>
                        <img src='./img/telegram.svg' alt=''/>
                     </div>
                     <div className='img'>
                        <img src='./img/twitter.svg' alt=''/>
                     </div>
                  </div>
                  <p>social media</p>

               </div>
               <img className='arrow' src='./img/Scroll-up-button.svg' alt=''/>
            </main>
         </div>
      )
   }
}

export default BannerSection1;
