import '../styles/globals.scss';
import React from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from '../context/AuthContext';
import { TransitionPage, LogoutButton, HeaderImage } from '../components';

interface AppPropTypes {
  Component: React.ElementType;
  pageProps: [];
}

function MyApp({ Component, pageProps }: AppPropTypes) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <LogoutButton />
        <div className='main-container'>
          <HeaderImage />
          <div className='component-container'>
            <TransitionPage>
              <Component {...pageProps} />
            </TransitionPage>
          </div>
        </div>
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
