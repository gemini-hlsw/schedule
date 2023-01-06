import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider} from '@apollo/client';
import client from './lib/apollo-client'
import './index.scss'
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import ThemeProvider from './components/Theme/ThemeProvider';
import Home from './components/Home';
import Tonight from './components/Tonight';


import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


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
