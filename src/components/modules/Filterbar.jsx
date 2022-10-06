import styled from "styled-components";

const Filterbar = () => {
  return (
    <Container>
      <Title>의 검색 결과</Title>
    </Container>
  );
};

export default Filterbar;

const Container = styled.div`
  padding: 0 50px;
  position: sticky;
  display: flex;
  height: 63px;
  align-items: center;
`;
const Title = styled.div`
  flex-grow: 1;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: #d9e8ed;
`;
