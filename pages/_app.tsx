import { AppProps } from 'next/app';
import 'tailwindcss/dist/base.min.css';

const MyApp = ({Component, pageProps}: AppProps) => <Component {...pageProps}/>

export default MyApp;