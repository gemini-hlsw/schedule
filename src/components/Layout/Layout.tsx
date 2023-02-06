import { ReactNode } from "react";

import Header from '../Header/Header'
import './Layout.scss'

export default function Layout( { children }: {children: ReactNode}) {
    return(
        <div className="">
            <Header title="schedule" />
            <main> 
                <div className="main-container">
                    {children}
                </div>
            </main>
        </div>
    )
};