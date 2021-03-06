import './App.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import Logo from '../templates/Logo'
import Nav from '../templates/Nav'
import Main from '../templates/Main'
import Routes from './Routes'

export default props =>
    <HashRouter>
        <div className='app'>
            <Nav />
            <Logo />
            <Routes />
        </div>
    </HashRouter>
 