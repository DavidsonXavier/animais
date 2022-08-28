import { collection, addDoc} from 'firebase/firestore/lite';
import { ref, uploadBytes } from 'firebase/storage';

import { db, storage } from '../config/firebase';
const colecao = collection(db, 'animal')




interface iAnimal {
    nome: string;
    dataDesaparecimento: string;
    dono: string;
    encontrado: boolean;
}

class Animal implements iAnimal {
    constructor(public nome:string='',public tipoAnimal='', public dataDesaparecimento:string = '', public dono:string='', public encontrado: boolean=false){}

    async cadastraAnimal (file: any) {

        try {
            await addDoc(colecao, {
              nome: this.nome,
              tipoAnimal: this.tipoAnimal,
              dataDesaparecimento: this.dataDesaparecimento,
              dono: this.dono,
              encontrado: this.encontrado
            });

            await this.cadastraImagem(file);
            
            return true
          } catch (e) {
            console.error("Erro ao cadastrar Animal");
          }

          // 'file' comes from the Blob or File API
          
    }

    async cadastraImagem(file: any) {
      const storageRef = ref(storage, `${file.name}`);
      console.log("Here");
      // console.log(storage);
        uploadBytes(storageRef, file).then((snapshot) => {
          console.log('Uploaded a blob or file!');
      }).catch(e => console.log(e));

    }
        
        

}

export default Animal;