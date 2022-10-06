import styled, { css } from "styled-components";

const Pageination = ({ onPageChange, setPage, totalPage, nowPage }) => {
  const lastPage = Math.ceil(totalPage / 10);
  const startPage = Math.ceil(nowPage / 10) * 10 - 9;
  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9;
  const pageList = [];

  const onClick = (n) => {
    setPage(n);
    onPageChange((prev) => ({ ...prev, start: n * 40 }));
  };

  console.log(startPage);
  console.log(nowPage);
  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  if (totalPage === undefined) return;
  else
    return (
      <List>
        {nowPage > 1 && (
          <Page
            // onClick={() => {
            //   onPageChange((prev) => ({ ...prev, start: nowPage - 1 }));
            // }}
            onClick={() => onClick(nowPage - 1)}
          >
            이전
          </Page>
        )}

        {pageList.map((page) => {
          return (
            <Page
              key={page}
              isActive={nowPage === page}
              // onClick={() => onPageChange((prev) => ({ ...prev, start: page }))}
              onClick={() => onClick(page)}
            >
              {page}
            </Page>
          );
        })}

        {nowPage < lastPage && nowPage <= 25 && (
          <Page
            // onClick={() => {
            //   onPageChange((prev) => ({ ...prev, start: nowPage + 1 }));
            // }}
            onClick={() => onClick(nowPage + 1)}
          >
            다음
          </Page>
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
`;
export default Pageination;
