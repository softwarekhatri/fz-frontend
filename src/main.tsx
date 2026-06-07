import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        gutter={8}
        toastOptions={{
          duration: 3500,
          style: {
            background: '#fff',
            color: '#1A1A2E',
            border: '1px solid #FFE4EE',
            borderRadius: '12px',
            padding: '12px 16px',
            fontSize: '0.875rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '500',
            boxShadow: '0 8px 30px rgba(255, 107, 157, 0.15)',
          },
          success: {
            iconTheme: {
              primary: '#FF6B9D',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#F44336',
              secondary: '#fff',
            },
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
