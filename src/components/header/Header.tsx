import "./estilo.css"

import { Link, useNavigate } from "react-router-dom";

import Gravatar from 'react-gravatar';
import { useState, useEffect } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<string>('')

    useEffect(() => {
        setUser(localStorage.getItem('userFirebase') || '');
    }, [])

    function logout() {
        setUser("");
        localStorage.removeItem('userFirebase');
        navigate('/');
    }


    return (
        <header className="cabecalho">
            <nav>
                <ul>
                    <li>
                        <Link to="/" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <div id="loginGravatar">
                {
                    user ? <>
                        <span onClick={() => logout()}>Sair</span><Gravatar email={user} size={40} />

                    </> : <Link to="/signin">
                        Login
                    </Link>
                }

            </div>
        </header>
    )
}

export default Header;