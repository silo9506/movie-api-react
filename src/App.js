import { getMovies, popularMovie, SearchMovie } from "api/api";
import Modal from "components/atoms/Modal";
import Navbar from "components/modules/Navbar";
import Search from "components/templates/Search";
import Content from "components/templates/Content";
import data from "data";
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Test from "Test";

const App = () => {
  const elementRef = useRef(null);
  const modalRef = useRef(null);
  const { Steps } = data;
  const [tagHeight, setTagHeight] = useState(0);
  const stepLength = Steps.length;
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState(null);
  const [query, setQuery] = useState(null);
  const [mLoading, setMLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10000);
  const [searchData, setSearchData] = useState(null);
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    movieInit();
    init();
    window.addEventListener("mousedown", exitModal);
    window.addEventListener("resize", () => {
      init();
    });
    return () => {
      window.removeEventListener("scroll", init);
      document.removeEventListener("mousedown", exitModal);
    };
  }, []);

  const init = () => {
    let tags = elementRef.current.getElementsByClassName("FolderFlip-Tag");
    setTagHeight(tags[0].getBoundingClientRect().height);
    tags = null;
  };

  const movieInit = async () => {
    let movies = await getMovies();
    let popular = await popularMovie();
    setMovies(movies);
    setPopular(popular);
    movies = null;
    popular = null;
    setMLoading(false);
  };

  const searchMovie = async () => {
    let query = text;
    let data = await SearchMovie(query);
    setSearchData(data);
    setQuery(query);
    setPage(1);
    setTotalPage(data.total_pages);
    setMLoading(true);
    let loding = setTimeout(() => {
      setMLoading(false);
    }, 500);
    loding = null;
    query = null;
    data = null;
  };

  const changePage = async (n) => {
    let page = n;
    let data = await SearchMovie(query, page);
    setSearchData(data);
    page = null;
    setMLoading(true);
    let loding = setTimeout(() => {
      setMLoading(false);
    }, 500);
    loding = null;
  };

  const activeModal = (movie) => {
    setActive(true);
    document.body.style.overflow = "hidden";
    setSelect(movie);
  };

  const exitModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setActive(false);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <Container id={"검색"}>
      <Navbar
        text={text}
        setText={(q) => setText(q)}
        searchMovie={searchMovie}
      />
      <SearchTag href={"#검색"}>검색</SearchTag>
      <Search
        activeModal={activeModal}
        changePage={(q) => changePage(q)}
        page={page}
        setPage={(n) => setPage(n)}
        totalPage={totalPage}
        searchData={searchData}
        mLoading={mLoading}
        query={query}
        popular={popular}
      />
      <Folders ref={elementRef}>
        {Steps.map((step, index) => {
          const { Title, Background } = step.fields;
          const backgroundColor = Background;
          const id = "FolderFlipStep" + Title;
          return (
            <React.Fragment key={id}>
              <div id={id}></div>
              <FolderTag
                tagHeight={tagHeight}
                backgroundColor={backgroundColor}
                stepLength={stepLength}
                index={index}
                href={"#" + id}
                className="FolderFlip-Tag"
              >
                {Title}
              </FolderTag>
              <StickyBox
                tagHeight={tagHeight}
                backgroundColor={backgroundColor}
                stepLength={stepLength}
                index={index}
                className="FolderFlip-Content"
              >
                <Content
                  setSelect={(d) => setSelect(d)}
                  activeModal={activeModal}
                  mLoading={mLoading}
                  movies={movies[index]}
                  bgColor={backgroundColor}
                />
              </StickyBox>
            </React.Fragment>
          );
        })}
      </Folders>
      {/* <Test /> */}
      <Modal select={select} innerRef={modalRef} active={active}></Modal>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: black;
  padding-top: var(--nav-height);
`;

const Folders = styled.div``;

const FolderTag = styled.a`
  padding-left: 5px;
  position: sticky;
  border-radius: 16px 16px 0 0;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  border: 1.5px solid var(--bg-color);
  border-bottom: unset;
  margin-top: ${({ tagHeight, index }) => tagHeight * index}px;
  z-index: ${({ index }) => index + 2};
  top: ${({ index, tagHeight }) =>
    `calc(${(index + 1) * tagHeight}px + var(--nav-height))`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: var(--logo-color);
  bottom: ${({ stepLength, tagHeight, index }) =>
    (stepLength - 1 - index) * tagHeight}px;
`;
const SearchTag = styled(FolderTag)`
  background-color: #3e4756;
  top: var(--nav-height);
  background-color: var(--bg-color);
  border: 1.5px solid #3e4756;
  border-bottom: unset;
`;

const StickyBox = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: ${({ index, tagHeight }) =>
    `calc(${(index + 1) * tagHeight}px + var(--nav-height))`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: ${({ index }) => index + 1};
  height: ${({ tagHeight, index }) =>
    `calc(100vh - (var(--nav-height) + ${tagHeight * (index + 2)}px))`};
`;
