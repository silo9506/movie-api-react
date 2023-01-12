import Loading from "components/atoms/Loading";
import Carousel from "components/modules/Carousel";
import styled from "styled-components";

const Content = ({ bgColor, movies, mLoading, activeModal }) => {
  return (
    <Container bgColor={bgColor}>
      {mLoading ? (
        <Loading />
      ) : (
        <Carousel activeModal={activeModal} contents={movies.data.results} />
      )}
    </Container>
  );
};

export default Content;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
`;
