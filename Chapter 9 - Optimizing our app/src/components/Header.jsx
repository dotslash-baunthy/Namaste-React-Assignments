import Logo from "./Logo"
import Heading from "./Heading"
import NavItems from "./Navitems"
import Login from "./Login"

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Heading />
            <NavItems />
            <Login />
        </div>
    )
}

export default Header;