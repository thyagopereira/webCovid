import './Main.css'
import  React from 'react'
import BlueCard from './CaseConfirmedCard'
import GreenCard from './CaseRecoverdCard'
import BlueWidget from './BlueWidget'

export default props =>
    <div className='full-main'>
        <div className='main'> 
            <div className='greenCard'>
                <GreenCard casos= '18.996' />
            </div>

            <div className='blueCard'>
                <BlueCard casos= '12.632' />    
            </div>
        </div>

        <div className='blue-widget'>
            <BlueWidget/>
        </div>
    </div>