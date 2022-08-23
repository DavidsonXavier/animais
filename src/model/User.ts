import { collection, addDoc, getDocs, query, where} from 'firebase/firestore/lite';

import { db } from '../config/firebase';


const colecao = collection(db,"users")



interface iUsuario {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function getDocuments(email:string, password: string) {
  const search = query(colecao, where("email", "==", email), where("password", "==", password));

  const result = await getDocs(search);
  return result;
  
}

export async function addFirebase(usuario: iUsuario) {
    const {email, password} = usuario;
    const exists = await getDocuments(email, password);

    if(!exists.empty){      
      return false;
    }
    
    else {
      try {
        const docRef = await addDoc(colecao, {
          first: usuario.firstName,
          last: usuario.lastName,
          email: usuario.email,
          password: usuario.password
        });
        return true
      } catch (e) {
        console.error("Erro ao cadastrar Usuário");
      }
    }
  };