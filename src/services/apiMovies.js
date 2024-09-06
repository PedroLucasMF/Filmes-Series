const { default: axios } = require("axios");

const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        language: "pt-BR"
        
    },
    headers: {
        Authorization: 'bearer ' + process.env.APIKEY
    }
})

export default apiMovies