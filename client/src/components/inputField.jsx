import styled from "styled-components";
import { useState } from "react";
import {
  MdBusiness,
  MdWork,
  MdAttachMoney,
  MdNotes,
  MdAccountBalanceWallet,
} from "react-icons/md";

const icons = {
  company: <MdBusiness />,
  position: <MdWork />,
  salaryMin: <MdAttachMoney />,
  salaryMax: <MdAttachMoney />,
  note: <MdNotes />,
  currency: <MdAccountBalanceWallet />,
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  width: 100%;
`;

const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.backgrounds.greySecondary};
  color: ${({ theme }) => theme.colors.primary};
  height: 45px;
  border: 1px solid ${({ theme }) => theme.borders.colors.lightGrey};
  border-radius: ${({ theme }) => `${theme.borders.radius.lg}`};
  padding: 0 10px 0 40px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.s || "14px"};
  color: ${({ theme }) => theme.colors.greyPrimary};
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  color: ${({ theme }) => theme.colors.greyPrimary || "#666"};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const InputField = ({
  label,
  type = "text",
  placeholder,
  iconKey,
  value,
  setValue,
}) => {
  const changeHandler = (e) => setValue(e.target.value);

  return (
    <StyledWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInputWrapper>
        {iconKey && icons[iconKey] && (
          <IconWrapper>{icons[iconKey]}</IconWrapper>
        )}
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={changeHandler}
        />
      </StyledInputWrapper>
    </StyledWrapper>
  );
};

export default InputField;
