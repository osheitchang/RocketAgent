import env, {API_METHODS} from "@/pages/api/config";
import Stripe from "stripe";
import {NextApiRequest, NextApiResponse} from "next";

const makeAPurchase = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== API_METHODS.POST) {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }
  try {
    const {priceId} = req.body;
    const stripe = new Stripe(env.STRIPE_SECRET_KEY, {apiVersion: '2022-11-15'});
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
      automatic_tax: {enabled: true},
    });
    res.status(200).json(session);
  } catch (error) {
    res.status(405).json(error);
  }
};

export default makeAPurchase;
