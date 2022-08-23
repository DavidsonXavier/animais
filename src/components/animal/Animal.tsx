import './estilo.css'

export default function Animal() {
    const urlAnimal = `https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg`
    return (
        <div className="animalDesaparecido">
            {/* Dados a ser consumido do backend */}
            <img src={urlAnimal} alt="Imagem do cachorro Desaparecido" />
            <span>Nome Animal</span>
            <span>Data Desaparecimento:</span>
            <span>Dono</span>
        </div>
    )
}