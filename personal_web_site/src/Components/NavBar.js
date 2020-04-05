import React from 'react';
import Menu from './Menu'
import '../Styles/NavBar.css'

function NavBar() {
    function handleMenuButtonOnClick(){
        const MenuContainer = document.getElementsByClassName("MenuContainer")[0];
        if (MenuContainer.classList.contains("Show")){
            MenuContainer.classList.remove("Show");
        }else{
            MenuContainer.classList.add("Show");
        }
        
    }

    return (
        <div class="navbar">
            <button onClick={handleMenuButtonOnClick}>Menu</button>
            <div class="MenuContainer">
                <Menu></Menu>
            </div>
        </div>
    );
  }
  
  export default NavBar;