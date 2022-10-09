import styled from "styled-components";
import MovieList from "../atoms/MovieList";
import Filterbar from "../modules/Filterbar";
import { useLocation } from "react-router-dom";
import Pageination from "../atoms/Pageination";

const Search = () => {
  const location = useLocation();
  console.log("서치창");
  console.log(location.state);

  return (
    <Container>
      <Filterbar title={location.state.Query}></Filterbar>
      {location.state.Data[0].Result === undefined ? (
        <Altbox>검색결과가 없습니다.</Altbox>
      ) : (
        <Gridbox>
          {location.state.Data[0].Result.map((item) => (
            <MovieList data={item} key={item.movieSeq}></MovieList>
          ))}
        </Gridbox>
      )}

      <Pageination totalPage={location.state.Data[0].TotalCount}></Pageination>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--bg-color);
  padding-bottom: 10px;
`;
const Gridbox = styled.div`
  width: 100%;
  padding: 0 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Altbox = styled.div`
  padding: 0 50px;
  text-indent: 15px;
`;
export default Search;
