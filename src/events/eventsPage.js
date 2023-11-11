import React, { useState } from "react";
import alert from "../Assests/alerta.png";
import "./events.css";
import ShowEvent from "./eventShow";
import { diasDaSemana, eventos } from "./DataEvent";

function EventPage() {
  const hoje = new Date().getDay();
  const horaAtual = new Date().getHours();
  const minutosAtual = new Date().getMinutes();
  const DiaAtual = diasDaSemana[hoje];

  const [mostrarOutrosDias, setMostrarOutrosDias] = useState(false);
  const [eventoSelecionado, setEventoSelecionado] = useState(null);

  const horariosExibidos = mostrarOutrosDias
    ? diasDaSemana
    : [diasDaSemana[hoje], diasDaSemana[6]];

  const AbertoAgora =
    horariosExibidos[0] &&
    horaAtual >= (horariosExibidos[0].abertura || 0) &&
    horaAtual < (horariosExibidos[0].fechamento || 0);

  const handleEventoClick = (evento) => {
    setEventoSelecionado(evento);
  };

  return (
    <section className="EventPage" id="eventos">
      <div className="event-content">
        <div className="title-event">
          <h2>Eventos</h2>
        </div>
        <ul className="lista-event">
          {eventos.map((evento, index) => (
            <li key={index}>
              <span className="dia-nome">{evento.diaNome}</span> dia:{" "}
              <span className="dia">{evento.dia}</span> de{" "}
              <span className="mes">{evento.mes}</span>
              <p className="nome-evento">{evento.nomeEvento}</p>
              <div className="btn">
                <button onClick={() => handleEventoClick(evento)}>Ver Evento</button>
                <button>
                  Criar Alerta
                  <img src={alert} alt="icone de alerta" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="time-fun">
        <div className="title-funcionamento">
          <h2>Horario de funcionamento :</h2>
          <div className="content-funcionamento">
            <h3>
                {AbertoAgora ? "Aberto Agora" : "Fechado Agora"}
            </h3>
            <span className={AbertoAgora ? "open" : "close"}></span>
          </div>
        </div>
        <ul className="funcionamento-hora">
          {horariosExibidos.map((horario, index) => (
            <li
              key={index}
              className={horario.dia === DiaAtual.dia ? "today" : ""}
            >
              <span>{horario.dia}</span>
              <p>
                {horario.abertura === null
                  ? " Hoje não abre"
                  : `(${horario.abertura}hrs a ${horario.fechamento}hrs)`}
              </p>
            </li>
          ))}
          {!mostrarOutrosDias && (
            <button onClick={() => setMostrarOutrosDias(true)}>
              Ver Todos os dias
            </button>
          )}
        </ul>
      </div>
      {eventoSelecionado && <ShowEvent evento={eventoSelecionado} />}
    </section>
  );
}

export default EventPage;
