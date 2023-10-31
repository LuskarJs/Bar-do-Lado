import "./faq.css";
import brilho from "../Assests/brilho.png";
import seta from "../Assests/seta.png";
import Modal from "./modal";
import perguntasRespostas from "./datafaq";

function FAQ() {

    return (

        <section className="faq-container">
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
                <button onClick={() => Modal}>
                    Fazer Pergunta
                </button>
                <button>
                    Ver Todas as Perguntas
                </button>
            </div>
        </section>
    )
}

export default FAQ;