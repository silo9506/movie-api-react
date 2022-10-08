import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { getmovies } from "../../api/api";
import Carousel from "../modules/Carousel";
function Home() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const conText = useOutletContext();
  // const loding = conText.loding;
  // const setLoding = conText.setLoding;
  // 영화 가져오기
  const getcontents = async () => {
    await getmovies({
      genre: "액션",
      sort: "prodYear,1",
      type: "극영화",
      listCount: 30,
    }).then((data) => {
      console.log("액션로드");
      setMovies((prev) => [...prev, { genre: "Action", item: data }]);
    });
    await getmovies({
      genre: "멜로드라마",
      sort: "prodYear,1",
      type: "극영화",
      listCount: 30,
    }).then((data) => {
      console.log("멜로로드");
      setMovies((prev) => [...prev, { genre: "Melodrama", item: data }]);
    });
    await getmovies({
      genre: "스릴러",
      sort: "prodYear,1",
      type: "극영화",
      listCount: 30,
    }).then((data) => {
      console.log("스릴러 로드");
      setMovies((prev) => [...prev, { genre: "Thriller", item: data }]);
    });
    console.log("영화가져오기");
  };

  // 영화가져오기함수 실행
  useEffect(() => {
    const result = async () => {
      await getcontents();
      setLoding(false);
    };
    result();
    console.log("init");
  }, []);

  useEffect(() => {
    if (loding === false) console.log("로딩완료");
  }, [loding]);

  return (
    <Container>
      {loding ? (
        <h1>loding</h1>
      ) : (
        <CarouselBox>
          {movies.map((movie, index) => (
            <Fragment key={index}>
              <Title>{movie.genre}</Title>
              <Carousel contents={movie.item}></Carousel>
            </Fragment>
          ))}
        </CarouselBox>
      )}
    </Container>
  );
}

const Container = styled.div`
  /* min-height: 100vh;
  background-color: var(--bg-color);
  height: 100%; */
`;
const CarouselBox = styled.div`
  width: 100%;
  margin: auto;
`;
const Title = styled.div`
  text-align: center;
  font-size: 42px;
  margin: 32px auto;
`;

export default Home;

// api 충돌
// const [boxofficeData, setBoxofficeData] = useState();
// const [boxoffice, setBoxoffice] = useState([]);
// const [boxofficeResult, setBoxofficeResult] = useState();
// const searchBoxoffic = async () => {
//   setBoxofficeData(await getBoxofficedata());
// };

// // const getBoxoffice = async () => {
// //   setBoxofficeResult(() => ({ boxoffice }));
// // };

// useEffect(() => {
//   searchBoxoffic();
// }, []);

// useEffect(() => {
//   if (boxofficeData !== undefined) {
//     console.log(boxofficeData.boxOfficeResult.dailyBoxOfficeList);
//     boxofficeData.boxOfficeResult.dailyBoxOfficeList.map((item) =>
//       setBoxoffice((prev) => [...prev, { query: item.movieNm }])
//     );
//   }
// }, [boxofficeData]);

// useEffect(() => {
//   // getBoxoffice();
//   const result = async () => {
//     const data = await Promise.all(
//       boxoffice.map(
//         (item) =>
//           BoxofficeResult(item).then((response) => console.log(response))

//         // setMovies((prev) => [...prev, { boxoffice: BoxofficeResult(item) }])
//       )
//     );
//   };
//   result();
// }, [boxoffice]);

// // useEffect(() => {}, [movies]);
// console.log(movies);
// console.log(boxoffice);
