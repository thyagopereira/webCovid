import './CaseConfirmedCard.css'
import React, {Component} from 'react'
import axios from 'axios'

const url = ''

export default class BlueCard extends Component{
    state = {
        casos: 0
    }
    componentDidMount(){
        axios.get(url)
        .then(res => {
            const casos = res.data;
            this.setState({casos})
        })
    }
    render(){
        return(
        <div className='card'>
            <h4 className='card-title'>Casos Confirmados</h4>
            <p className='card-text text-secundary'> 
                {/* {this.state.casos} */}
                0.00
            </p>
        </div>)}
};