import React, {useState, useEffect} from "react";
import { Inter } from 'next/font/google'
import Head from 'next/head'
import axios from "axios";

import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import MainFeature from '../src/components/MainFeature';
import Footer from '../src/components/Footer';
import SecondFeature from '../src/components/SecondFeature';
import Pricing from '../src/components/Pricing';
import Form from '../src/components/Form'
import Newsletter from '../src/components/Newsletter'
import {ProductModel} from "@/src/model/product.model";
import env from "@/pages/api/config";
import {AlertModel} from "@/src/model/alert.model";

axios.defaults.baseURL = env.API_BASE;

const inter = Inter({ subsets: ['latin'] })

const Home = ({products}: {products: ProductModel[]}) => {
  const [alert, setAlert] = useState<AlertModel>({
    show: false,
    title: '',
    description: '',
    type: 'success',
  });
  useEffect(() => {
    setTimeout(() => {
      setAlert({
        show: false,
        title: '',
        description: '',
        type: 'success',
      });
    }, 2000);
  }, [alert.show]);
  return (
    <>
      <Head>
        <title>Rocket Agent - Increasing results with quality leads.</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <MainFeature />
        <SecondFeature />
        <Pricing products={products} />
        <Newsletter />
        <Form onSuccessSubmit={setAlert} />
      </main>
      {alert.show && (
        <div className="alert-container">
          <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div className="flex">
              <div className="py-1">
                <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20">
                  <path
                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold">{alert.title}</p>
                <p className="text-sm">{alert.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Home;
export const getServerSideProps = async () => {
  try {
    const {data} = await axios.get<ProductModel[]>('/products');
    return {
      props: {
        products: data.reverse(),
      },
    };
  } catch {
    return {
      props: {
        products: [],
      },
    };
  }
}
