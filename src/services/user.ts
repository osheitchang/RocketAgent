import firestore from "@/src/utils/firebase";
import {RegisterModel} from "@/src/model/register.model";
import {addDoc, collection} from "@firebase/firestore";

export const registerUser = async (props: RegisterModel) => {
  try {
    return await addDoc(collection(firestore, 'users'), {
      props,
    });
  } catch (error) {
    throw error;
  }
}

