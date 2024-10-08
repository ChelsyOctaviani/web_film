import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { details } from '../../services/searchByTitle.service';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Button from '../../components/partials/button';

export default function Preview() {
    const { original_title}= useParams();
    const location = useLocation();
    const { poster_path, overview, popularity, release_date } = location.state || {};
  useEffect(() => {
    details((data) => {
        console.log(data);
    });
  }, []);

  return (
    <>
      <Navbar/>
      <div style={{ fontFamily: 'Sofadi One, cursive', backgroundColor: '#030712', color: 'white' }}>
      <main className="container mx-auto py-10 bg-gray-950 pt-16">
        <section className="flex flex-col md:flex-row gap-10">
          <div className="movie-poster w-full md:w-1/4">
          <img
                src={ `https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={original_title || 'poster'}
              />

          </div>
          <div className="movie-info w-full md:w-2/3">
            <h2 className="text-4xl font-bold mb-4 mt-16">{original_title}</h2>
            <p className="text-lg mb-2">{popularity} | {release_date}</p>
            <div className="tabs mb-4 space-x-4">
              <Button text="overview" color="bg-neutral-500"></Button>
              <Button text="Trailers & More" color="bg-neutral-500"></Button>
              <Button text="More Like This" color="bg-neutral-500"></Button>
              <Button text="Details" color="bg-neutral-500"></Button>
            </div>

            <p className="mb-4">
              {overview}
            </p>
            <ul className="list-none space-y-2">
              <li><strong>Pemeran:</strong> Lee Min-ki, Kim Ji-won, Lee El, Son Seok-koo, dan Lee Ki-woo</li>
              <li><strong>Penulis:</strong> Park Hae-young</li>
              <li><strong>Genre:</strong> Roman, Drama, Melodrama, Biografi, Penggalan Kehidupan</li>
            </ul>
            <div className="flex mr-5 mt-5">
  <a
    className="group relative inline-flex items-center overflow-hidden rounded bg-red-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
    href="/home"
  >
    <span className="absolute left-0 flex items-center pl-3">
      <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </span>
    <span className="ml-5 text-sm font-medium transition-all group-hover:ml-12">Back</span>
  </a>
</div>
          </div>
        </section>
      </main>
      </div>
      <Footer/>
    </>
  );
}
