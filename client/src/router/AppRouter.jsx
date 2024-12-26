import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import {
  HOMEPAGE_ROUTE,
  MY_VACANCIES_ROUTE,
  VACANCY_ROUTE,
  LIMIT_ITEMS,
} from "../consts";
import RootLayout from "../layouts/rootLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchVacancies } from "../store/api/vacancies";
import MyVacancyPage from "../pages/myVacancyPage";
import HomePage from "../pages/homePage";
import VacancyPage from "../pages/vacancyPage";

const AppRouter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Получаем текущий путь

  const { status: categoriesStatus } = useSelector((state) => state.categories);
  const { status: currenciesStatus } = useSelector((state) => state.currencies);
  const { status: vacanciesStatus, page } = useSelector(
    (state) => state.vacancies
  );

  useEffect(() => {
    if (categoriesStatus === "success" && currenciesStatus === "success") {
      dispatch(fetchVacancies({ page, limit: LIMIT_ITEMS }));
    }
  }, [categoriesStatus, currenciesStatus, page, dispatch]);

  useEffect(() => {
    if (location.pathname === "/" && vacanciesStatus === "success") {
      navigate(HOMEPAGE_ROUTE);
    }
  }, [vacanciesStatus, location.pathname, navigate]);

  return (
    <Routes>
      <Route path="" element={<RootLayout />}>
        <Route path={HOMEPAGE_ROUTE} element={<HomePage />} />
        <Route path={MY_VACANCIES_ROUTE} element={<MyVacancyPage />} />
        <Route path={VACANCY_ROUTE} element={<VacancyPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
