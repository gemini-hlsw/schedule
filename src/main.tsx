import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider} from '@apollo/client';
import client from './lib/apollo-client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
