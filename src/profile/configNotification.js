import WhatsappIcon from "../Assests/whatsapp.png";
import EmailIcon from "../Assests/o-email.png";
import CelularIcon from "../Assests/celular.png";

function ConfigNotification() {

    return (
        <div className="settings-options-notification">
            <ul className="options-principal">
                <li> <input type="range" max="1" min="0"/>
                    <p>
                        receber notificações de  pedido finalizado
                    </p>
                </li>
                <li> <input type="range" max="1" min="0"/>
                    <p>receber notificações de promoções</p>
                </li>
                <li> <input type="range" max="1" min="0"/>
                    <p>receber notificações de eventos</p>    
                </li>
            </ul>
            <div className="dash-notification">
                <div className="title-notification">
                    <h3>Receber notificações por:</h3>
                </div>
                <ul className="options-notification">
                    <li>
                        <figure>
                            <img src={CelularIcon} alt="icone celular" />
                        </figure>
                        <htmlforlabel htmlfor="celular">celular</htmlforlabel>
                        <input type="checkbox" id="celular" />
                    </li>
                    <li>
                        <figure>
                            <img src={EmailIcon} alt="icone email" />
                        </figure>
                        <htmlforlabel name="email">email</htmlforlabel>
                        <input type="checkbox" name="" />
                    </li>
                    <li>
                        <figure>
                            <img src={WhatsappIcon} alt="icone whatsapp" />
                        </figure>
                        <htmlforlabel name="whatsapp">Whatsapp</htmlforlabel>
                        <input type="checkbox" name="" />
                    </li>
                </ul>
            </div>
           <div className="btns">
                <button>salvar  Alterações</button>
                <button>sair sem salvar</button>
           </div>
        </div>
    )
}

export default ConfigNotification;