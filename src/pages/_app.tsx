import React from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store';

import "../assets/styles/main.scss"

const WrappedApp:React.FunctionComponent<AppProps> = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);
