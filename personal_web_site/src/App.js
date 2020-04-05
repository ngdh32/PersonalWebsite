import React from 'react';
import Menu from './Components/Menu'
import LeftMenu from './Components/LeftMenu'
import NavBar from './Components/NavBar'
import './App.css'

function App() {
    return (
        <div class="container">
            <LeftMenu>
            </LeftMenu>
            <div class="content">
                <NavBar></NavBar>
                <div class="page">
                    Hello World
                </div>
            </div>
        </div>

    );
}

export default App;