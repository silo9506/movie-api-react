import styled from "styled-components";

const MovieList = ({ data }) => {
  console.log(data);
  console.log(data.posters);
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
          <h1>{data.title.replace("!HS", "").replace("!HE", "")}</h1>
          <span>
            (
            {data.repRlsDate === ""
              ? data.regDate.substr(0, 4)
              : data.repRlsDate.substr(0, 4)}
            )
          </span>
        </Title>
        <Infomation>
          {data.company && (
            <div>
              제작사 <span>{data.company}</span>
            </div>
          )}
          {data.directorNm && (
            <div>
              감독 <span>{data.directorNm}</span>
            </div>
          )}
          {data.StaffNm && (
            <div>
              출연 <span>{data.StaffNm}</span>
            </div>
          )}
          <Plot>
            <div>{data.plots.plot[0].plotText}</div>
          </Plot>
        </Infomation>
      </InfoBox>
    </Container>
  );
};

export default MovieList;

const Container = styled.div`
  display: flex;

  /* height: 250px; */
`;
const Poster = styled.img`
  height: 100%;
  width: 180px;
  max-height: 250px;
`;
const AltPoster = styled.div`
  flex-shrink: 0;
  height: 100%;
  min-height: 250px;
  max-height: 250px;
  width: 180px;
  background-color: #ae031a;
  display: flex;
  align-items: flex-end;
  padding-bottom: 30px;
  justify-content: center;
  h1 {
    color: #581a0e;
    text-shadow: 1px 1px 2px #030001;
  }
`;
const InfoBox = styled.div`
  height: 100%;
  flex: 1;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  min-width: 0px;
  h1 {
    min-width: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span {
    font-size: 16px;
    color: #8a8d98;
  }
`;
const Infomation = styled.div``;

const Plot = styled.div``;
