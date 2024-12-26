import { Button, Flex } from "../../styles/presets";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import React from "react";
import { BiArrowFromRight, BiArrowFromLeft } from "react-icons/bi";
import PaginationItem from "./paginationItem";

const StyledContainer = styled(Flex)`
  align-self: center;
  justify-self: center;
  justify-content: center;
  width: auto;
  gap: 10px;
  align-items: center;
  margin-top: auto;
`;

const Wrapper = styled(Flex)`
  gap: 5px;
  overflow: visible;
`;

const StyledButton = styled(Button)`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.greySecondary};
`;

const Pagination = ({ count, setPage, activePage, totalPages }) => {
  const [arrayOfPages, setArrayOfPages] = useState([]);

  useEffect(() => {
    if (count) {
      const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
      setArrayOfPages(pages);
    }
  }, [count, totalPages]);

  const setPageHandler = (page) => {
    if (page === activePage) return;
    setPage(page);
  };
  console.log(arrayOfPages);

  return (
    <StyledContainer>
      <StyledButton onClick={() => setPage(1)} disabled={activePage === 1}>
        <BiArrowFromRight color="white" size={20} />
      </StyledButton>
      <Wrapper>
        {arrayOfPages?.map((el, idx) => {
          const isDisabled = el + 2 <= activePage || el - 2 >= activePage;
          return (
            <PaginationItem
              pageNumber={el}
              activePage={activePage}
              key={idx}
              setPage={setPageHandler}
              isDisabled={isDisabled}
            />
          );
        })}
      </Wrapper>
      <StyledButton
        onClick={() => setPage(totalPages)}
        disabled={activePage === totalPages}
      >
        <BiArrowFromLeft color="white" size={20} />
      </StyledButton>
    </StyledContainer>
  );
};

export default Pagination;
