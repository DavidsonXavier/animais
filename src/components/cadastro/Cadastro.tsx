import './estilo.css';

import { addFirebase } from '../../model/User';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface iUsuario {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export default function Cadastro() {
    let navigate = useNavigate();
    const [firstName, setNome] = useState<string>('');
    const [lastName, setLastname] = useState<string>('');

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const usuario: iUsuario = {
        firstName, lastName, password, email
    }

    async function cadastrar(usuario: iUsuario) {

        if (password && confirmPassword) {
            if (password === confirmPassword) {
                if (firstName && lastName && email) {
                    if ((await addFirebase(usuario))) {
                        setNome('');
                        setLastname('');
                        setEmail('');
                        setPassword('');
                        setConfirmPassword('');
                        navigate("/signin")
                    }
                    else {
                        setNome('');
                        setLastname('');
                        setEmail('');
                        setPassword('');
                        setConfirmPassword('');
                        alert("Usuário já cadastrado");
                    }

                }
                else {
                    console.log("Usuário errados");
                    return
                }

            }
            else {
                console.log("Senhas incompativeis")
            }
        }
        else {
            console.log("Senhas vazias")
        }


    }


    return (
        <>
            <div className="formulario">
                <h1 className='titulo'>Registro</h1>
                <div className="fullname">
                    <input type="text" className='inputName' name="nome" placeholder="Primeiro Nome" onChange={e => setNome(e.target.value)} value={firstName} />
                    <input type="text" name="lastname" placeholder="Ultimo Nome" onChange={e => setLastname(e.target.value)} value={lastName} />
                </div>
                <input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} />
                <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />

                {/* <button> Cadastrar-se</button> */}
                <button onClick={() => cadastrar(usuario)}> Cadastrar-se</button>
            </div>
        </>
    )
}