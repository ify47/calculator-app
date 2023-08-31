import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

export const StyledToggle = styled.div`
  display: flex;
  justify-content: center;
  background-color: hsl(223, 31%, 20%);
  padding: 2px 2px 3px 0;
  border-radius: 50px;
`;

export const StyledInput = styled.input`
  width: 14px;
  height: 14px;
  appearance: none;
  background-color: red;
  border-radius: 50%;
  opacity: 0;
  margin: 1px 1px;
  &#one:checked {
    opacity: 1;
  }

  &#two:checked {
    opacity: 1;
  }

  &#three:checked {
    opacity: 1;
  }
`;
