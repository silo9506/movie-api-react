import { useEffect, useState } from "react";
import Movies from "../components/Movies";

function Home() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    console.log(json.data.movies);
    setMovies(json.data.movies);
    setLoding(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loding ? (
        <h1>Loding...</h1>
      ) : (
        movies.map((movie) => (
          <Movies
            key={movie.id}
            mediumImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            id={movie.id}
          />
        ))
      )}
    </div>
  );
}

export default Home;
