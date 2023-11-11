import "./faq.css";
import React, { useState } from "react";
import brilho from "../Assests/brilho.png";
import seta from "../Assests/seta.png";
import Modal from "./modal";
import perguntasRespostas from "./datafaq";

function FAQ() {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => {
      setModalAberto(true);
    };
  
    const fecharModal = () => {
      setModalAberto(false);
    };

    return (

        <section className="faq-container" id="faq">
            <div className="bg-img">
                <img src={brilho} alt="brilho icone" />
                <img src={brilho} alt="brilho icone" />
                <img src={seta} alt="seta icone" />
            </div>
            <div className="title-faq">
                <h2>Perguntas Frequentes</h2>
            </div>
            <ul className="lista-faq">
                {perguntasRespostas.map((pergunta, index) => (
                    <li className="Perguntas" key={index}>
                    <h3>{pergunta.pergunta}</h3>
                    <p>{pergunta.resposta}</p>
                </li>
                ))}
            </ul>
            <div className="btn">
                <button onClick={abrirModal}>
                Fazer Pergunta
                </button>
                <button>
                Ver Todas as Perguntas
                </button>
            </div>
            {modalAberto && <Modal fecharModal={fecharModal} />}

        </section>
    )
}

export default FAQ;