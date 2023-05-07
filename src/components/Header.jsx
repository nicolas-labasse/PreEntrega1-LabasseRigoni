import logo from '../components/images/craneo.png';
import NavBar from './NavBar';
import CartWidget from './CartWidget';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src={ logo } alt="" width="30" height="24" className="d-inline-block align-text-top me-3"></img>
            Nike Clone
        </a>
          <NavBar />
          <CartWidget />
        </div>
      </nav>
    );
}

export default Header;