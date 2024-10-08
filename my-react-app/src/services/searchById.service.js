import axios from 'axios';

const searchById = (callback, imbdId) => {
    const BASE_URL = `https://api.themoviedb.org/3/find/${imbdId}?external_source=imdb_id`
    const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmIzNDZmNTM5YWVkMzJkNGI1NGI5OTE0ZWI0OWI4OSIsIm5iZiI6MTcyNDU3ODM5Ni4wNTIxOTMsInN1YiI6IjY2OGJhMzMzYjFmYTVmOTQ0NmU1ZDNhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.amcEC8Xyao29B_LhJdP2dUNJPtEi1_C8c7zZX12AEjU'; // Add your actual token here
    
    // set headers
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}` // Correct string interpolation
    };

    axios.get(`${BASE_URL }`, { headers}) // Fixed the BASE_URL quotation mark
    .then(response => {
        console.log(response.data.movie_results);
        callback(response.data.movie_results)
    })
    .catch(error => {
        console.error(error);
    });
};

export default searchById