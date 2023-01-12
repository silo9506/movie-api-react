import axios from "axios";

export const Instance = axios.create({
  baseURL: "https://silo9506-proxy.herokuapp.com/https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
    region: "KR",
    language: "ko",
  },
});

export const getMovies = async () => {
  const action = await Instance({
    url: "discover/movie",
    params: {
      sort_by: "popularity.desc",
      with_genres: 28,
    },
  });
  const comedy = await Instance({
    url: "discover/movie",
    params: {
      sort_by: "popularity.desc",
      with_genres: 53,
    },
  });
  const thriller = await Instance({
    url: "discover/movie",
    params: {
      sort_by: "popularity.desc",
      with_genres: 18,
    },
  });
  const respons = Promise.all([action, comedy, thriller]);
  return respons;
};

export const popularMovie = async (params) => {
  const respons = await Instance({
    url: "movie/popular",
    params: {
      ...params,
      sort_by: "popularity.desc",
    },
  });
  return respons.data;
};

export const SearchMovie = async (query, page) => {
  const respons = await Instance({
    url: "search/movie",
    params: {
      query,
      page,
    },
  });
  return respons.data;
};
