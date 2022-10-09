import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { getmovies } from "../../api/api";
import Carousel from "../modules/Carousel";
function Home() {
  const conText = useOutletContext();
  const movies = conText.movies;

  return (
    <Container>
      <CarouselBox>
        {movies.map((movie, index) => (
          <Fragment key={index}>
            <Title>{movie.genre}</Title>
            <Carousel contents={movie.item}></Carousel>
          </Fragment>
        ))}
      </CarouselBox>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
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
