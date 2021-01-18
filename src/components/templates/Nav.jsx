import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <div className="menu-area">
        <nav className='menu'>
            <p className ='proj-name'>
                Project Name
            </p>
            <Link to= '/'>
                <i className='general'></i> Painel Geral
            </Link>
            <Link to= '/registers'>
                <i className='reg'></i> Registros
            </Link>
            <Link to='/pbmap'>
                <i className='pb-map'></i> Mapa da Paraíba
            </Link>
            <Link to='/cgmap'>
                <i className='cg-map'></i> Mapa de Campina Grande
            </Link>
            <Link to='/about'>
                <i className='members-us'></i> Sobre
            </Link>
        </nav>
    </div>