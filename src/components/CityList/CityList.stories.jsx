import React from 'react';
import CityList from './CityList'
import {action} from '@storybook/addon-actions'

export default{
    title: 'CityList',
    component: CityList
}

const cities = [
    {city: 'Ciudad Juárez', country: 'México'},
    {city: 'Montevideo', country: 'Uruguay'},
    {city: 'París', country: 'Francia'},
    {city: 'New York', country: 'EEUU'},
    {city: 'Tokio', country: 'Japón'},
    {city: 'Dubai', country: 'Emiratos Árabes'}
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en City")}/>