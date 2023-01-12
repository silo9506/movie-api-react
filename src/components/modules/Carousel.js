import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowR } from "../../assets/icon/arrow_right01.svg";
import { ReactComponent as ArrowL } from "../../assets/icon/arrow_left01.svg";

const Carousel = ({ contents, activeModal }) => {
  const slideLength = 10;
  const [slideContents, setSlideContents] = useState([]);
  const [counte, setCounte] = useState(0);
  const [transition, setTransition] = useState(true);
  const [slideWidth, setSlideWidth] = useState(400);
  const [slideView, setSlideView] = useState(5);

  let timmer = null;
  const resize = () => {
    console.log("resize");
  };

  const onResize = () => {
    if (timmer) {
      clearTimeout(timmer);
    }
    timmer = setTimeout(() => {
      resize();
    }, 100);
  };

  const clone = () => {
    setSlideContents((prev) => [...prev, ...prev, ...prev]);
  };

  useEffect(() => {
    // 컨텐츠 복사
    let counte = 0;
    const result = async () => {
      await contents.map((item) => {
        if (item.posters !== "" && counte < 10) {
          setSlideContents((prev) => [...prev, item]);
          counte++;
        }
      });
    };
    result();
    clone();
    window.addEventListener("resize", onResize);
    resize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onClickNext = () => {
    if (counte === slideLength - 1) {
      setTransition(true);
      setCounte((prev) => ++prev);
      setTimeout(() => {
        setTransition(false);
        setCounte(0);
      }, 300);
    } else {
      setCounte((prev) => ++prev);
      setTransition(true);
    }
  };

  const onClickPrev = () => {
    if (counte === 0) {
      setTransition(true);
      setCounte((prev) => --prev);
      setTimeout(() => {
        setTransition(false);
        setCounte(slideLength - 1);
      }, 300);
    } else {
      setCounte((prev) => --prev);
      setTransition(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Flexbox
          counte={counte}
          slideView={slideView}
          slideWidth={slideWidth}
          transition={transition}
        >
          {slideContents.map((item, index) => (
            <Contents key={index} slideView={slideView}>
              <Poster
                onClick={() => activeModal(item)}
                src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
              ></Poster>
            </Contents>
          ))}
        </Flexbox>
      </Wrapper>
      <Next onClick={onClickNext}>
        <ArrowR />
      </Next>
      <Prev onClick={onClickPrev}>
        <ArrowL />
      </Prev>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 90%;
  height: 100%;
  border: 2.5px solid #3d383d;
  &:hover button {
    display: block;
  }
`;
const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  overflow: hidden;
  padding: 0px;
`;
const Flexbox = styled.ul`
  display: flex;
  transform: ${(props) =>
    `translateX(-${props.counte * (100 / props.slideView)}%)`};
  transition: ${(props) => props.transition && "0.3s"};
`;
const Contents = styled.li`
  position: relative;
  background-color: #3d383d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  width: ${({ slideView }) => 100 / slideView}%;
  flex-shrink: 0;
  cursor: pointer;
  height: 300px;
`;
const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

const Btn = styled.button`
  transition: all 0.3s ease-in;
  position: absolute;
  height: 100%;
  background-color: rgba(6, 13, 23, 0.8);
  cursor: pointer;
  top: 0;
  height: 100%;
  width: 40px;
  display: none;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  z-index: 10;
  svg {
    width: 100%;
    height: 100%;
    fill: #78a6b8;
  }
  svg:hover {
    fill: #d5d5d5;
  }
`;
const Next = styled(Btn)`
  right: 0px;
`;
const Prev = styled(Btn)`
  left: 0px;
`;
