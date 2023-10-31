import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SecondPage from './destaques/secondPage';
import ThirdPage from './galeria/thirdPage';
import EventPage from './events/eventsPage';
import FAQ from './FAQ/faq';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <SecondPage />
    <ThirdPage />
    <EventPage/>
    < FAQ />
  </React.StrictMode>
);

