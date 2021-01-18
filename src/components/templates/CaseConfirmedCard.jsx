import './CaseConfirmedCard.css'
import React from 'react'

const BlueCard = props => {
    return(
        <div className='card'>
            <h4 className='card-title'>Casos Confirmados</h4>
            <p className='card-text text-secundary'> 
                {props.casos}
            </p>
        </div>
    )

}

export default BlueCard;