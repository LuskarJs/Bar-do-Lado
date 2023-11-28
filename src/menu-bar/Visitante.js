import {Link} from "react-router-dom";

function Visitante() {

    return (
        <section className="visitante-content">
                <Link to="/Login">
                    <button>Fazer Login</button>
                </Link>
                <Link to="/Criar-Conta">
                    <button>Criar Conta</button>
                </Link>
        </section>
    )
}

export default Visitante;