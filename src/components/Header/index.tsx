import btc from "../../assets/icons/btc.jpg"
import Link from "../Link"
import { useParams } from "react-router-dom";

import "./styles.css";

function Header() {
    const params = useParams();
    return (
    <header>
        <img src={btc} alt="logo 123 Bitcoin"/>
        <p>123 Bitcoin</p>
        <nav>
            <Link text="Home" redirect="/home"/>
            <Link text="Marketplace" redirect="/marketplace"/>
            <Link text="Contact" redirect="/contact"/>
        </nav>
        <h2>olá {params.nome}</h2>
    </header>
    );
}

export default Header;
