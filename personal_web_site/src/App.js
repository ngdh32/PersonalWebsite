import React from 'react';
import Menu from './Components/Menu'
import LeftMenu from './Components/LeftMenu'
import NavBar from './Components/NavBar'
import './App.css'
import Contact from './Pages/Contact'
import Intro from './Pages/Intro'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'
import Home from './Pages/Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div class="container">
            <Router>
                <LeftMenu>
                </LeftMenu>
                <div class="content">
                    <NavBar></NavBar>
                    <div class="page">

                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/Intro">
                                <Intro />
                            </Route>
                            <Route path="/Skills">
                                <Skills />
                            </Route>
                            <Route path="/Experience">
                                <Experience />
                            </Route>
                            <Route path="/Contact">
                                <Contact />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>

    );
}

export default App;