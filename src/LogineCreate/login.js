import {Link} from "react-router-dom";

function Login() {

    return (
        <section>
            <div className="content-Create">
                <form>
                    <div className="text-title">
                        <h3>Seja Bem-vindo</h3>
                    </div>
                    <div className="setp1">
                        <div className="input-content">
                            <label htmlFor="Email">email</label>
                            <input type="email" placeholder="email@gmail.com" name="Email"/>
                            <small>Preencha o campo</small>
                        </div>
                        <div className="input-content">
                            <label htmlFor="Sobrenome">Senha</label>
                            <input type="password" placeholder="senha" name="password"/>
                            <small>Preencha o campo</small>
                        </div>
                    </div>
                   
                    <div className="options">
                        <div className="remember">
                            <input type="checkbox" name="remember" />
                            <label>Salvar Login</label>
                        </div>
                        <p>ou</p>
                        <Link to="/Criar-Conta">
                            <button>Criar Conta</button>
                        </Link>    
                    </div>
                    <div className="btn-login">
                    <Link to="/Login">
                        <button>Fazer Login</button>
                    </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;