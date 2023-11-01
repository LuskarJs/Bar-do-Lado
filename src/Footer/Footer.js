import "./footer.css";

function Footer() {

    return (
        <footer>
            <section className="content-footer">
                <nav className="content-midias">
                    <div className="logo">
                        <figure>
                            <img src="" alt="logo" />
                        </figure>
                    </div>
                    <ul className="midias-sociais">
                        <li>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <div className="text-footer">
                        <h3>Informações para Contato</h3>
                    </div>
                    <ul>
                        <li>email@gmail.com</li>
                        <li>(21) 12345-6789</li>
                        <li>rua endereço tal,cep 2454</li>
                    </ul>
                </nav>
                <nav>
                    <div className="text-footer">
                        <h3>Menu</h3>
                    </div>
                    <ul>
                        <li>Inicio</li>
                        <li>Eventos</li>
                        <li>Galeria</li>
                        <li>Cardapio</li>
                        <li>Sobre nós</li>
                    </ul>
                </nav>
                
                <nav>
                    <div className="text-footer">
                        <h3>Central de Ajuda</h3>
                    </div>
                    <ul>
                        <li>Suporte ao Cliente</li>
                        <li>Reporta Error</li>
                    </ul>
                </nav>
                <nav>
                    <div className="text-footer">
                        <h3>Termos de Uso e Politicas</h3>
                    </div>
                    <ul>
                        <li>Politicas de Privacidade</li>
                        <li>Termo de uso e Politica de Cookie</li>
                    </ul>
                </nav>
            </section>
           <p>Todos Direitos Reservados ao Bar Do Lado</p>
        </footer>
    )
}

export default Footer;