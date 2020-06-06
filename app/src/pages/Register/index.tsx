import React, { useState } from 'react'
import Input from '../../components/Input'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <form>
                <p>Cadastre-se</p>
                <Input setValue={setUsername} label="Username:" type="text" />
                <Input setValue={setPassword} label="Senha:" type="password" />
                <button type="submit">Confirmar</button>
            </form>

            <p className="alert">Já existe um usuário com esse apelido</p>
        </>
    )
}

export default Register
