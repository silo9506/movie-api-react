import styled from "styled-components";

const MovieList = ({ data }) => {
  return (
    <Container>
      {data.posters === "" ? (
        <AltPoster>
          <h1>포스터 준비중</h1>
        </AltPoster>
      ) : (
        <Poster
          src={
            data.posters.includes("|")
              ? data.posters.split("|")[0]
              : data.posters
          }
        />
      )}
      <InfoBox>
        <Title>
          <h1>{data.title.replace(/!HS/g, "").replace(/!HE/g, "")}</h1>
          <span>
            (
            {data.repRlsDate === ""
              ? data.regDate.substr(0, 4)
              : data.repRlsDate.substr(0, 4)}
            )
          </span>
        </Title>
        <Infomation>
          <h1>
            제작
            <div>
              {data.company ? (
                <span>{data.company}</span>
              ) : (
                <span>정보없음</span>
              )}
            </div>
          </h1>
          <h1>
            감독
            <div>
              {data.directors.director[0].directorNm !== "" ? (
                <span>{data.directors.director[0].directorNm}</span>
              ) : (
                <span>정보없음</span>
              )}
            </div>
          </h1>
          <h1>
            출연
            <div>
              {data.actors.actor.length > 1 ? (
                data.actors.actor.map((item, index) => (
                  <span key={index}>{item.actorNm}</span>
                ))
              ) : (
                <span>정보없음</span>
              )}
            </div>
          </h1>
        </Infomation>
        <Plot>
          <h1>줄거리</h1>
          <div>{data.plots.plot[0].plotText}</div>
        </Plot>
      </InfoBox>
    </Container>
  );
};

export default MovieList;

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  /* height: 250px; */
  @media screen and (max-width: 450px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
const Poster = styled.img`
  height: 100%;
  width: 180px;
  max-height: 250px;
  @media screen and (max-width: 600px) {
    width: 150px;
  }
  @media screen and (max-width: 500px) {
    width: 120px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
const AltPoster = styled.div`
  height: 100%;
  min-height: 250px;
  max-height: 250px;
  width: 180px;
  background-color: var(--logo-color);
  display: flex;
  align-items: flex-end;
  padding-bottom: 30px;
  justify-content: center;
  h1 {
    color: #581a0e;
    text-shadow: 0px 1px 2px #030001;
  }
  @media screen and (max-width: 500px) {
    width: 120px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
const InfoBox = styled.div`
  padding: 0 15px;
  height: 100%;
  overflow: hidden;
  flex: 1;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  margin-bottom: 10px;
  h1 {
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span {
    font-size: 16px;
    color: #8a8d98;
  }
`;
const Infomation = styled.div`
  & h1 {
    white-space: nowrap;
    color: #bca6a1;
    display: flex;
  }
  & span {
    padding-left: 5px;
  }
  & div {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Plot = styled.div`
  h1 {
    width: 97%;
    padding-bottom: 2.5px;
    border-bottom: 1px solid white;
    margin-bottom: 10px;
  }
  margin-top: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 9;
  overflow: hidden;
`;
