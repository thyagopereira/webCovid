import './CaseRecoverdCard.css'
import React from 'react'

const GreenCard = props => {
    return(
        <div className='card-green'>
            <h4 className='card-title'>Casos Recuperados</h4>
            <p className='card-text text-secundary'> 
                {props.casos}
            </p>
        </div>
    );

}

export default GreenCard;