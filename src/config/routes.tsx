import { Routes as Rotas, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import CadastroAnimal from "../pages/CadastroAnimal";

export default function Routes() {
    function middlewares() {
        const logado = localStorage.getItem('userFirebase')
        console.log(logado);

        if (logado != '') {
            return true;
        }
        return false;
    }
    return (
        <Rotas>
            <Route path="/about" element={<About />}> </Route>
            <Route path="/signin" element={<Login />} ></Route>
            <Route path="/signup" element={<Signup />} ></Route>
            {middlewares() ? <Route path="/cadastroanimal" element={<CadastroAnimal />} ></Route> : ''}

            <Route path="/" element={<Home />} ></Route>
            <Route path="*" element={<NotFound />} ></Route>
        </Rotas>
    )
}