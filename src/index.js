import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './store/auth';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider >
  </React.Fragment>
);

serviceWorker.unregister();
