
  import { Roboto  } from 'next/font/google';
 
  // If loading a variable font, you don't need to specify the font weight
  const inter = Roboto({ 
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'] 
  });
   
  export default function MyApp({ Component, pageProps }) {
    return (
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    );
  }

