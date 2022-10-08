import styled, { css } from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icon/search01.svg";
import { useState } from "react";

const Navbar = ({ text, setText, onSearch }) => {
  return (
    <Container>
      <Title>RumbleMovies</Title>
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
      </InputBox>
      <Btn onClick={() => onSearch()}>검색</Btn>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background: var(--nav-bg-color);
  z-index: 100;
  height: 56px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 50px;
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
`;
const Btn = styled.button`
  padding: 8px 15px;
  background-color: var(--btn-bg-color);
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
