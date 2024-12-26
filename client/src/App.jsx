import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "./store/api/categories";
import { fetchCurrencies } from "./store/api/currency";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter.jsx";
import { Triangle } from "react-loader-spinner";
import lightTheme from "./styles/theme.jsx";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const { status: categoriesStatus } = useSelector((state) => state.categories);
  const { status: currenciesStatus } = useSelector((state) => state.currencies);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchCurrencies());
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const MIN_LOADING_TIME = 1000;
    const startLoadingTime = Date.now();

    if (
      categoriesStatus !== "loading" &&
      currenciesStatus !== "loading" &&
      categoriesStatus !== "idle" &&
      currenciesStatus !== "idle"
    ) {
      const elapsedTime = Date.now() - startLoadingTime;
      const remainingTime = Math.max(MIN_LOADING_TIME - elapsedTime, 0);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    }
  }, [categoriesStatus, currenciesStatus]);

  if (isLoading)
    return (
      <Triangle
        height="50%"
        width="50%"
        color={lightTheme.themeColor}
        wrapperStyle={{
          position: "absolute",
          width: "100%",
          height: "100%",
          alignContent: "center",
          display: "block",
        }}
      />
    );

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
