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
                    <div className='border'>
                        <i className='button'></i> Painel Geral
                    </div>
                </Link>
                <Link to= '/registers'>
                    <div className='border'>
                        <i className='button'></i> Registros
                    </div>
                </Link>
                <Link to='/pbmap'>
                    <div className='border'>
                        <i className='button'></i> Mapa da Paraíba
                    </div>
                </Link>
                <Link to='/cgmap'>
                    <div className='border'>
                        <i className='button'></i> Mapa de Campina Grande
                    </div>
                </Link>
                <Link to='/about'>
                    <div className='border'>
                        <i className='button'></i> Sobre
                    </div>
                </Link>
        </nav>
    </div>