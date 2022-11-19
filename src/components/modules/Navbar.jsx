import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icon/search01.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({
  text,
  setText,
  onSearch,
  getcontents,
  setLoding,
  setMovies,
}) => {
  const location = useLocation();

  const home = async () => {
    setMovies("");
    setLoding(true);
    await getcontents();
    setLoding(false);
  };

  return (
    <Container>
      {location.pathname !== "/" ? (
        <Link to="/" onClick={() => home()}>
          <Title>RumbleMovies</Title>
        </Link>
      ) : (
        <Title>RumbleMovies</Title>
      )}
      <Wrapper>
        <InputBox>
          <div>
            <SearchIcon />
          </div>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") return onSearch();
            }}
            placeholder="영화 검색"
          ></input>
          <Btn onClick={() => onSearch()}>검색</Btn>
        </InputBox>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
const Container = styled.div`
  background: var(--nav-bg-color);
  z-index: 100;
  min-height: 56px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 50px;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    height: 100%;
  }
  @media screen and (max-width: 500px) {
    padding: 0px;
  }
  a {
    flex-grow: 1;
  }
`;
const Title = styled.div`
  font-size: 30px;
  color: var(--logo-color);
  flex-grow: 1;
`;
const InputBox = styled.div`
  position: relative;
  padding: 8px;
  height: 52px;
  div {
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 50px;
    svg {
      width: 21px;
      height: 21px;
      fill: var(--icon-color);
    }
  }
  input {
    min-width: 300px;
    padding: 4px;
    padding-left: 50px;
    border-radius: 4px;
    height: 100%;
    background: var(--input-bg-color);
    border: none;
    outline: none;
  }
  @media screen and (max-width: 500px) {
    input {
      min-width: 25px;
      padding: 0px;
      text-indent: 15px;
    }
    div {
      display: none;
    }
  }
`;
const Btn = styled.button`
  padding: 8px 15px;
  background-color: var(--btn-bg-color);
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
`;
