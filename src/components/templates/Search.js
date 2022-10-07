import styled from "styled-components";
import MovieList from "../atoms/MovieList";
import Filterbar from "../modules/Filterbar";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  console.log(location.state);
  console.log(location.state.Query);
  return (
    <Container>
      <Filterbar title={location.state.Query}></Filterbar>
      <Gridbox>
        {location.state.Data[0].Result.map((item) => (
          <MovieList data={item} key={item.movieSeq}></MovieList>
        ))}
      </Gridbox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--bg-color);
`;
const Gridbox = styled.div`
  padding: 0 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;
export default Search;
