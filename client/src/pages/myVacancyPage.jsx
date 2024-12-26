import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../styles/presets";
import VacancyItem from "../components/vacancyItem";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  gap: 15px;
  width: 100%;
  min-height: 800px;
`;

const MyVacancyPage = () => {
  const { favorites } = useSelector((state) => state.vacancies);
  const currencies = useSelector((state) => state.currencies.items);

  return (
    <StyledContainer>
      {favorites?.map((el, idx) => {
        const currentCurrency = currencies.find(
          (curr) => curr?.name === el?.salary.currency
        );
        return (
          <VacancyItem
            key={idx}
            min={el.salary.min}
            max={el.salary.max}
            currency={el.salary.currency}
            symbol={currentCurrency?.symbol}
            id={el._id}
            company={el.company}
            position={el.position}
            status={el.status}
            note={el.note}
            isFavorite={favorites?.find((fav) => fav._id === el._id)}
          />
        );
      })}
    </StyledContainer>
  );
};

export default MyVacancyPage;
