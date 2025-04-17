import { Link } from "react-router";
import useOnlineStatus from "../utilis/useOnlineStatus";
const Header = () =>{
     const onlineStatus = useOnlineStatus();
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
                    <li>
                        <span className="navbar-brand"> Online status: {onlineStatus ? "✅ ": "🔴"}</span>
                        </li>
                    </ul>
                </div>
            </nav>
      </div>
    );
};

export default Header;