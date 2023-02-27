import styled from "styled-components";

const MovieList = ({ data, activeModal }) => {
  return (
    <Container>
      {data.poster_path === null ? (
        <AltPoster onClick={() => activeModal(data)}>
          <h1>포스터 준비중</h1>
        </AltPoster>
      ) : (
        <Poster
          onClick={() => activeModal(data)}
          src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
        />
      )}
    </Container>
  );
};

export default MovieList;

const Container = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;
const Poster = styled.img`
  height: 100%;
  width: 180px;
  max-height: 250px;
  cursor: pointer;
  border: 1px solid white;
  @media screen and (max-width: 675px) {
    width: 150px;
  }
  @media screen and (max-width: 550px) {
    width: 100%
  }
`;
const AltPoster = styled.div`
  height: 100%;
  min-height: 250px;
  max-height: 250px;
  width: 180px;
  background-color: var(--logo-color);
  display: flex;
  align-items: flex-end;
  padding-bottom: 30px;
  justify-content: center;
  h1 {
    color: #581a0e;
    text-shadow: 0px 1px 2px #030001;
  }
  @media screen and (max-width: 675px) {
    width: 150px;
  }
  @media screen and (max-width: 550px) {
    width: 100%
  }
`;
