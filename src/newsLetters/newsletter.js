import './newsletter.css';

function NewsLetters() {

    return (
        <section className='section-news' id='newsletter'>
            <div className="text-news">
                <h3>Fique Por Dentro</h3>
                <p>Inscreva-se em nossa newsletter e receba ofertas exclusivas, notícias e atualizações sobre o Bar do Lado.</p>
            </div>
            <form>
                <input type="email" placeholder="Exemplo:email@gmail.com" />
                <button type="submit">Bora Lá</button>
            </form>
        </section>
    )
}

export default NewsLetters;