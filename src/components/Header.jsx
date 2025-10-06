import reactLogo from '../assets/react.svg'
import Search from './Search'
import '../styles/Header.css'
import { Link } from '@tanstack/react-router'

function Header() {
    return (
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
                <Search />
            </div>
        </header>
    )
}

export default Header