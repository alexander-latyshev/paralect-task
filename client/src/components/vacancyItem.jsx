import React from "react";
import { Button, Column, Flex, Paragraph, Title } from "../styles/presets";
import styled from "styled-components";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { Link, redirect } from "react-router-dom";

const StyledLink = styled(Link)`
  width: 100%;
`;

const Container = styled(Column)`
  width: 80%;
  justify-self: center;
  align-self: center;
  padding: 16px;
  background: ${({ theme }) => theme.backgrounds.white};
  filter: drop-shadow(0 4px 35px ${({ theme }) => theme.shadows.drop});
  cursor: pointer;
  box-shadow: 0 4px 35px ${({ theme }) => theme.shadows.drop};
  gap: 10px;
  text-align: start;
  outline: 1px solid ${({ theme }) => theme.borders.colors.white};
  &:hover {
    outline: 1px solid ${({ theme }) => theme.borders.colors.darkGrey};
    box-shadow: 0 4px 35px ${({ theme }) => theme.shadows.drop};
  }
`;

const Wrapper = styled(Flex)`
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  margin: 0;
  padding: 5px;
  border-radius: 100%;
  background-color: ${({ theme, $isFavorite }) =>
    $isFavorite ? theme.themeColor : theme.colors.greySecondary};
  ${({ $isFavorite }) =>
    !$isFavorite &&
    `
    outline: none;
    border-color: ${({ theme }) => theme.borders.colors.white};
    box-shadow: none !important;
    &:hover {
      border-color: transparent;
      box-shadow: none !important;
    }
  `}
`;

const VacancyItem = ({
  min,
  max,
  currency,
  id,
  company,
  position,
  status,
  note,
  symbol,
  isFavorite,
  toggleVacancy,
}) => {
  return (
    <Container>
      <StyledLink to={id}>
        <Wrapper>
          <Title as="h3">{position}</Title>

          <StyledButton
            $isFavorite={isFavorite}
            onClick={() => {
              e.preventDefault();

              toggleVacancy({
                salary: {
                  min,
                  max,
                  currency,
                },
                _id: id,
                company,
                position,
                status,
                note,
                symbol,
              });
            }}
          >
            <FaHeartCircleCheck size={26} />
          </StyledButton>
        </Wrapper>
        <Paragraph>{`${min}-${max} ${symbol}`}</Paragraph>
        <Paragraph>{company}</Paragraph>
        <Paragraph>{note}</Paragraph>
      </StyledLink>
    </Container>
  );
};

export default VacancyItem;
