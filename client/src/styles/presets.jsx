import styled from "styled-components";

const headingStyles = {
  h1: ({ theme }) => theme.fontSizes.xl,
  h2: ({ theme }) => theme.fontSizes.l,
  h3: ({ theme }) => theme.fontSizes.m,
  h4: ({ theme }) => theme.fontSizes.sm,
  h5: ({ theme }) => theme.fontSizes.sm,
  h6: ({ theme }) => theme.fontSizes.xs,
};

const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const HeaderContainer = styled.header`
  display: flex;
  height: 80px;
  padding: 0px 50px;
  justify-content: space-between;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 60px;
  gap: 40px;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid transparent;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.themeColor : theme.backgrounds.secondary};
  display: flex;
  font-family: ${({ theme }) => theme.fontStyles.Raleway};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  justify-content: center;
  line-height: 120%;
  padding: 0;
  text-transform: uppercase;
  transition: all ${({ theme }) => theme.durations.md} ease-in-out;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  box-sizing: border-box;
  box-shadow: none;
  &:focus,
  &:focus-visible {
    outline: none;
    border-color: transparent;
  }
  &:hover {
    border-color: ${({ theme }) => theme.themeColor};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.themeColor};
  }
`;

const AuthForm = styled.form`
  position: relative;
  max-width: 400px;
  gap: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const getFontSize = (as, theme) => {
  return headingStyles[as]({ theme });
};

const Title = styled.h1.attrs((props) => ({
  as: props.as || "h1",
}))`
  font-size: ${(props) => getFontSize(props.as, props.theme)};
  line-height: 1.1;
  width: max-content;
  text-transform: capitalize;
`;

const Text = styled.span``;

const Paragraph = styled.p`
  pointer-events: none;
  font-family: ${({ theme }) => theme.fontStyles.Raleway};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export {
  Flex,
  Column,
  Button,
  HeaderContainer,
  MainContainer,
  Title,
  Container,
  AuthForm,
  Paragraph,
  Text,
};
