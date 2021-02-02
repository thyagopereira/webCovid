import './CaseRecoverdCard.css'
import React, {Component} from 'react'
import axios from 'axios';

const url = ''

export default class GreenCard extends Component{
    state ={
        casos: 0
    }
    componentDidMount(){
        axios.get(url)
        .then(res => {
            const casos = res.data
            this.setState( {casos})
        })
    }

    render(){
        return(
            <div className='card-green'>
                <h4 className='card-title'>Casos Recuperados</h4>
                <p className='card-text text-secundary'> 
                    {/* 0.00  {this.state.casos}  */}
                    0.00
                </p>
            </div>
        )
    }
}