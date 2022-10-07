import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import {
  BoxofficeResult,
  getBoxofficedata,
  searchMovie,
  Test,
} from "../../api/api";
import Carousel from "../modules/Carousel";
import Navbar from "../modules/Navbar";
function Home() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);

  const getcontents = async () => {
    await searchMovie({
      genre: "액션",
      sort: "prodYear,1",
      type: "극영화",
    }).then((data) => {
      setMovies((prev) => [...prev, { genre: "Action", item: data }]);
    });
    await searchMovie({
      genre: "멜로드라마",
      sort: "prodYear,1",
      type: "극영화",
    }).then((data) => {
      setMovies((prev) => [...prev, { genre: "Melodrama", item: data }]);
    });
    await searchMovie({
      genre: "스릴러",
      sort: "prodYear,1",
      type: "극영화",
    }).then((data) => {
      setMovies((prev) => [...prev, { genre: "Thriller", item: data }]);
    });
    console.log("setmovie");
  };
  useEffect(() => {
    const result = async () => {
      await getcontents();
      console.log("resut");
      setLoding(false);
    };
    result();
    console.log("기본화면");
  }, []);

  useEffect(() => {
    console.log("로딩완료");
  }, [loding]);

  console.log(movies);

  return (
    <Container>
      <Navbar></Navbar>
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
          {/* <Carousel contents={movies.boxOfficeResult.dailyBoxOfficeList} /> */}
        </CarouselBox>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--bg-color);
  height: 100%;
`;
const CarouselBox = styled.div`
  width: 80%;
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
