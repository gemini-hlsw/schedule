
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { SelectButton } from 'primereact/selectbutton';
import './Navbar.scss';

export default function Navbar() {

    const [value1, setValue1] = useState('South');


    let sites: string[] = [
        "North",
        "South"
    ]

    return(
        <nav className="top-bar">
            <div className="left">
                <Link to="/">
                    <Button className="p-button-text main-title">
                        <span>S</span>
                        <span>C</span>
                        <span>H</span>
                        <span>E</span>
                        <span>D</span>
                        <span>U</span>
                        <span>L</span>
                        <span>E</span>
                    </Button>
                </Link>
                
                <div className= "site">
                    <SelectButton 
                        value={value1} 
                        options={sites} 
                        className=" p-button-text" 
                        onChange={(e) => setValue1(e.value)}/>
                </div>
                
                
            </div>
            <div className="center">
                
                <Link to="/tonight">
                    <span className="observation">Tonight</span>
                </Link>
            </div>
            <div className="right">
                <SplitButton
                label="LOGIN"
                icon="pi pi-user"
                className="p-button-text nav-btn"
                >
                </SplitButton>
            </div>
        </nav>
    );
}