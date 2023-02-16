import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import { ApolloProvider} from '@apollo/client';
import { client } from './apollo-client'

import App from './App'
import ThemeProvider from './theme/ThemeProvider';
import Home from './components/Home';
import Tonight from './components/Tonight';


import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App/>  
          <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/tonight" element= {<Tonight/>} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
