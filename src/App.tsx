import { Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import GlobalStateProvider from './components/GlobalState/GlobalState';

function App() {

  return (
    <GlobalStateProvider>
      <Layout>
        <Outlet />
      </Layout>
    </GlobalStateProvider>
  )
}

export default App
