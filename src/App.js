import './App.css';
import principalimg from "./Assests/bg-home.png"
import bg from "./Assests/bg.png";
import pin from "./Assests/alfinete.png";

function App() {
  return (
    <section className="Home">
            <div className='content-img'>
              <figure>
                <img src='https://www.obomdeviajar.com.br/wp-content/uploads/bar_teto_solar.jpg' alt='Pessoas brindando em um bar universitario' />
              </figure>
            </div>
      <div className='content-home'>
          <div className='title-home'>
              <h2>Bar do Lado</h2>
          </div>
          <main className='content-text'>   
            <div className='text-home'>
              <h1>Uma Experiência Universitária Única</h1>
              <p>
              Bem-vindo ao Bar do Lado, o paraíso dos universitários!
              Experimente nossas bebidas, hambúrgueres, churrascos e muito 
              mais enquanto se diverte com os amigos.
              </p>
            </div>
          </main>
           <div className='adress'>
              <span>
                <img src={pin} alt='pin de localização do bar'/>
              </span>
              <p>Rua Travessa Carlos Antonio <span>N: 184</span>, CEP<span>2445-5745</span></p>
            </div>
          <div className='btn'>
              <button> Ver Cardapio </button>
              <button> Fazer Parte</button>
          </div>
      </div>
    </section>
  );
}

export default App;
