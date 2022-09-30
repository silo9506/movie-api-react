import propTypes from "prop-types";
import { Link } from "react-router-dom";
const Movies = ({ mediumImg, title, summary, genres, id }) => {
  return (
    <div>
      <img alt="" src={mediumImg} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  mediumImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  id: propTypes.number.isRequired,
};
export default Movies;
