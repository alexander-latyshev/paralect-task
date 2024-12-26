const LIMIT_VACANCIES = import.meta.env.VITE_REACT_APP_LIMIT_VACANCIES;
const SERVER_URL = import.meta.env.VITE_REACT_APP_API_URL;
const HOMEPAGE_ROUTE = "/vacancies";
const VACANCY_ROUTE = "/vacancies/:id";
const MY_VACANCIES_ROUTE = "/my-vacancies";
const LIMIT_ITEMS = import.meta.env.VITE_REACT_APP_LIMIT_ITEMS;

export {
  SERVER_URL,
  LIMIT_VACANCIES,
  LIMIT_ITEMS,
  MY_VACANCIES_ROUTE,
  HOMEPAGE_ROUTE,
  VACANCY_ROUTE,
};
