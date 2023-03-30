import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">Este e um menu</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to='/planos' className="nav-link">Planos</Link></li>
                    <li className="nav-item"><Link to='/sobre' className="nav-link">Sobre</Link></li>
                </ul>
            </header>
        </div>
    );
}

export default Header;