import styled from "styled-components";
import MovieList from "../atoms/MovieList";
import Filterbar from "../modules/Filterbar";

console.log("Search");
const Search = () => {
  return (
    <Container>
      <Filterbar></Filterbar>
      <Gridbox>
        <MovieList></MovieList>
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
`;
export default Search;
