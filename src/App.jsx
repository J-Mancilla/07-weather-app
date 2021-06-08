import React from 'react'
import {BrowserRouter as Router, 
        Switch,
        Route
    } from 'react-router-dom'
import WelcomePage from './Pages/WelcomePage'
import MainPage from './Pages/MainPage'
import CityPage from './Pages/CityPage'
import NotFoundPage from './Pages/NotFoundPage'
import { Grid } from '@material-ui/core'

const App = () => {
    return (
        <Grid container justify='center' direction='row' >
                <Router>
                    <Switch>
                        <Route path = '/' exact>
                            <WelcomePage  />
                        </Route>
                        <Route path = '/main'>
                            <MainPage  />
                        </Route>
                        <Route path = '/city'>
                            <CityPage  />
                        </Route>
                        <Route>
                            <NotFoundPage  />
                        </Route>
                    </Switch>
                </Router>
        </Grid>
    )
}

export default App
