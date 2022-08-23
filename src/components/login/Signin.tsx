import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import './estilo.css'

import { getDocuments } from '../../model/User'

export default function Signin() {

    let navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [existUser, setExistUser] = useState<boolean>(false);

    async function existsUser(email: string, password: string) {
        const resultado = await getDocuments(email, password);

        if (resultado.empty) {
            // console.log("Dados não existentes");
            setExistUser(true);
            return;
        }
        setExistUser(false);
        localStorage.setItem('userFirebase', JSON.stringify(email));

        navigate("/");

    }

    return (
        <div id="signin">
            <h1>Login</h1>
            <label htmlFor="nome"> Usuario </label><input type="text" name="nome" placeholder='contato@example.com' onChange={e => setEmail(e.target.value)} value={email} />
            <label htmlFor="password"> Senha </label> <input type="password" name="password" placeholder='123456' onChange={e => setPassword(e.target.value)} value={password} />
            {existUser ? <span id="incorreto">Email ou Senha incorreta</span> : null}
            <button onClick={() => {
                existsUser(email, password)
            }}><span>Logar</span></button>

            <div id='signup'>
                <span> Ainda não tem conta?</span>
                <Link to='/signup'><button>Cadastra-se</button></Link>
            </div>
        </div>
    )
}