import '../styles/globals.css'
import { createContext, useState } from 'react'
import { Head } from 'next/head'

const Context = createContext()

function MyApp({ Component, pageProps }) {
  const [ContextValue, setContextValue] = useState({
    icons:['1.0.0']
  })
  return <Context.Provider value={ContextValue}>
      <Component {...pageProps} />
  </Context.Provider> 
  
}

export { Context }

export default MyApp
