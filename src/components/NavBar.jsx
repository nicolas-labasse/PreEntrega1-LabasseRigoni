

const NavBar = () => {
    return (
        <div className="collapse navbar-collapse justify-content-center" >
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="">Destacados</a>
            </li>
            <li className="nav-item">
                <a className="nav-link fw-bold" aria-current="page" href="">Hombre</a>
            </li>

            <li className="nav-item">
                <a className="nav-link fw-bold " aria-current="page" href="">Mujer</a>
            </li>
            
            <li className="nav-item">
                <a className="nav-link fw-bold" aria-current="page" href="#rollerTour">Niños</a>
            </li>
        </ul>
    </div>
);
}

export default NavBar;