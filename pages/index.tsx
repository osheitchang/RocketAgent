import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'


import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import MainFeature from '../src/components/MainFeature';
import Footer from '../src/components/Footer';
import SecondFeature from '../src/components/SecondFeature';
import Pricing from '../src/components/Pricing';
import Form from '../src/components/Form'
import Newsletter from '../src/components/Newsletter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        <Pricing />
        <Newsletter />
        <Form />
      </main>
        <Footer />
    </>
  )
}
