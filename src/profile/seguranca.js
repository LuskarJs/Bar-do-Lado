import Senha from "../Assests/cadeado.png";
import Mapa from "../Assests/mapas-e-bandeiras.png";
import Historia from "../Assests/historia.png";
import HistoricoAcesso from "../Assests/historico-de-transacoes.png";
import Excluir from "../Assests/deletar-usuario.png";

function Seguranca() {

    return (
        <section className="section-seguranca">
             <div className="dash-seguranca">
                <ul className="options-seguranca">
                    <li>
                        <figure>
                            <img src={Senha} alt="icone Senha" />
                        </figure>
                        <htmlforlabel>Alterar Senha</htmlforlabel>
                        <input type="checkbox" name="" />
                    </li>
                    <li>
                        <figure>
                            <img src={Historia} alt="icone historico" />
                        </figure>
                        <htmlforlabel>Historico de pedido</htmlforlabel>
                        <input type="checkbox" name="" />
                    </li>
                    <li>
                        <figure>
                            <img src={HistoricoAcesso} alt="icone historico de acesso" />
                        </figure>
                        <htmlforlabel>Histórico de Acesso</htmlforlabel>
                        <input type="checkbox" name="" />
                    </li>
                    <li>
                        <figure>
                            <img src={Excluir} alt="icone excluir" />
                        </figure>
                        <htmlforlabel>Excluir conta</htmlforlabel>
                        <input type="checkbox" name="" />
                    </li>
                </ul>
            </div>
           <div className="btns">
                <button>salvar  Alterações</button>
                <button>sair sem salvar</button>
           </div>
        </section>
    )
}

export default Seguranca;