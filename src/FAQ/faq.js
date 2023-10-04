import "./faq.css";
import perguntasRespostas from "./datafaq";

function FAQ() {

    return (

        <section className="faq-container">
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
        </section>
    )
}

export default FAQ;