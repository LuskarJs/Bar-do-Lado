import menu from "../Assests/menu.png";
import foto from "../Assests/chris-yang-GhaXo4UPgEc-unsplash.jpg";
import { useState } from "react";
import {Link} from "react-router-dom";
import "./menu.css";
import CartCompra from "../Cart/cart";

function MenuBar() {
    const [CartActive,SetCartActive] = useState(false);

    const ToggleCart = () => {
        SetCartActive(!CartActive);
    }

    const [Modal,SetModal] = useState(false);

    const toggleModal = () => {
        SetModal(!Modal);
    };

    const NavBar = () => {

        return (
            <>
             <div className="Menu-icon">
                    <figure >
                        <img src={menu} alt="Icone de Menu" />
                    </figure>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                            <p>Inicio</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Cardapio">
                            <p>Cardapio</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Galeria">
                            <p>Galeria</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Eventos">
                            <p>Eventos</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/FAQ">
                            <p>FAQ</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Equipe">
                            <p>Equipe</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/NewsLetters">
                            <p>NewsLetters</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }    
    
    const ProfileAccount = () => {

    return (
        <div className="content-profile">
            <div className="profile-account">
                <div className="img-profile">
                    <figure>
                        <img src={foto} alt="foto de perfil" />
                    </figure>
                </div>
                <div className="text-profile">
                    <h3>Carlos de Antonio</h3>
                    <p>Administrador</p>
                </div>
            </div>
            <ul>
                <li onClick={ToggleCart}>
                    Meu Carrinho
                </li>
                <li>configurações</li>
                <li>Sair da Conta</li>
            </ul>
        </div>
    )
}   

    return (
        <header className={Modal ? "show" : ""} onClick={toggleModal}>
            {CartActive ? <CartCompra/> : ''}
            <NavBar />
            <ProfileAccount />
        </header>
    )
}



export default MenuBar;