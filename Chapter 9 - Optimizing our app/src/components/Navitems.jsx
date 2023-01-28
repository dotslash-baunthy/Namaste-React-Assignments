import { Link } from "react-router-dom";

const NavItems = () => {
    return (
        <div className="navitems">
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link to={"/cart"}>Cart</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavItems;