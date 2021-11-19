import '../styles/fonts.css'
import '../styles/global.css'
import '../styles/prism-onelight.css'
import '../styles/prism-highlight-lines.css'
import React from 'react'
import type { AppProps } from 'next/app'
import type { WithLayout } from '../types'

interface Props extends AppProps {
  Component: WithLayout
}

function App({ Component, pageProps }: Props): JSX.Element {
  const getLayout = Component.getLayout ?? (page => page)

  return <>{getLayout(<Component {...pageProps} />)}</>
}

export default App
