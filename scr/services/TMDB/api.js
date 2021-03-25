import { API_KEY } from './config';
const genres = {
  12: 'Aventura',
  14: 'Fantasia',
  16: 'Animação',
  18: 'Drama',
  27: 'Terror',
  28: 'Ação',
  35: 'Comedia',
  36: 'Historia',
  37: 'Ocidental',
  53: 'Suspense',
  80: 'Crime',
  99: 'Documentario',
  878: 'Ficção cientifica',
  9648: 'Misterio',
  10402: 'Música',
  10749: 'Romance',
  10751: 'Familia',
  10752: 'Guerra',
  10770: 'TV Movie',
};

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=pt-br&region=br`;
const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = async () => {
  const { results } = await fetch(API_URL).then((x) => x.json());
  const movies = results.map(
    ({
      id,
      original_title,
      poster_path,
      backdrop_path,
      vote_average,
      overview,
      release_date,
      genre_ids,
    }) => ({
      key: String(id),
      title: original_title,
      poster: getImagePath(poster_path),
      backdrop: getBackdropPath(backdrop_path),
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
      genres: genre_ids.map((genre) => genres[genre]),
    })
  );

  return movies;
};
