import instagram from "../Assests/instagram.png";
import facebook from "../Assests/facebook.png";
import whatsapp from "../Assests/whatsapp.png";
import Galeria from "./dataImage";
import Point from "../Assests/bg-point.png";
import "./galeria.css"

 function ThirdPage() {
    return (
        <section className="section-galeria" id="galeria">
            <div className="bg-galeria">
                <img src={Point} alt="point" />
                <img src={Point} alt="point" />
            </div>
            <div className="title-galeria">
                <h2>Galerias de fotos</h2>
            </div>
            <ul className="content-galeria">
                {Galeria.map((photo,index) => (
                    <li className="foto" key={index}>
                        <figure>
                            <img src={photo.image} alt={photo.description} />
                        </figure>
                    </li>
                ))}
            </ul>
            <div className="button-all">
                <button>Ver Galeria</button>
            </div>
            <div className="RedeSocias">
                <li>
                    <img src={instagram} alt="icone do instagram" />
                </li>
                <li>
                    <img src={facebook} alt="icone do facebook" />
                </li>
                <li>
                    <img src={whatsapp} alt="icone do whatsapp" />
                </li>
            </div>
        </section>
    )
 }

 export default ThirdPage;