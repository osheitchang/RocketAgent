import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios';
import env from "@/pages/api/config";

axios.defaults.baseURL = env.API_BASE;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
