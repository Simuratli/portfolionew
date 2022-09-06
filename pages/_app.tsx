import '../styles/globals.scss';
import React from 'react';
import { HeaderImage, LogoutButton } from '../components';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from '../context/AuthContext';

interface AppPropTypes {
  Component: React.ElementType;
  pageProps: [];
}

function MyApp({ Component, pageProps }: AppPropTypes) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <LogoutButton />
        <div className="main-container">
          <HeaderImage />
          <div className="component-container">
            <Component {...pageProps} />
          </div>
        </div>
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
