import "./events.css";

function ShowEvent(props) {
    const evento = props.evento;

    return (
        <section className="section-event">
            <div className="Card-event">
                <div className="img-event">
                    <figure>
                        <img src={evento.img} alt={evento.nomeEvento} />
                    </figure>
                </div>
                <div className="text-event">
                    <h2>{evento.nomeEvento}</h2>
                    <div className="sobre">
                        <p>{evento.sobre}</p>
                    </div>
                </div>
                <div className="option-event">
                    <div className="timers">
                        <h3>Inicio: 
                            <span>
                                {evento.horaInicio}
                            </span>
                        </h3>
                        <h4>Termino: 
                            <span>
                                {evento.horaTermino}
                            </span>
                        </h4>
                    </div>
                    <div className="btn">
                        <button>Marca Presença</button>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default ShowEvent;
