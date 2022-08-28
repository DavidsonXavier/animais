import { useState } from "react";
import animalModel from "../../model/animalModel";

import './estilo.css'



export default function FormularioAnimal() {



    const [nomeAnimal, setNomeAnimal] = useState<string>('');
    const [tipoAnimal, setTipoAnimal] = useState<string>('');
    const [dataDesaparecimento, setDataDesaparecimento] = useState<string>();
    const [dono, setDono] = useState<string>();
    const [file, setFile] = useState(null);

    function esperaFile(file: any) {
        if (file != null) {
            setFile(file[0])
        }

    }

    async function cadastraAnimal() {
        const animal = new animalModel(nomeAnimal, tipoAnimal, dataDesaparecimento, dono);

        animal.cadastraAnimal(file);

    }



    return (
        <>
            <div id="formulario">
                <input type="text" name="nome" value={nomeAnimal} placeholder='Nome do animal' onChange={e => setNomeAnimal(e.target.value)} />
                <input type="text" name="tipo" value={tipoAnimal} placeholder='Tipo do animal' onChange={e => setTipoAnimal(e.target.value)} />
                <input type="date" name="data" value={dataDesaparecimento} onChange={e => setDataDesaparecimento(e.target.value)} />
                <input type="text" name="dono" value={dono} placeholder='idDono' onChange={e => setDono(e.target.value)} />

                <input type="file" onChange={e => esperaFile(e.target.files || null)} />

                <button onClick={e => cadastraAnimal()}> Cadastrar</button>

            </div>
        </>
    )
}