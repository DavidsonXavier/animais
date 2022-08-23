import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Signin from "../components/login/Signin";
import Main from "../components/main/Main";


export default function Login() {
    return (
        <>
            <Header />
            <Main>
                <Signin />
            </Main>
            <Footer />
        </>
    )
}