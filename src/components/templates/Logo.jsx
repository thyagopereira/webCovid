import './Logo.css'
import Logo from '../../img/logo.jpg'
import Virus from '../../img/virus.png'
import React from 'react'
import { assertIdentifier } from '@babel/types';

export default props => 
    <div className = 'logo'>
        <img className='inst' src = {Logo} alt='logotype'></img>     
        <img className='virus' src = {Virus} alt='covid'></img>
        Acompanhamento de Casos de Covid-19 no estado da Paraíba
        <h2>Painel Geral:</h2>
        <p>
            Covid 19 - Campina Grande 
        </p>
        <h3>Atualizado em: xx/xx/xxxx 18h 30</h3>
    </div>

    