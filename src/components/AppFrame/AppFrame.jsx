import React from 'react'
import PropTypes from 'prop-types'
import { Grid, AppBar, Toolbar, IconButton, Link, Typography } from '@material-ui/core'
import { IconContext } from 'react-icons'
import { WiDayCloudy } from 'react-icons/wi'
import { Link as LinkRouter } from 'react-router-dom'


const AppFrame = ({children}) => {
    return (
        <Grid container item sm = {12} justify = 'center' >
            <AppBar position = 'static'>
                <Toolbar variant = 'dense'>
                    <IconButton color = 'inherit' aria-label = 'menu'  >
                        <Link
                            to = '/'
                            color = 'inherit'
                            aria-label = 'menu'
                            component = {LinkRouter}
                        >
                            <IconContext.Provider value={{size:'2em'}}>
                                <WiDayCloudy/>
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography color = 'inherit' variant = 'h6'>
                        ClimApp
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container item justify = 'center'
                xs = {12}
                sm = {11}
                md = {10}
                lg = {8}
            >
                {children}
            </Grid>
        </Grid >
    )
}

AppFrame.propTypes = {
    children: PropTypes.node,
}

export default AppFrame
