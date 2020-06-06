import React, { useState } from 'react'
import Input from '../../components/Input'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <form>
                <p>Login</p>
                <Input setValue={setUsername} label="Username:" type="text" />
                <Input setValue={setPassword} label="Senha:" type="password" />
                <button type="submit">Confirmar</button>
            </form>

            <p className="alert">Algo está errado, <br />
                verifique o seu Apelido ou Senha</p>
        </>
    )
}

export default Login
