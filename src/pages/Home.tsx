import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import Animal from "../components/animal/Animal";


export default function Home() {
    return (
        <>
            <Header />
            <Main>
                <Animal />
                <Animal />
            </Main>
            <Footer />
        </>
    )

}