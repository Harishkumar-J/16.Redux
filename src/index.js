import React from 'react';
import ReactDOM from 'react-dom/client';
//1.1 provider to provide the store to the top level component
import { Provider } from 'react-redux';
//1.3 using the store
import store from './store/index.js';
import './index.css';
import App from './App';

//1.2 provider
//1.4 store prop
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
