import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import InputField from "./inputField";
import { Button, Column, Flex, Title } from "../styles/presets";
import { useDispatch, useSelector } from "react-redux";
import { postVacancy } from "../store/api/vacancies";

const Container = styled(Flex)`
  justify-content: end;
`;

const modalStyles = {
  content: {
    width: "400px",
    margin: "auto",
    gap: 20,
    display: "flex",
    flexDirection: "column",
    height: "max-content",
  },
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  align-self: center;
`;

const Select = styled.select`
  height: 45px;
  width: 100%;
  padding-left: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borders.colors.lightGrey};
  background-color: ${({ theme }) => theme.backgrounds.greySecondary};
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.greyPrimary};
`;

const Option = styled.option`
  font-size: 16px;
  cursor: pointer;
`;

const ModalCreateVacancy = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.currencies);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    salary: {
      min: "",
      max: "",
      currency: "",
    },
    company: "",
    position: "",
    note: "",
  });
  const [isOpen, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    console.log("Form submitted:", formData);
    await dispatch(postVacancy(formData));
    setOpen(false);
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (items.length > 0) {
      setFormData((prevState) => ({
        ...prevState,
        salary: {
          ...prevState.salary,
          currency: items[0]?.name,
        },
      }));
    }
  }, [items]);

  return (
    <Container>
      <StyledButton onClick={() => setOpen(!isOpen)}>+</StyledButton>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        style={modalStyles}
        ariaHideApp={false}
      >
        <Title as="h2">Create New Vacancy</Title>
        <Form onSubmit={handleSubmit}>
          <InputField
            label="Company Name"
            iconKey="company"
            value={formData.company}
            setValue={(val) =>
              setFormData((prev) => ({ ...prev, company: val }))
            }
          />
          <InputField
            label="Position"
            iconKey="position"
            value={formData.position}
            setValue={(val) =>
              setFormData((prev) => ({ ...prev, position: val }))
            }
          />
          <Wrapper>
            <InputField
              label="Min Salary"
              type="number"
              iconKey="salaryMin"
              value={formData.salary.min}
              setValue={(val) =>
                setFormData((prev) => ({
                  ...prev,
                  salary: { ...prev.salary, min: val },
                }))
              }
            />
            <InputField
              label="Max Salary"
              type="number"
              iconKey="salaryMax"
              value={formData.salary.max}
              setValue={(val) =>
                setFormData((prev) => ({
                  ...prev,
                  salary: { ...prev.salary, max: val },
                }))
              }
            />

            <Column style={{ gap: 5, width: "70%" }}>
              <StyledLabel>Currency</StyledLabel>
              <Select
                value={formData.salary.currency}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    salary: { ...prev.salary, currency: e.target.value },
                  }))
                }
              >
                {items?.map((currency) => (
                  <Option key={currency._id} value={currency.name}>
                    {currency.symbol} {currency.name}
                  </Option>
                ))}
              </Select>
            </Column>
          </Wrapper>
          <InputField
            label="Notes"
            iconKey="note"
            value={formData.note}
            setValue={(val) => setFormData((prev) => ({ ...prev, note: val }))}
          />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      </Modal>
    </Container>
  );
};

export default ModalCreateVacancy;
