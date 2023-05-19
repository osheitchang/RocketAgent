import app from '@/src/utils/firebase/initialize';
import {getFirestore} from "firebase/firestore";

const firestore = getFirestore(app);
export default firestore;
