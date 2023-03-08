import { ReactNode } from "react";
import Header from './Header/Header';
import Navbar from "./Navbar/Navbar";
import './Layout.scss'


export default function Layout( { children }: { children: ReactNode }) {
  return(
    <div className="layout">
      <Header title="schedule" />
      <Navbar />
      <main className="main"> 
        {children}
      </main>
    </div>
  )
};