import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import '../styles/globals.scss';
import React from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from '../context/AuthContext';
const DynamicLogoutButton = dynamic(() =>
  import('../components').then((mod) => mod.LogoutButton)
);

const DynamicHeaderImage = dynamic(() =>
  import('../components').then((mod) => mod.HeaderImage)
);

const DynamicTransition = dynamic(() =>
  import('../components').then((mod) => mod.TransitionPage)
);

interface AppPropTypes {
  Component: React.ElementType;
  pageProps: [];
}

function MyApp({ Component, pageProps }: AppPropTypes) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Suspense fallback={`Loading...`}>
          <DynamicLogoutButton />
        </Suspense>
        <div className="main-container">
          <Suspense fallback={`Loading...`}>
            <DynamicHeaderImage />
          </Suspense>
          <div className="component-container">
            <Suspense fallback={`Loading...`}>
              <DynamicTransition>
                <Component {...pageProps} />
              </DynamicTransition>
            </Suspense>
          </div>
        </div>
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
