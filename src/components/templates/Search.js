import styled from "styled-components";
import MovieList from "../atoms/MovieList";
import Filterbar from "../atoms/Filterbar";
import Pageination from "../atoms/Pageination";
import { useState } from "react";
import Loading from "components/atoms/Loading";
import { useLayoutEffect } from "react";

const Search = ({
  activeModal,
  changePage,
  searchData,
  popular,
  mLoading,
  query,
  totalPage,
  setPage,
  page,
}) => {
  const [randomMovie, setRandomMovie] = useState(false);
  useLayoutEffect(() => {
    if (mLoading === false) {
      setRandomMovie(popular.results[Math.floor(Math.random() * 19)]);
    }
  }, [mLoading]);

  return (
    <Container>
      {mLoading ? (
        <Loading />
      ) : (
        <>
          {searchData === null ? (
            <Hotmovie img={randomMovie.backdrop_path}>
              <div className="title">{randomMovie.title}</div>
              <div className="overview">{randomMovie.overview}</div>
            </Hotmovie>
          ) : (
            <Searchbox>
              <Filterbar>{query}</Filterbar>
              {searchData.results.length === 0 ? (
                <Altbox>검색결과가 없습니다.</Altbox>
              ) : (
                <Gridbox>
                  {searchData.results.map((item, index) => {
                    return (
                      <MovieList
                        key={item.id}
                        activeModal={activeModal}
                        data={item}
                      ></MovieList>
                    );
                  })}
                </Gridbox>
              )}

              <Pageination
                changePage={changePage}
                page={page}
                totalPage={totalPage}
                setPage={setPage}
              ></Pageination>
            </Searchbox>
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  height: calc(100vh - 176px);
  background-color: var(--bg-color);
  color: white;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
`;

const Hotmovie = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  background-image: ${({ img }) =>
    `linear-gradient(rgba(6, 13, 23, 0.4), var(--bg-color)),url(https://image.tmdb.org/t/p/original/${img})`};
  background-repeat: no-repeat;
  height: 100%;
  background-size: cover;
  background-position: center center;
  padding: 0 30px;
  .title {
    font-size: 30px;
  }
  .overview {
    line-height: 1.5;
  }
`;

const Searchbox = styled.div`
  height: 100%;
`;

const Gridbox = styled.div`
  width: 100%;
  padding: 0 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;
const Altbox = styled.div`
  padding: 0 50px;
  text-indent: 15px;
`;
export default Search;
