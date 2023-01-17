import { Logo } from "./Logo.jsx"
import { Heading } from "./Heading.jsx"
import { NavItems } from "./Navitems.jsx"

export const HeaderComponent = () => {
    return (
        <div className="header">
            <Logo />
            <Heading />
            <NavItems />
        </div>
    )
}