
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { SelectButton } from 'primereact/selectbutton';
import './Navbar.scss';

export default function Navbar() {

    let sites: string[] = [
        "GS",
        "GN"
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
                    <SelectButton options={sites} className=" p-button-text" />
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