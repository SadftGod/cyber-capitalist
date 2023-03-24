import React from 'react';
import './dist/QuestionSection2.css'

class QuestionSection2 extends React.Component {
   render() {
      return(
         <div className="QuestionSection2">
            <div className='section'>
               <div className='question__bar'>
                  <div className='question__block'>
                     <div className='frame'>
                        <img src='./img/guestion-mark.svg' alt=''/>
                        <p className='text__in__frame'>Being the master of your own destiny?</p>
                     </div>
                  </div>
                  <div className='question__block'>
                     <div className='frame'>
                        <img src='./img/guestion-mark.svg' alt=''/>
                        <p className='text__in__frame'>Being the master of your own destiny?</p>
                     </div>
                  </div>
                  <div className='question__block'>
                     <div className='frame'>
                        <img src='./img/guestion-mark.svg' alt=''/>
                        <p className='text__in__frame'>Being the master of your own destiny?</p>
                     </div>
                  </div>
               </div>
               <div className='text_blockssec'>
                  <p className='text__of_second_sec'>Build</p>
                  <p className='text__of_second_sec'>Your <span className='own'>Own</span></p>
                  <p className='text__of_second_sec'>Business</p>
                  <p className='text__of_second_sec'>Empire</p>
                  <div className='lower__text__con'>
                     <p className='lower__text'>in weird and </p>
                     <p className='lower__text'>unexplored</p>
                     <p className='lower__text'>Cyber World</p>
                     
                  </div>
               </div>
               <div className='img__block' alt=''>
                  <img className='city' src='./img/img-section2.png' alt=''/>
                  <img className='city__blur' src='./img/img-section2-blur.png' alt=''/>
               </div>
            </div>
         </div>
      )
   }
}

export default QuestionSection2;
