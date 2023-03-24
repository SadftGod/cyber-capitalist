import React from 'react';
import './dist/AssetsSection4.css';

class AssetsSection4 extends React.Component {
   render() {
      return(
         <div className="AssetsSection4">
            <div className='assets__con'>
               <img className='drone' src='./img/drone.svg'/>
               <img className='cyborg' src='./img/cyborg.png'/>
               <img className='cybor_hand' src='./img/cybor-hand.png'/>
               <img className='f_y_connector' src='./img/yellow_i_conection.svg'/>
               <img className='s_y_connector' src='./img/yellow_i_conection.svg'/>
               <img className='t_y_connector' src='./img/yellow_i_conection.svg'/>
               <img className='f_y_connect' src='./img/f_y_connect.png'/>
               <img className='s_y_connect' src='./img/s_y_connect.png'/>
               <img className='t_y_connect' src='./img/t_y_connect.png'/>
               <div className='lower__text__f_con'>
                  <p className='f__lower__text'>Scale your empire to the</p>
                  <p className='f__lower__text'>new heights with on-chain</p>
                  <p className='f__lower__text'>partnerships and</p>
                  <p className='f__lower__text'>businesses marketplace!</p>
               </div>
               <div className='lower__text__s_con'>
                  <p className='f__lower__text'>Become a true Cyber</p>
                  <p className='f__lower__text'>Capitalist by moving your</p>
                  <p className='f__lower__text'>identity to Blockchain</p>
                  <p className='f__lower__text'>and apply bonuses</p>
               </div>
               <div className='lower__text__t_con'>
                  <p className='f__lower__text'>Become a true Cyber</p>
                  <p className='f__lower__text'>Capitalist by moving your</p>
                  <p className='f__lower__text'>identity to Blockchain</p>
                  <p className='f__lower__text'>and apply bonuses</p>
               </div>
            </div>
            <div className='bottomn__text__f'>
               <p className='true_capitalist'>as true Cyber Capitalist</p>
               <p className='botomn_upper'>Own your <span>assets</span> </p>
               <p className='botomn_upper'>with web3</p>
            </div>
            
            
         </div>
      )
   }
}

export default AssetsSection4;
