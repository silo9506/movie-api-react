import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icon/search01.svg";

const Navbar = ({ text, setText, searchMovie }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    searchMovie();
  };

  return (
    <Container>
      <Title>RumbleMovies</Title>
      <Wrapper>
        <InputBox onSubmit={onSubmit}>
          <div>
            <SearchIcon />
          </div>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="영화 검색"
          ></input>
          <Btn>검색</Btn>
        </InputBox>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background: var(--nav-bg-color);
  z-index: 100;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 50px;
  @media screen and (max-width:600px) {
   padding:0px;
  }
`;
const Title = styled.div`
  font-size: 30px;
  color: var(--logo-color);
  flex-grow: 1;
  @media screen and (max-width:500px) {
    font-size:20px;
   
  }
`;
const InputBox = styled.form`
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
    @media screen and (max-width:500px) {
    display:none;
    }
    svg {
      width: 21px;
      height: 21px;
      fill: var(--icon-color);
    }
  }
  input {
    padding: 4px;
    padding-left: 50px;
    border-radius: 4px;
    height: 100%;
    background: var(--input-bg-color);
    border: none;
    color: white;
    outline: none;
    @media screen and (max-width:500px) {
    padding:0px;
    }
  }
`;
const Btn = styled.button`
  padding: 8px 15px;
  background-color: var(--btn-bg-color);
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
`;
