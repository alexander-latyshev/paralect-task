import styled from "styled-components";
import { Button } from "../../styles/presets";

const StyledContainer = styled(Button)`
  width: 40px;
  height: 40px;
  background-color: ${({ theme, $active }) =>
    !$active ? theme.colors.greySecondary : theme.themeColor};
  color: white;
  align-content: center;
  cursor: pointer;
  justify-content: center;
  display: flex;
`;

const Text = styled.span`
  height: max-content;
  color: white;
  width: max-content;
  overflow: visible;
`;

const PaginationItem = ({ pageNumber, setPage, activePage, isDisabled }) => {
  if (isDisabled) return null;
  return (
    <StyledContainer
      onClick={() => setPage(pageNumber)}
      $active={activePage === pageNumber}
    >
      <Text>{pageNumber}</Text>
    </StyledContainer>
  );
};

export default PaginationItem;
