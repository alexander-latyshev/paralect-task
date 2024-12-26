import React, { useState } from "react";
import { Button, Flex, HeaderContainer } from "../styles/presets";
import { useSelector } from "react-redux";
import CategoryItem from "./categoryItem";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ModalCreateVacancy from "./ModalCreateVacancy";

const StyledFlex = styled(Flex)`
  align-items: center;
  justify-items: center;
  gap: 20px;
  /* justify-content: space-between; */
`;

const Header = () => {
  const { items } = useSelector((state) => state.categories);
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <StyledFlex>
        {items?.map((el, idx) => {
          return (
            <CategoryItem
              name={el.name}
              key={idx}
              path={el.path}
              slug={el.slug}
              url={el.url}
              active={pathname === el.path}
            />
          );
        })}
      </StyledFlex>
      <ModalCreateVacancy />
    </HeaderContainer>
  );
};

export default Header;
