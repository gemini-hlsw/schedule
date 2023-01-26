
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import MainTitle from './MainTitle';

import './Header.scss';

interface HeaderProps{
    title: string,
    children?: JSX.Element | JSX.Element[]
}

export default function Header({ title, children }:HeaderProps) {

    return(
        <div className="top-bar">
            <div className="left">
                <MainTitle title={title}/>
            </div>
            <div className='middle'>
                <>
                    {children}
                </>
            </div>
        </div>
    );
}