import CardDestaque from "./dataCard";
import "./secondPageSt.css";
import {Link} from "react-router-dom";
import '../App.css';
import cardapio from "../Assests/cardapio.png";

function SecondPage() {
    return (
        <section className="destaque-section" id="destaque">
            <div className="content-section">
                <ul className="Content-Destaque">
                                {
                                CardDestaque.map((item, index) => (
                                <li className="card-destaque" key={index}>
                                    <div className="text-destaque">
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="img-destaque"> 
                                        <figure>
                                            <img src={item.img} alt={item.title} />
                                        </figure>
                                    </div>
                                </li>))}
                                
                </ul>
            <div className="btn">
                <Link to="/Cardapio">
                    <button>
                        <span><img src={cardapio} alt="cardapio icone" /></span>
                        ver Cardapio
                    </button>
                </Link>  
            </div>
            </div>
        </section>
    )
}

export default SecondPage;