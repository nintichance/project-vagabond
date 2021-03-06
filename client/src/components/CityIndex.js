import React from 'react'
import { CityHeaderContainer, CityContainer } from './styled-components/Containers'
import { CityImage } from './styled-components/Images'

const CityIndex = (props) => {
    return (
        <div>
            <CityContainer>
            <CityHeaderContainer>
                <a href={`cities/${props.cityId}`}>{props.name}</a>
                </CityHeaderContainer>
            <CityImage src={props.picture} alt={props.name}/> 
            </CityContainer>
            
        </div>
    )
}

export default CityIndex