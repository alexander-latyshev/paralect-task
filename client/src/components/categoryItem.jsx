import React from "react";
import { Link } from "react-router-dom";
import capitalizeString from "../helpers/capitalizeString";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.m};
  text-align: center;
  text-justify: center;
  height: max-content;
  color: ${({ theme, $active }) => ($active ? theme.themeColor : null)};
  border-bottom: 2px solid transparent;
  border-bottom: ${({ theme, $active }) =>
    $active ? `2px solid ${theme.themeColor}` : null};
`;

const CategoryItem = ({ name, id, path, slug, url, active }) => {
  return (
    <StyledLink to={path} id={id} $active={active}>
      {capitalizeString(name)}
    </StyledLink>
  );
};

export default CategoryItem;
