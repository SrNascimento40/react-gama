import Link from "../Link"

import "./styles.css";

function Header() {
    return (
    <header>
        <p>123 Bitcoin</p>
        <nav>
            <Link text="Home" redirect="/home"/>
            <Link text="Marketplace" redirect="/marketplace"/>
            <Link text="Contact" redirect="/contact"/>
        </nav>
    </header>
    );
}

export default Header;
