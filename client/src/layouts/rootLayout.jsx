import { Outlet, useLocation } from "react-router";
import Header from "../components/header";
import { MainContainer, Title } from "../styles/presets";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const { pathname } = useLocation();
  const { items } = useSelector((state) => state.categories);
  return (
    <>
      <Header />
      <MainContainer>
        <Title>{items.find((el) => el.path === pathname)?.name}</Title>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default RootLayout;
