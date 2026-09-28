export class Model {
  genreData;
  currentMovies;
  constructor() {
    this.genreData = null;
    this.currentMovies = null;
  }

  async fetchGenres() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    //console.log(data);
    this.genreData = data;

    //return data;
  }

  async fetchMovies(movieId: number) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=${movieId}`,
      options,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    //console.log(data);

    this.currentMovies = data;
    console.log(this.currentMovies);
  }
}
