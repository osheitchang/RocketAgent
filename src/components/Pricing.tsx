import React, {useState} from 'react';
import { CheckIcon } from '@heroicons/react/20/solid'
import {ProductModel} from "@/pages/api/products/product.model";
import dollarString from "@/src/utils/formatCurrency";
import axios from "axios";
import env from "@/pages/api/config";
axios.defaults.baseURL = env.API_BASE;

type PricingProps = {
  products: ProductModel[],
}

interface ProductsAuxModel extends ProductModel {
  loading: boolean;
}
const Pricing = (props: PricingProps) => {
  const {products} = props;
  const [productsAux, setProductsAux] = useState<ProductsAuxModel[]>(
    products.map(product => ({
      ...product,
      loading: false,
    })),
  );

  /**
   * Make a purchase
   * @param priceId
   */
  const makeAPurchase = async (priceId: string) => {
    try {
      setProductsAux(prevState => prevState.map(product => {
        if (product.priceId === priceId) {
          return {
            ...product,
            loading: true,
          };
        }
        return product;
      }));
      const {data} = await axios.post('/purchase', {
        priceId,
      });
      window.location = data.url;
    } catch (error) {
      console.warn(error);
    }
  }
  return (
    <>
      <div id='packages' className="isolate overflow-hidden bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Packages</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              No matter the need. <br className="hidden sm:inline lg:hidden" />
              We got you covered
            </p>
          </div>
          <div className="relative mt-6">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
              Whether you are a solo agent looking to increase sales, or an agency with multiple team members there is a solution for you.
            </p>
            <svg
              viewBox="0 0 1208 1024"
              className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
            >
              <ellipse cx={604} cy={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx={604} ry={512} />
              <defs>
                <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flow-root bg-white pb-24 sm:pb-32">
          <div className="-mt-80">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3">
                {productsAux.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                  >
                    <div>
                      <h3 id={product.id} className="text-base font-semibold leading-7 text-indigo-600">
                        {product.name}
                      </h3>
                      <div className="mt-4 flex items-baseline gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">{dollarString.format(product.price)}</span>
                        <span className="text-base font-semibold leading-7 text-gray-600">/month</span>
                      </div>
                      <p className="mt-6 text-base leading-7 text-gray-600">{product.description}</p>
                      <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => makeAPurchase(product.priceId)}
                      aria-describedby={product.id}
                      className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {product.loading ? (
                        <svg aria-hidden="true"
                             className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                        </svg>
                      ) : 'Get started today'
                      }
                    </button>
                  </div>
                ))}
                <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-3 lg:flex-row lg:items-center">
                  <div className="lg:min-w-0 lg:flex-1">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Discounted</h3>
                    <p className="mt-1 text-base leading-7 text-gray-600">
                      Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit omnis non voluptatem sunt eos nostrum.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Buy discounted license <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
