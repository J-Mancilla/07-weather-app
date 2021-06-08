import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen'
import { IconContext } from 'react-icons'
import { FaRegFrown } from 'react-icons/fa'
import { Grid, Typography, Link } from '@material-ui/core'

const NotFoundPage = () => {
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
                                <FaRegFrown/>
                            </IconContext.Provider>
                        </Grid>
                        <Grid
                            item container
                            direction  = 'column'
                            justify    = 'center'
                            alignItems = 'center'
                        >
                            <Typography variant = 'h3' color = 'inherit'>
                                404 | Página no encontrada
                            </Typography>
                            <Link
                                component = {RouterLink}
                                to        = 'main'
                                color     = 'inherit'
                                aria-label = 'menu'
                            >
                                Ir a la principal
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </WelcomeScreen>
    )
}

export default NotFoundPage
