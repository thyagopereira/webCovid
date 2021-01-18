import React from 'react'
import {Switch, Route} from 'react-router'

import Main from '../templates/Main'

export default props =>
    <Switch>
        <Route exact path='/' component={Main} />
    </Switch>

