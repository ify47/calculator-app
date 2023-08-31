import { styled } from "styled-components";

export const ThemeSelection = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textColorThree};
  text-align: center;
  margin-left: 373px;
  letter-spacing: 3px;
  margin-top: 20px;

  @media (max-width: 568px) {
    margin-left: 275px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColorThree};
  max-width: 420px;
  margin: auto;
  margin-top: -20px;
  & h3 {
    font-size: 10px;
    letter-spacing: 1px;
    padding-left: 57%;

    @media (max-width: 568px) {
      padding-left: 50%;
    }
  }

  @media (max-width: 568px) {
    max-width: 322px;
  }
`;

export const StyledToggle = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.toggleAndKeypad};
  padding: 2px 2px 3px 3px;
  border-radius: 50px;
`;

export const StyledInput = styled.input`
  width: 14px;
  height: 14px;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.toggleAndKeyBackground};
  border-radius: 50%;
  opacity: 0;
  margin: 1px 1px;
  transition: 0.25s;
  &#one:checked {
    opacity: 1;
  }

  &#two:checked {
    opacity: 1;
  }

  &#three:checked {
    opacity: 1;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.toggleAndKeyHover};
  }
`;
