import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowR } from "../../assets/icon/arrow_right01.svg";
import { ReactComponent as ArrowL } from "../../assets/icon/arrow_left01.svg";

const Carousel = ({ contents }) => {
  //   const slideContents = document.querySelectorAll(".slide_content");
  //   const slideLength = slideContents.length;
  const slideLength = 10;
  const [slideContents, setSlideContents] = useState([]);
  const [counte, setCounte] = useState(0);
  const [transition, setTransition] = useState(true);
  const [slideWidth, setSlideWidth] = useState(400);
  // let slideWidth = 400;
  let timmer = null;
  const resize = () => {
    console.log("resize");
    if (window.innerWidth <= 700) {
      setSlideWidth(200);
      return;
    }
    if (window.innerWidth <= 900) {
      setSlideWidth(266);
      return;
    }
    if (window.innerWidth <= 1100) {
      setSlideWidth(333);
      return;
    }
    if (window.innerWidth <= 1300) {
      setSlideWidth(400);
      return;
    }
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
    console.log(slideContents);
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
          slideLength={slideLength}
          slideWidth={slideWidth}
          transition={transition}
        >
          {slideContents.map((item, index) => (
            <Contents key={index} slideWidth={slideWidth}>
              <Poster
                src={
                  item.posters.includes("|")
                    ? item.posters.split("|")[0]
                    : item.posters
                }
                url={item.posters}
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
  width: 1200px;
  height: 100%;
  border: 2.5px solid #3d383d;
  &:hover button {
    display: block;
  }
  @media screen and (max-width: 1300px) {
    width: 1000px;
  }
  @media screen and (max-width: 1100px) {
    width: 800px;
  }
  @media screen and (max-width: 900px) {
    width: 600px;
  }
  @media screen and (max-width: 650px) {
    width: 400px;
  }
  @media screen and (max-width: 450px) {
    width: 200px;
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
  position: relative;
  background-color: #3d383d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  width: ${({ slideWidth }) => slideWidth}px;
  height: 300px;
  flex-shrink: 0;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
const Poster = styled.img`
  padding: 0 2.5px;
  width: 100%;
  height: 100%;
  /* background: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: 100% 100%; */
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
