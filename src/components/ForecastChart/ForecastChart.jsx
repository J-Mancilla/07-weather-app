import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer} from 'recharts';

const ForecastChart = ({data}) => {
    return (
        <ResponsiveContainer height={250} width={"100%"}>
            <LineChart width={700} height={250} margin={{top:20, bottom:20, left:50, right:50}} data={data}>
                <CartesianGrid stroke="#afafaf"/>
                <XAxis dataKey="dayHour" stroke="#afafaf"/>
                {/* <YAxis stroke="#afafaf"/> */}
                <Legend />
                <Tooltip />
                <Line type="monotone" dataKey="maxTem" stroke="#ff2200" />
                <Line type="monotone" dataKey="minTem" stroke="#006fff" />
            </LineChart>
        </ResponsiveContainer>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            maxTem: PropTypes.number.isRequired,
            minTem: PropTypes.number.isRequired,
        })
    ).isRequired
}

export default ForecastChart
