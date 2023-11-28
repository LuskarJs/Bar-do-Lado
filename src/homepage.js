import SecondPage from './destaques/secondPage';
import ThirdPage from './galeria/thirdPage';
import EventPage from './events/eventsPage';
import FAQ from './FAQ/faq';
import EquipePage from './Equipe/Equipe';
import NewsLetters from './newsLetters/newsletter';
import App from './App';

function HomeAll() {

    return (
        <>
        <App />
        <SecondPage />
        <ThirdPage />
        <EventPage />
        <FAQ />
        <EquipePage />
        <NewsLetters />
        </>
    )
}

export default HomeAll;