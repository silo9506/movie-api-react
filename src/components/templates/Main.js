import styled from "styled-components";
import { Outlet } from "react-router-dom";
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
  // 검색키워드 변경
  const onSearch = () => {
    setStart(0);
    setParams({
      query: text,
      listCount: 10,
      sort: "title,0",
    });
  };
  console.log(params);

  const onPageChange = () => {
    setParams((prev) => ({ ...prev, startCount: start * 10 }));
  };

  //검색결과 가져오기
  useEffect(() => {
    if (params.query === undefined) return;
    console.log("검색값 : " + params.query);
    const result = async () => {
      await searchMovie(params).then((data) => {
        return setSearchData(data);
      });
    };
    result();
  }, [params]);

  // 검색결과 가져오기 함수 실행
  useEffect(() => {
    if (searchData !== undefined) {
      console.log("검색완료");
      navigate(`/search/:${params.query}`, { state: searchData });
      console.log("페이지이동");
    }
    setLoding(false);
  }, [searchData]);

  return (
    <Container>
      <Navbar
        onSearch={() => onSearch()}
        text={text}
        setText={(value) => setText(value)}
      />
      <Outlet context={{ start, setStart, onPageChange, setLoding }} />
    </Container>
  );
};

export default Main;
const Container = styled.div`
  min-height: 100vh;
  background-color: var(--bg-color);
  height: 100%;
`;

const Loading = styled.div`
  color: white;
  width: 500px;
  height: 100%;
  margin: auto;
  font-size: 40px;
  background-color: red;
`;
