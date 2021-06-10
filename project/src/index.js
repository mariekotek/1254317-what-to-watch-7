import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
  filmPage: 'film-page.html',
  background: 'img/bg-the-grand-budapest-hotel.jpg',
  poster: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImg: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
};

const films = [
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    filmPage: 'film-page.html',
    previewImg: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    title: 'Bohemian Rhapsody',
    moviePage: 'film-page.html',
    previewImg: 'img/bohemian-rhapsody.jpg',
  },
  {
    title: 'Macbeth',
    filmPage: 'film-page.html',
    previewImg: 'img/macbeth.jpg',
  },
  {
    title: 'Aviator',
    filmPage: 'film-page.html',
    previewImg: 'img/aviator.jpg',
  },
  {
    title: 'We need to talk about Kevin',
    filmPage: 'film-page.html',
    previewImg: 'img/we-need-to-talk-about-kevin.jpg',
  },
  {
    title: 'What We Do in the Shadows',
    filmPage: 'film-page.html',
    previewImg: 'img/what-we-do-in-the-shadows.jpg',
  },
  {
    title: 'Revenant',
    filmPage: 'film-page.html',
    previewImg: 'img/revenant.jpg',
  },
  {
    title: 'Johnny English',
    filmPage: 'film-page.html',
    previewImg: 'img/johnny-english.jpg',
  },
  {
    title: 'Shutter Island',
    filmPage: 'film-page.html',
    previewImg: 'img/shutter-island.jpg',
  },
  {
    title: 'Pulp Fiction',
    filmPage: 'film-page.html',
    previewImg: 'img/pulp-fiction.jpg',
  },
  {
    title: 'No Country for Old Men',
    filmPage: 'film-page.html',
    previewImg: 'img/no-country-for-old-men.jpg',
  },
  {
    title: 'Snatch',
    filmPage: 'film-page.html',
    previewImg: 'img/snatch.jpg',
  },
  {
    title: 'Moonrise Kingdom',
    moviePage: 'film-page.html',
    previewImg: 'img/moonrise-kingdom.jpg',
  },
  {
    title: 'Seven Years in Tibet',
    filmPage: 'film-page.html',
    previewImg: 'img/seven-years-in-tibet.jpg',
  },
  {
    title: 'Midnight Special',
    filmPage: 'film-page.html',
    previewImg: 'img/midnight-special.jpg',
  },
  {
    title: 'War of the Worlds',
    filmPage: 'film-page.html',
    previewImg: 'img/war-of-the-worlds.jpg',
  },
  {
    title: 'Dardjeeling Limited',
    filmPage: 'film-page.html',
    previewImg: 'img/dardjeeling-limited.jpg',
  },
  {
    title: 'Orlando',
    filmPage: 'film-page.html',
    previewImg: 'img/orlando.jpg',
  },
  {
    title: 'Mindhunter',
    filmPage: 'film-page.html',
    previewImg: 'img/mindhunter.jpg',
  },
  {
    title: 'Midnight Special',
    filmPage: 'film-page.html',
    previewImg: 'img/midnight-special.jpg',
  },
];


ReactDOM.render(
  <React.StrictMode>
    <App promoFilm = {promoFilm} films = {films}/>
  </React.StrictMode>,
  document.getElementById('root'));
