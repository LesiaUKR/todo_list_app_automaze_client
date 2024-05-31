import styled from "styled-components";

export const TaskStyled = styled.main`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;
