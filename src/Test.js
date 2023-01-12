import styled from "styled-components";

const Test = () => {
  // const container = document.querySelector(".container");
  // const cards = document.querySelector(".cards");

  // /* keep track of user's mouse down and up */
  // let isPressedDown = false;
  // /* x horizontal space of cursor from inner container */
  // let cursorXSpace;

  // container.addEventListener("mousedown", (e) => {
  //   isPressedDown = true;
  //   cursorXSpace = e.offsetX - cards.offsetLeft;
  //   container.style.cursor = "grabbing";
  // });

  // container.addEventListener("mouseup", () => {
  //   container.style.cursor = "grab";
  // });

  // window.addEventListener("mouseup", () => {
  //   isPressedDown = false;
  // });

  // container.addEventListener("mousemove", (e) => {
  //   if (!isPressedDown) return;
  //   e.preventDefault();
  //   cards.style.left = `${e.offsetX - cursorXSpace}px`;
  //   boundCards();
  // });

  // function boundCards() {
  //   const container_rect = container.getBoundingClientRect();
  //   const cards_rect = cards.getBoundingClientRect();

  //   if (parseInt(cards.style.left) > 0) {
  //     cards.style.left = 0;
  //   } else if (cards_rect.right < container_rect.right) {
  //     cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  //   }
  // }
  return (
    <Container class="container">
      <Cards class="cards">
        <div class="card">
          <img src="./imgs/pic1.jpg" alt="" />
          <div class="content">
            <h1>Heading 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              voluptatibus!
            </p>
          </div>
        </div>
        <div class="card">
          <img src="./imgs/pic2.jpg" alt="" />
          <div class="content">
            <h1>Heading 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              voluptatibus!
            </p>
          </div>
        </div>
        <div class="card">
          <img src="./imgs/pic3.jpg" alt="" />
          <div class="content">
            <h1>Heading 3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              voluptatibus!
            </p>
          </div>
        </div>
        <div class="card">
          <img src="./imgs/pic4.jpg" alt="" />
          <div class="content">
            <h1>Heading 4</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              voluptatibus!
            </p>
          </div>
        </div>
        <div class="card">
          <img src="./imgs/pic5.jpg" alt="" />
          <div class="content">
            <h1>Heading 5</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              voluptatibus!
            </p>
          </div>
        </div>
        <div class="card">
          <img src="./imgs/pic6.jpg" alt="" />
          <div class="content">
            <h1>Heading 6</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              voluptatibus!
            </p>
          </div>
        </div>
      </Cards>
    </Container>
  );
};

export default Test;

const Container = styled.div`
  position: relative;
  width: 1000px;
  height: 400px;
  overflow: hidden;
  cursor: grab;
  /* border-top: 10px solid #f00; */
`;

const Cards = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(6, 300px);
  grid-gap: 50px;
  pointer-events: none;
  /* border-bottom: 10px solid #00f; */

  .card {
    border: 1px solid #ccc;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    .content {
      color: #4e4e4e;
      padding: 1rem;
    }
  }
`;
