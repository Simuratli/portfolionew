import '../styles/globals.scss'
import React from 'react';
import { HeaderImage, Avatar } from '../components';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

interface AppPropTypes {
  Component: React.ElementType,
  pageProps: []
}

function MyApp({ Component, pageProps }: AppPropTypes) {
  return <Provider store={store}>
    <div className='main-container'>
      <HeaderImage />
      <div className="component-container">
        <Component {...pageProps} />
      </div>
    </div>
  </Provider>
}

export default MyApp
