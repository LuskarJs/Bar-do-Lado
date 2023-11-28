import Relatar from "../Assests/problema.png";
import IconFaq from "../Assests/botao-circular-preenchido-de-faq.png";
import IconHistorico from "../Assests/historico-de-conversa.png";


function CentraldeAjuda() {

    return (
        <section className="section-ajuda">
            <div className="title-ajuda"> 
                <h3>Central de Ajuda</h3>
            </div>
            <ul>
                <li>
                    <figure>
                        <img src={Relatar} alt="Icone de Relatar" />
                    </figure>
                    Faq
                </li>
                <li>
                    <figure>
                        <img src={IconFaq} alt="Icone de Perguntas frequentes" />
                    </figure>
                    Relatar Problema
                </li>
                <li>
                    <figure>
                        <img src={IconHistorico} alt="icone de historico de mensagem" />
                    </figure>
                    Historicos de Mensagens
                </li>
            </ul>
        </section>
    )
}

export default CentraldeAjuda;