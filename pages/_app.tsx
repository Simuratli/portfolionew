import '../styles/globals.scss'
import React from 'react';
import { HeaderImage, Avatar } from '../components'

interface AppPropTypes {
  Component: React.ElementType,
  pageProps: []
}

function MyApp({ Component, pageProps }: AppPropTypes) {
  return <div className='main-container'>
    <HeaderImage />
    <div className="component-container">
      <Component {...pageProps} />
    </div>
  </div>
}

export default MyApp
