import { styled } from "styled-components";

export const InputsField = styled.div`
  font-size: 42px;
  background-color: ${({ theme }) => theme.colors.calcBackground};
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.textColorThree};
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 33px 24px;
  height: 45px;
  overflow-y: scroll;
  word-break: break-all;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledButtons = styled.div`
  background-color: ${({ theme }) => theme.colors.toggleAndKeypad};
  border-radius: 10px;
  margin-top: 17px;
  padding: 13px;
`;

export const Buttons = styled.button`
  font-family: League Spartan;
  background-color: ${({ theme }) => theme.colors.keyBackgroundTwo};
  margin: 8px;
  border-radius: 10px;
  border: none;
  width: 84px;
  height: 54px;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: inset 0px -3.3px 0px 0px ${({ theme }) => theme.colors.specialKeyShadowTwo};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.keyBackgroundTwoHover};
  }

  @media (max-width: 568px) {
    width: 58px;
    height: 65px;
  }
`;

export const SpecialChar = styled(Buttons)`
  background-color: ${({ theme }) => theme.colors.keyBackground};
  box-shadow: inset 0px -3.3px 0px 0px ${({ theme }) => theme.colors.keyShadow};
  color: ${({ theme }) => theme.colors.textColorTwo};
  font-size: 25px;
  height: ${(props) => props.value === "del" && "56px"};
  padding-top: ${(props) => props.value === "del" && "3px"};
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.value === "="
        ? props.theme.colors.toggleAndKeyHover
        : props.theme.colors.keyHover};
  }

  @media (max-width: 568px) {
    font-size: 20px;
    height: ${(props) => props.value === "del" && "65px"};
    padding-top: ${(props) => props.value === "del" && "4px"};
  }
`;

export const LastSpecialChar = styled(SpecialChar)`
  width: 184px;
  background-color: ${(props) =>
    props.value === "=" && props.theme.colors.toggleAndKeyBackground};
  box-shadow: inset 0px -3.3px 0px 0px ${(props) => (props.value === "=" ? props.theme.colors.specialKeyShadow : props.theme.colors.keyShadow)};
  color: ${({ value, theme }) => value === "=" && theme.colors.textColorFour};
  @media (max-width: 568px) {
    width: 132px;
  }
`;
