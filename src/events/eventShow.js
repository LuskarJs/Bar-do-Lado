import "./events.css";

function ShowEvent(props) {
    const evento = props.evento;

    return (
        <section className="section-event">
            <div className="Card-event">
                <div className="close">
                    <button>X</button>
                </div>
                <div className="img-event">
                    <figure>
                        <img src={evento.img} alt={evento.nomeEvento} />
                    </figure>
                </div>
                <div>
                    <div className="text-event">
                        <h2>{evento.nomeEvento}</h2>
                        <p>{evento.sobre}</p>
                    </div>
                    <div className="option-event">
                        <div className="timers">
                            <h3>Inicio: 
                                <span>
                                    {evento.horaInicio}
                                </span>
                            </h3>
                            <h3>Termino: 
                                <span>
                                    {evento.horaTermino}
                                </span>
                            </h3>
                        </div>
                        <div className="btn">
                            <button>Marca Presença</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShowEvent;
