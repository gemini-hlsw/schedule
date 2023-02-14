import { Link, Route, Routes } from 'react-router-dom'
import './App.scss';
import Navbar from './components/Navbar';
import SchedulerList from './components/SchedulerList/ScheduleList';

function App() {

  return (
    <div className="layout">
      <Navbar/>
      <SchedulerList />
    </div>
  )
}

export default App
