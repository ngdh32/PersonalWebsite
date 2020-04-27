import React from 'react';
import '../Styles/Menu.css';
import {
    Link
  } from "react-router-dom";

function Menu() {
    return (
        <div class="menu">
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Intro">Intro</Link>
                    </li>
                    <li >
                        <Link to="/Skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/Experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    //   <nav>
    //       <a>Test 1</a>
    //       <a>Test 2</a>
    //   </nav>
    );
  }
  
  export default Menu;