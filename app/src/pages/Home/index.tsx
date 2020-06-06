import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import Input from '../../components/Input'

function Home() {
    const [url, setUrl] = useState('');

    return (
        <>
            <Input setValue={setUrl} label="Digite a URL:" type="text" placeholder="exemplo.com.br"/>
            <div className="text-info">
                <p>Faça <Link to="/login">Login</Link> ou <Link to="/registrar">Cadastre-se</Link></p>
                <p>para ter seus links encurtados salvos</p>
            </div>
        </>
    )
}

export default Home
