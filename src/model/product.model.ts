export interface ProductModel {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string | null;
  features: Array<string>;
  priceId: string;
}
