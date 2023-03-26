import React from 'react';
import ReactDOM from 'react-dom/client';
import { StateProvider } from './StateProvider';
import './index.css';
import reducer, { initialState } from './reducer';
import { router } from './Router/Router';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);

