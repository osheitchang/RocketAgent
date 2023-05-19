import env from "@/pages/api/config";
import {NextApiRequest, NextApiResponse} from "next";
import Stripe from "stripe";
import {ProductModel} from "@/src/model/product.model";

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const stripe = new Stripe(env.STRIPE_SECRET_KEY, {apiVersion: '2022-11-15'});
    const productsResponse = await stripe.products.list({active: true});
    const pricesResponse = await stripe.prices.list({
      active: true,
    });
    let products: ProductModel[] = productsResponse.data.map(product => {
      const productPrice = pricesResponse.data.find(price => price.product === product.id);
      return {
        id: product.id,
        name: product.name,
        price: productPrice?.unit_amount ? productPrice.unit_amount / 100  : 0,
        currency: productPrice?.currency || 'usd',
        description: product.description,
        features: Object.values(product.metadata),
        priceId: productPrice?.id || '',
      };
    })
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
}

export default getProducts;
