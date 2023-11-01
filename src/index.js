import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SecondPage from './destaques/secondPage';
import ThirdPage from './galeria/thirdPage';
import EventPage from './events/eventsPage';
import FAQ from './FAQ/faq';
import EquipePage from './Equipe/Equipe';
import Footer from './Footer/Footer';
import NewsLetters from './newsLetters/newsletter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <SecondPage />
    <ThirdPage />
    <EventPage/>
    < FAQ />
    < EquipePage />
    < NewsLetters/>
    <Footer/>
  </React.StrictMode>
);

