import './Main.css'
import  React from 'react'
import BlueCard from './CaseConfirmedCard'
import GreenCard from './CaseRecoverdCard'
import BlueWidget from './BlueWidget'
import GreenWidget from './GreenWidget'

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

        <div className='widgets'>
            <div className='blueWidget'>
                <BlueWidget/>
            </div>
            <div className='greenWidget'>
                <GreenWidget/>
            </div>
        </div>

        <div className='heatmap'>
        </div>
        
    </div>