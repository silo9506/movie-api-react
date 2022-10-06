import styled from "styled-components";

const MovieList = () => {
  return (
    <Container>
      <Poster></Poster>
      <InfoBox>
        <Title>
          영화제목 <span>개봉년도</span>
        </Title>
      </InfoBox>
    </Container>
  );
};

export default MovieList;

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding-bottom: 10px;
  /* (임시) 그리드fr로 조정할것 */
  width: 100%;
  height: 250px;
`;
const Poster = styled.div`
  height: 100%;
  width: 180px;
  background-color: red;
`;
const InfoBox = styled.div`
  height: 100%;
  flex-grow: 1;
`;
const Title = styled.div`
  font-size: 22px;
  span {
    font-size: 16px;
    color: #8a8d98;
  }
`;
