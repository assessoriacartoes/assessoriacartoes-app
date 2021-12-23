import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <App />
    </ConfigProvider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
