import styled, { css, keyframes } from "styled-components";

const Modal = ({ active, innerRef, select }) => {
  return (
    <Container active={active}>
      <div className="background">
        {select ? (
          <Content
            img={
              select.backdrop_path === null
                ? select.poster_path
                : select.backdrop_path
            }
            active={active}
            ref={innerRef}
          >
            <Title>
              <h1>{select.title}</h1>
              <div>{select.original_title}</div>
            </Title>
            <Infomation>
              <h1>
                개봉일
                <div>
                  <span>{select.release_date}</span>
                </div>
              </h1>
              <h1>
                평점
                <div>
                  <span>{select.vote_average}</span>
                </div>
              </h1>
              <h1>
                장르
                <div>
                  <span></span>
                </div>
              </h1>
            </Infomation>
            <Plot>{select.overview}</Plot>
          </Content>
        ) : (
          <>로딩중</>
        )}
      </div>
    </Container>
  );
};

export default Modal;

const activeContent = keyframes`
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
`;

const activeModal = keyframes`
	0% {
		transform: scale(2);
		opacity: 0;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
`;

const hideContent = keyframes`
	0% {
		transform: scale(1);
		opacity: 1;
	}
	100% {
		transform: scale(0);
		opacity: 0;
	}
`;
const hideModal = keyframes`
	0% {
		transform: scale(1);
		opacity: 1;
	}
	99.9% {
		transform: scale(2);
		opacity: 0;
	}
	100% {
		transform: scale(0);
	}
`;

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  transform: scale(0);
  background-color: black;

  animation: ${({ active }) =>
    active
      ? css`
          ${activeModal} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards
        `
      : css`
          ${hideModal} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards
        `};

  .background {
    background: rgba(0, 0, 0, 0.9);
    vertical-align: middle;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 70%;
  padding: 20px;
  background: #fff;
  position: relative;
  background-image: ${({ img }) =>
    `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(https://image.tmdb.org/t/p/original/${img})`};
  background-repeat: no-repeat;
  background-size: 101% 101%;
  background-position: center center;
  animation: ${({ active }) =>
    active
      ? css`
          ${activeContent} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards
        `
      : css`
          ${hideContent} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards
        `};
  @media screen and (max-width:500px) {
    width:250px
  }
`;

const Title = styled.div`
  align-items: center;
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
  h1 {
    color: var(--logo-color);
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div {
    padding: 10px 0px;
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
  color: white;
  width: 100%;
  line-height: 1.5;
  margin-top: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 9;
  overflow: hidden;
`;
