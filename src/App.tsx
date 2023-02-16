import { Link, Route, Routes } from 'react-router-dom'
import './App.scss';
import ControlPanel from './components/ControlPanel';
import Layout from './components/Layout/Layout';
import SchedulerList from './components/SchedulerList/ScheduleList';

function App() {

  return (
    <Layout>
      <SchedulerList />
      <ControlPanel />
    </Layout>
  )
}

export default App
