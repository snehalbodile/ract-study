import { Link } from "react-router";
const Header = () =>{
    return (
        <div className="col-md-12">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">Bodile Food</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>
                    <li><a href="#">Card</a></li>
                    <li> <Link to="about">About Us</Link></li>
                    <li> <Link to="contact">Contact us</Link></li>
                    </ul>
                </div>
            </nav>
      </div>
    );
};

export default Header;