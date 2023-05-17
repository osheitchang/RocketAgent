const STRIPE_SECRET_KEY: string = process.env.STRIPE_SECRET_KEY || '';
const STRIPE_PUBLIC_KEY: string = process.env.STRIPE_PUBLIC_KEY || '';
const STRIPE_API_VERSION: string = process.env.STRIPE_API_VERSION || '';
const API_BASE: string = process.env.API_BASE || '';

const env = {
  STRIPE_API_VERSION,
  STRIPE_SECRET_KEY,
  STRIPE_PUBLIC_KEY,
  API_BASE,
}
export default env;

export enum API_METHODS {
  POST= 'POST',
}
