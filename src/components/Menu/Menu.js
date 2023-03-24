import React from 'react';
import './dist/Menu.css';
import $ from 'jquery';


class Menu extends React.Component {
   constructor(props) {
      super(props)
      this.closehover = this.closehover.bind(this);
      this.close = React.createRef();
      
   }

   closehover(){
      this.close.current.addEventListener("mouseover",() => {
         $("#f_line_off").css("width","40")
         $("#s_line_off").css("width","40")
      })
      this.close.current.addEventListener("mouseleave",() => {
         $("#f_line_off").css("width","30")
         $("#s_line_off").css("width","30")
      })
   }


   componentDidMount() {this.closehover()}

   render() {
      return(
         <div className="Menu">
            <header id='header'>
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

                  <div ref={this.close} onClick={this.props.openMenu} className='burger_close'>
                     <div id='f_line_off'></div>
                     <div id='s_line_off'></div>
                  </div>
            </header>

            <main>
               <section id='nav_block'>
                  <dl>
                     <dt>ABOUT US</dt>
                     <dt className='nextdt'>TECHNOLOGY</dt>
                     <dt className='nextdt'>GAME</dt>
                     <dt className='nextdt'>ROAD MAP</dt>
                     <dt className='nextdt'>TEAM</dt>
                     <dt className='nextdt'>FAQ</dt>
                  </dl>
               </section>
               <section id='follow_blocks'>
                  <div>Follow us</div>
                  <div id="follow_block">
                     <div className='icons_menu'>
                        <img id="myFollow_dis" src='./img/discord.svg' alt=''/>
                     </div>
                     <div className='icons_menu icons_menus'>
                        <img id="myFollow_med" src='./img/medium.svg' alt=''/>
                     </div>
                     <div className='icons_menu icons_menus'>
                        <img id="myFollow_tel" src='./img/telegram.svg' alt=''/>
                     </div>
                     <div className='icons_menu icons_menus'>
                        <img id="myFollow_twit" src='./img/twitter.svg' alt=''/>
                     </div>
                  </div>
               </section>
            </main>
         </div>
      )
   }
}

export default Menu;
