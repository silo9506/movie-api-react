import styled, { css } from "styled-components";
import { useOutletContext } from "react-router-dom";

const Pageination = ({ totalPage }) => {
  let { start, setStart, onPageChange } = useOutletContext();
  start = start + 1;
  console.log("####");
  console.log(`start ${start}, totalPage ${totalPage}`);

  const lastPage = Math.ceil(totalPage / 10);
  let startPage = Math.ceil(start / 10) * 10 - 9;

  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9;
  const pageList = [];

  const onClick = (n) => {
    setStart(n);
    onPageChange(n);
  };

  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  if (totalPage === undefined) return;
  else
    return (
      <List>
        {start > 1 && <Page onClick={() => onClick(start - 2)}>이전</Page>}

        {pageList.map((page) => {
          return (
            <Page
              key={page}
              isActive={start === page}
              onClick={() => onClick(page - 1)}
            >
              {page}
            </Page>
          );
        })}
        {start < lastPage && <Page onClick={() => onClick(start)}>다음</Page>}
      </List>
    );
};

const Page = styled.button`
  cursor: pointer;
  @media screen and (max-width: 450px) {
    font-size: 8px;
  }
  @media screen and (max-width: 350px) {
    padding: 2px;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: skyblue;
      color: white;
      cursor: not-allowed;
    `}
`;
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
  width: 350px;
  height: 25px;
  @media screen and (max-width: 350px) {
    width: 100%;
  }
`;
export default Pageination;
