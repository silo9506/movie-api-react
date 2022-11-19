import styled, { keyframes } from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../modules/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getmovies, searchMovie } from "../../api/api";

const Main = () => {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useState({});
  const [text, setText] = useState("");
  const [start, setStart] = useState(0);
  const [searchData, setSearchData] = useState(undefined);
  const navigate = useNavigate();
  const loacation = useLocation();

  console.log(movies);
  // 영화 가져오기
  const getcontents = async () => {
    console.time("LOAD!");
    const action = await getmovies({
      genre: "액션",
      sort: "prodYear,1",
      type: "극영화",
      listCount: 30,
    });
    setMovies((prev) => [...prev, { genre: "액션", item: action }]);
    const melo = await getmovies({
      genre: "멜로드라마",
      sort: "prodYear,1",
      type: "극영화",
      listCount: 30,
    });
    setMovies((prev) => [...prev, { genre: "멜로드라마", item: melo }]);

    const thriller = await getmovies({
      genre: "스릴러",
      sort: "prodYear,1",
      type: "극영화",
      listCount: 30,
    });
    setMovies((prev) => [...prev, { genre: "스릴러", item: thriller }]);

    // const motherPromise = await Promise.all([action, melo, thriller]);

    // motherPromise.map((item) => setMovies((prev) => [...prev, { item: item }]));

    console.timeEnd("LOAD!");
  };

  // 검색키워드 변경
  const onSearch = () => {
    const result = async () => {
      setStart(0);
      await setParams({
        query: text,
        listCount: 10,
        sort: "title,0",
      });
    };
    result();
  };

  const onPageChange = (n) => {
    setParams((prev) => ({ ...prev, startCount: n * 10 }));
  };

  useEffect(() => {
    // 무비리스트 가져오기
    console.log("인잇");
    console.log(searchData);
    if (loacation.pathname === "/") {
      const result = async () => {
        await getcontents();
        setLoding(false);
      };
      result();
    }
    if (loacation.pathname.includes("search"))
      if (params.query === undefined) setLoding(false);
  }, []);

  useEffect(() => {
    //검색결과 가져오기
    if (params.query === undefined) return;
    console.log("검색값 : " + params.query);
    setLoding(true);

    const result = async () => {
      const response = await searchMovie(params);
      setSearchData(response);
      setLoding(false);
      console.log(params);
      console.log("파람즈 변경완료");
    };
    result();
  }, [params]);

  // 검색결과 가져오기 함수 실행
  useEffect(() => {
    if (searchData !== undefined) {
      console.log("검색완료");
      navigate(`/search/${params.query}`, {
        state: { movie: searchData, page: start },
      });
      console.log("페이지이동");
      setLoding(false);
      console.log("로딩완료");
    }
  }, [searchData]);
  return (
    <Container>
      <Navbar
        setMovies={(value) => setMovies(value)}
        onSearch={() => onSearch()}
        text={text}
        setText={(value) => setText(value)}
        getcontents={() => getcontents()}
        setLoding={(value) => setLoding(value)}
      />
      {loding ? (
        <Loading>
          <div></div>
        </Loading>
      ) : (
        <Outlet
          context={{
            start,
            setStart,
            onPageChange,
            setLoding,
            movies,
            searchData,
            params,
            setParams,
            setText,
          }}
        />
      )}
    </Container>
  );
};

export default Main;
const Container = styled.div`
  min-height: 100vh;
  background-color: black;
  height: 100%;
  position: relative;
  padding-bottom: 32px;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }

`;
const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);

  div {
    width: 120px;
    height: 120px;
    border: 16px solid var(--input-bg-color);
    border-radius: 50%;
    border-top: 16px solid var(--logo-color);
    animation: ${spin} 2s linear infinite;
  }
`;
