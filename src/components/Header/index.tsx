import btc from "../../assets/icons/btc.jpg"
import Link from "../Link"

import "./styles.css";

function Header() {
    return (
    <header>
        <img src={btc} alt="logo 123 Bitcoin"/>
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
