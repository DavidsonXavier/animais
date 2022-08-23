import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import Cadastro from "../components/cadastro/Cadastro";


export default function Signup() {
    return (
        <>
            <Header />
            <Main >
                <Cadastro />
            </Main>
            <Footer />
        </>
    )
}