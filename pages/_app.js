// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import { useEffect } from 'react';
import { AppWrapper, useStore } from '../lib/context';

function MyComponent({children}) {
  const store = useStore()
  // detect screen
  useEffect(
    () => {
      const onResize = () => {
        store.updateScreenSize(window.innerWidth)
      }
      window.addEventListener('resize', onResize)
      onResize()

      return () => {
        window.removeEventListener('resize', onResize)
      }
    }, []
  )

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  let sharedState = {}

  return (
    <AppWrapper>
      <MyComponent>
        <Component {...pageProps} />
      </MyComponent>
    </AppWrapper>
  )
}

export default MyApp
