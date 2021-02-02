import React from 'react'
import {Switch, Route} from 'react-router'

import Main from '../templates/Main'
import About from '../templates/AboutUs'
import CgMap from '../templates/CgMap'

export default props =>
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/cgmapa' component= {CgMap}/>
        <Route path='/about' component={About}/>
    </Switch>

