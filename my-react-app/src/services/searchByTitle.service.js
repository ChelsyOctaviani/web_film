import axios from "axios";

export const details = (callback) => {
    const BASE_URL = 'https://streaming-availability.p.rapidapi.com/search/title';
    const TOKEN = '54cf647af7msh6e840c723e57a20p1ed148jsn2365dcdc230e'; // Ganti dengan Bearer token-mu

    // Set headers
    const headers = {
      'Content-Type': 'application/json',
      'x-rapidapi-key': TOKEN // Gunakan variabel secara langsung tanpa ${}
    };

    // Lakukan permintaan GET
    axios.get(BASE_URL, { headers }) // Jangan gunakan template literal di sini
      .then(response => {
        console.log(response.data.results);
        callback(response.data.results);
      })
      .catch(error => {
        console.error(error);

      });
};
