import React from 'react';
import './dist/Header.css';
import $ from 'jquery';
import Menu from '../Menu/Menu';




class Header extends React.Component {
   constructor(props){
      super(props)
      this.menuHover = this.menuHover.bind(this)
      this.openMenu = this.openMenu.bind(this)
      this.menu = React.createRef()
   
      this.state = {menuActive: false}
   }


   menuHover(){
      this.menu.current.addEventListener("mouseover",() => {
         $(".s__line").css("width","34")
      })
      this.menu.current.addEventListener("mouseleave",() => {
         $(".s__line").css("width","23")
      })
   }

   openMenu(){
      if(this.state.menuActive === false){
         $('#menu_open').css('display','block')
         this.setState({menuActive: true})
      }
      else{
         $('#menu_open').css('display','none')
         this.setState({menuActive: false})
      }
      
   }
   

   componentDidMount(){
      this.menuHover()
   }
   
   render() {
      return(
         <div className="Header">

               <img src='./img/logo.svg' alt=''/>
               <ul>
                  <li>
                     <a href="#home">about us</a>
                     <div className='gold__line'></div>
                     </li>
                  <li>
                     <a href="#news">technology</a>
                     <div className='gold__line'></div>
                     </li>
                  <li>
                     <a href="#contact">game</a>
                     <div className='gold__line'></div>
                     </li>
                  <li>
                     <a href="#about">roadmap</a>
                     <div className='gold__line'></div>
                     </li>
                  <li>
                     <a href="#team">team</a>
                     <div className='gold__line'></div>
                     </li>
                  <li>
                     <a href="#faq">faq</a>
                     <div className='gold__line'></div>
                     </li>
               </ul>

               <div ref={this.menu} onClick={this.openMenu} className='burger'>
                  <div className='f__line'></div>
                  <div className='s__line'></div>
                  <div className='t__line'></div>
               </div>
         
         <div id='menu_open'>
            <Menu openMenu = {this.openMenu} />
         </div>
         </div>
      )
   }
}


export default Header;
