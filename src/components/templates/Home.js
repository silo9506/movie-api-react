import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { getBoxoffice, Test } from "../../api/api";
import Carousel from "../modules/Carousel";
import Navbar from "../modules/Navbar";
function Home() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const SearchBoxoffic = async () => {
    setMovies(await getBoxoffice());
    setLoding(false);
  };

  Test().then((data) => console.log(data));

  useEffect(() => {
    SearchBoxoffic();
  }, []);

  console.log(movies);

  // return (
  //   <div>
  //     {loding ? (
  //       <h1>Loding...</h1>
  //     ) : (
  //       movies.map((movie) => (
  //         <Movies
  //           key={movie.id}
  //           mediumImg={movie.medium_cover_image}
  //           title={movie.title}
  //           summary={movie.summary}
  //           genres={movie.genres}
  //           id={movie.id}
  //         />
  //       ))
  //     )}
  //   </div>
  // );

  // getBoxoffice().then((json) =>
  //   console.log(json.boxOfficeResult.dailyBoxOfficeList)
  // );

  return (
    <Container>
      <Navbar></Navbar>
      {loding ? (
        <h1>loding</h1>
      ) : (
        <CarouselBox>
          <Title>Box Office</Title>
          <Carousel contents={movies.boxOfficeResult.dailyBoxOfficeList} />
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
