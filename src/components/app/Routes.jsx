import React from 'react'
import {Switch, Route} from 'react-router'

import Main from '../templates/Main'
import About from '../templates/AboutUs'

export default props =>
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/about' component={About}/>
    </Switch>

