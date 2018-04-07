import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app.jsx';

const Main = () => {
  return(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );
}


ReactDom.render((<Main/>), document.getElementById('app'));