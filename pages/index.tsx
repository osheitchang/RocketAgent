import Image from 'next/image'
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
import {ProductModel} from "@/pages/api/products/product.model";

const inter = Inter({ subsets: ['latin'] })

const Home = ({products}: {products: ProductModel[]}) => {
  return (
    <>
      <Head>
        <title>Top Producer - Increasing results with quality leads.</title>
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
        <Form />
      </main>
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
