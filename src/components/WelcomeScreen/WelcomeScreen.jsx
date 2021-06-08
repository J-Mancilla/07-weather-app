import React, {useRef, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({children}) => {
    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)

    console.log('Primera renderización: ', myRefDiv.current)

    useEffect(() => {
        console.log("Segunda renderización: ", myRefDiv.current)
        if( vanta === 0 ){
            setVanta(
                Clouds({
                    THREE,
                    el: myRefDiv.current
                })
            )
            console.log('Vanta es diferente de 0')
        }
        return () => {
            if (vanta){
                vanta.destroy()
                console.log('Recursos liberados')
            }
        }
    }, [vanta])

    return (
        <div className = 'full' ref = {myRefDiv}>
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
