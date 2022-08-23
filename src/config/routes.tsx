import { Routes as Rotas, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";

export default function Routes() {
    return (
        <Rotas>
            <Route path="/about" element={<About />}> </Route>
            <Route path="/signin" element={<Login />} ></Route>
            <Route path="/signup" element={<Signup />} ></Route>
            <Route path="/" element={<Home />} ></Route>
            <Route path="*" element={<NotFound />} ></Route>
        </Rotas>
    )
}