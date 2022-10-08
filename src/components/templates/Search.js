import styled from "styled-components";
import MovieList from "../atoms/MovieList";
import Filterbar from "../modules/Filterbar";
import { useLocation, useOutletContext } from "react-router-dom";
import Pageination from "../atoms/Pageination";
import { useEffect } from "react";

const Search = () => {
  const conText = useOutletContext();
  const location = useLocation();
  console.log("서치창");
  useEffect(() => {}, []);
  console.log(location.state.Data[0]);
  return (
    <Container>
      <Filterbar title={location.state.Query}></Filterbar>
      <Gridbox>
        {location.state.Data[0].Result.map((item) => (
          <MovieList data={item} key={item.movieSeq}></MovieList>
        ))}
      </Gridbox>
      <Pageination
        totalPage={location.state.Data[0].TotalCount}
        nowPage={conText.start}
        setPage={conText.setStart}
        onPageChange={conText.onPageChange}
      ></Pageination>
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
  width: 100%;
  padding: 0 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;
export default Search;