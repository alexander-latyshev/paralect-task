import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VacancyItem from "../components/vacancyItem";
import { Container } from "../styles/presets";
import styled from "styled-components";
import {
  addFavorite,
  removeFavorite,
  setPage,
} from "../store/reducers/vacanciesSlice";
import Pagination from "../components/pagination/pagination";

const StyledContainer = styled(Container)`
  gap: 15px;
  width: 100%;
  min-height: 800px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  const { items, page, totalPages, count, favorites } = useSelector(
    (state) => state.vacancies
  );
  const currencies = useSelector((state) => state.currencies.items);
  const dispatch = useDispatch();

  const toggleFavoriteHandler = (item) => {
    const isFavorite = favorites.some((fav) => fav._id === item._id);

    if (isFavorite) {
      dispatch(removeFavorite(item._id));
    } else {
      dispatch(addFavorite(item));
    }
  };

  const handlePage = (page) => {
    dispatch(setPage(page));
  };

  return (
    <StyledContainer>
      {items?.map((el, idx) => {
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
            toggleVacancy={toggleFavoriteHandler}
          />
        );
      })}
      <Pagination
        count={count}
        setPage={handlePage}
        activePage={page}
        totalPages={totalPages}
      />
    </StyledContainer>
  );
};

export default HomePage;
