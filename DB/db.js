let movies = [
    {   
        id: 0,
        name: "Miku",
        score: 2
    },
    {   
        id: 1,
        name: "Avengers - The new one",
        score: 2
    },
    {   
        id: 2,
        name: "The Godfather I",
        score: 90
    },
    {
        id: 3,
        name: "Masa",
        score: 100
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else {
        return false
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}