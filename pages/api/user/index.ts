import {NextApiRequest, NextApiResponse} from "next";
import {API_METHODS} from "@/pages/api/config";
import firestore from "@/src/utils/firebase";
import 'firebase/firestore';
import {RegisterModel} from "@/src/model/register.model";

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== API_METHODS.POST) {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }
  const props = req.body as RegisterModel;
  try {
    const response = firestore.collection('users').add(props);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
}

export default registerUser;
