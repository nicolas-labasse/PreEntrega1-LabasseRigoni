import twitter from '../components/images/gorjeo.png';
import facebook from '../components/images/facebook.png';
import instagram from '../components/images/instagram.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white fixed-bottom">
        <div className="container p-4">
            <section className="mb-4">
            <a className="m-1" href="#!" role="button">
                <img src={facebook} width={40} height={40} alt="" />
            </a>

            <a href="#!" className='m-1' role="button">
                <img src={twitter} width={40} height={40} alt="" />
            </a>


            <a className="m-1" href="#!" role="button">
            <img src={instagram} width={40} height={40} alt="" />
            </a>

            </section>
            <section className="">
            <form action="">
                <div className="row d-flex justify-content-center">
                <div className="col-auto">
                    <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                    </p>
                </div>
                <div className="col-md-5 col-12">
                    <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" className="form-control" />
                    <label className="form-label" for="form5Example21">Email address</label>
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                    </button>
                </div>
                </div>
            </form>
            </section>
            <section className="mb-4">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                eum harum corrupti dicta, aliquam sequi voluptate quas.
            </p>
            </section>
            <section className="">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                    <li>
                    <a href="#!" className="text-white">Destacados</a>
                    </li>
                    <li>
                    <a href="#!" className="text-white">Hombre</a>
                    </li>
                    <li>
                    <a href="#!" className="text-white">Mujer</a>
                    </li>
                    <li>
                    <a href="#!" className="text-white">Niños</a>
                    </li>
                </ul>
                </div>
            </div>
            </section>
        </div>
        </footer>
    );
}

export default Footer;