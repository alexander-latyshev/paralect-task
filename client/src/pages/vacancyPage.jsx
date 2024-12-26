import React from "react";
import { Container } from "../styles/presets";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledContainer = styled(Container)`
  gap: 15px;
  width: 100%;
  min-height: 800px;
`;

const VacancyPage = () => {
  const { pathname } = useLocation();
  const state = useSelector((state) => state);
  const vacancyLocation = pathname?.split("/");
  console.log(vacancyLocation[vacancyLocation?.length - 1]);

  return <StyledContainer>{}</StyledContainer>;
};

export default VacancyPage;
