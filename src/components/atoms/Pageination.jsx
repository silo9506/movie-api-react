import styled, { css } from "styled-components";

const Pageination = ({ onPageChange, setPage, totalPage, nowPage }) => {
  const lastPage = Math.ceil(totalPage / 10);
  let startPage = Math.ceil(nowPage / 10) * 10 - 9;
  // if (nowPage === 0) {
  //   startPage = Math.ceil((nowPage + 1) / 10) * 10 - 9;
  // }
  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9;
  const pageList = [];
  console.log(totalPage);
  console.log(nowPage);
  console.log(startPage);
  console.log(endPage);
  console.log(lastPage);

  const onClick = (n) => {
    console.log("다음페이지는" + n);
    const result = async () => {
      await setPage(n);
      await onPageChange();
      console.log("페이지 체인지");
    };
    result();
  };

  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  if (totalPage === undefined) return;
  else
    return (
      <List>
        {nowPage > 1 && <Page onClick={() => onClick(nowPage - 1)}>이전</Page>}

        {pageList.map((page) => {
          return (
            <Page
              key={page}
              isActive={nowPage === page}
              onClick={() => onClick(page)}
            >
              {page}
            </Page>
          );
        })}
        {nowPage < lastPage && (
          <Page onClick={() => onClick(nowPage + 1)}>다음</Page>
        )}
      </List>
    );
};

const Page = styled.button`
  cursor: pointer;
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
  margin: auto;
  width: 300px;
  height: 100px;
`;
export default Pageination;
