import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login, Register } from '../pages'

const NonLoggedInComponents = () => {
    return (
        <>
            <Switch>
                <Route exact path='/register' component={Register} />
                <Route path='/' component={Login} />
            </Switch>
        </>
    )
}

export default NonLoggedInComponents
