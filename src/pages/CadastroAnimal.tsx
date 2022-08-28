import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import FormularioAnimal from "../components/cadastroAnimal/FormularioAnimal";

export default function CadastroAnimal() {
    return (
        <>
            <Header></Header>
            <Main>
                <FormularioAnimal></FormularioAnimal>
            </Main>
            <Footer></Footer>
        </>
    )

}