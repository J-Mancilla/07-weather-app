import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import { Grid, Typography, Link } from '@material-ui/core'


const WelcomePage = () => {
    return (
        <WelcomeScreen>
            <Grid
                container
                direction = 'column'
                justify = 'center'
                className = 'full'
            >
                <div className = 'highlight'>
                    <Grid
                        item container xs={12}
                        justify    = 'center'
                        alignItems = 'center'
                    >
                        <Grid item>
                            <IconContext.Provider value = {{size: '8em'}}>
                                <WiDaySunny/>
                            </IconContext.Provider>
                        </Grid>
                        <Grid
                            item container
                            direction  = 'column'
                            justify    = 'center'
                            alignItems = 'center'
                        >
                            <Typography variant = 'h3' color = 'inherit'>
                                Clim - App
                            </Typography>
                            <Link
                                component = {RouterLink}
                                to        = 'main'
                                color     = 'inherit'
                                aria-label = 'menu'
                            >
                                ACCEDER
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </WelcomeScreen>
    )
}

export default WelcomePage
