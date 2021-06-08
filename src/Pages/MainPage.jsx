import React from 'react'
import {useHistory} from 'react-router-dom'
import CityList from '../components/CityList/CityList'
import AppFrame from '../components/AppFrame/AppFrame'
import { Paper } from '@material-ui/core'


const cities = [
    {city: 'Ciudad Juárez', country: 'México'},
    {city: 'Montevideo', country: 'Uruguay'},
    {city: 'París', country: 'Francia'},
    {city: 'New York', country: 'EEUU'},
    {city: 'Tokio', country: 'Japón'},
    {city: 'Dubai', country: 'Emiratos Árabes'}
]

const MainPage = () => {
    const history = useHistory()
    const onClickHandler = () => {
        history.push('/city')
    }
    return (
        <AppFrame>
            <Paper elevation = {3} >
                <CityList cities={cities} onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
