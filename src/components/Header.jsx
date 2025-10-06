import reactLogo from '../assets/react.svg'
import Search from './Search'
import '../styles/Header.css'
import { Link } from '@tanstack/react-router'
import { useState } from 'react';
import AddStockModal from './AddStockModal';

function Header() {
    const [open, setOpen] = useState(false);

    const handleAddStock = (val) => {
        if (val) {
            console.log(val)
            handleOpenClose(true);
        }
    }

    const handleOpenClose = (val) => {
        setOpen(val);
    }

    return (
        <>
            <header className='header'>
                <div className='logo'>
                    <img src={reactLogo} className='logo react' alt='React logo' />
                </div>
                <nav>
                    <ul className='navbar'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Search handleAddStock={handleAddStock} />
                </div>
            </header>
            <AddStockModal open={open} handleOpenClose={handleOpenClose} />
        </>
    )
}

export default Header