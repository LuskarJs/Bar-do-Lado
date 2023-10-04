import "./events.css";
import alert from "../Assests/alerta.png";

function EventPage() {

    return (
        <section className="EventPage">     
            <div className="event-content">
                <div className="title-event">
                     <h2>Eventos</h2>
                </div>
                <ul className="lista-event">
                    <li>
                        <span className="dia-nome">Sabado</span> dia: <span className="dia">1</span> de <span className="mes">Outubro</span>
                        <p className="nome-evento">Hallowen no Bar</p>
                        <div className="btn">
                            <button>Ver Evento</button>
                            <button>Criar Alerta
                                <img src={alert} alt="icone de alerta" />
                            </button>
                        </div>
                    </li>
                    <li>
                        <span className="dia-nome">Sabado</span> dia: <span className="dia">1</span> de <span className="mes">Outubro</span>
                        <p className="nome-evento">Hallowen no Bar</p>
                        <div className="btn">
                            <button>Ver Evento</button>
                            <button>Criar Alerta</button>
                        </div>
                    </li>
                    <li>
                        <span className="dia-nome">Sabado</span> dia: <span className="dia">1</span> de <span className="mes">Outubro</span>
                        <p className="nome-evento">Hallowen no Bar</p>
                        <div className="btn">
                            <button>Ver Evento</button>
                            <button>Criar Alerta</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="time-fun">
                <div className="title-funcionamento">
                    <h2>Horario de funcionamento :</h2>
                    <h3>Aberto Agora</h3>
                </div>
                <ul className="funcionamento-hora">
                    <li className="today">
                        <span>Terça-feira</span>
                        <p>(<span>17</span>hrs a <span>18</span>hrs)</p>
                    </li>
                    <li>
                        <span>Quarta-feira</span>
                        <p>(<span>17</span>hrs a <span>18</span>hrs)</p>
                    </li>
                    <li>
                        <span>Quinta-feira</span>
                        <p>(<span>17</span>hrs a <span>18</span>hrs)</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default  EventPage;