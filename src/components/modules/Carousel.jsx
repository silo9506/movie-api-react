import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowR } from "../../assets/icon/arrow_right01.svg";
import { ReactComponent as ArrowL } from "../../assets/icon/arrow_left01.svg";

const Carousel = ({ contents }) => {
  //   const slideContents = document.querySelectorAll(".slide_content");
  //   const slideLength = slideContents.length;
  const slideLength = contents.length;
  const [slideContents, setSlideContents] = useState(contents);
  const [counte, setCounte] = useState(0);
  const [transition, setTransition] = useState(true);
  let slideWidth = 300;

  console.log(slideLength);
  useEffect(() => {
    // 컨텐츠 복사
    setSlideContents((prev) => [...prev, ...prev, ...prev]);
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
          slideLength={slideLength}
          slideWidth={slideWidth}
          transition={transition}
        >
          {slideContents.map((item, index) => (
            <Contents key={index}>{item.movieNm}</Contents>
          ))}
        </Flexbox>
      </Wrapper>
      <Next onClick={onClickNext}>
        <ArrowR />
      </Next>
      <Prev onClick={onClickPrev}>
        <ArrowL />
      </Prev>
      {/* <Pagenation>
        {contents.map((item, index) => (
          <Dot
            onClick={() => setCounte(index)}
            isActive={index === counte}
            key={index}
          >
            {index + 1}
          </Dot>
        ))}
      </Pagenation> */}
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
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
    "translateX(-" +
    props.slideWidth * (props.slideLength + props.counte) +
    "px)"};
  transition: ${(props) => props.transition && "0.3s"};
`;
const Contents = styled.li`
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  /* display: flex;
  justify-content: center;
  align-items: center; */
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

// itemPerPage가 최대 10이여서 구현불필요
// const Pagenation = styled.ul`
//   position: absolute;
//   left: 50%;
//   bottom: 0;
//   transform: translateX(-50%);
//   display: flex;
// `;

// const Dot = styled.li`
//   display: flex;
//   justify-content: center;
//   width: 15px;
//   height: 15px;
//   margin: 0 5px;
//   overflow: hidden;
//   background: #ddd;
//   border-radius: 50%;
//   transition: 0.3s;
//   ${({ isActive }) => isActive && `  background: #333;`}
// `;
