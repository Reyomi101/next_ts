import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/components/theme';

import { Provider } from "react-redux";
import store from '../src/redux/store'
// import {wrapper} from '../src/redux/store'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};


// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
    
//       <Component {...pageProps} />
     
//     </ThemeProvider>
//   );
// };


export default MyApp;
// export default wrapper.withRedux(MyApp);
