import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 200px;
  margin-top: 20px;
  justify-content: center;
  @media (max-width: 1039px) {
    flex-direction: column;
    gap: 80px;
  }
`;

export const ContainerInterInputs = styled.div`
  display: flex;
  gap: 20px;
`;

export const InputContainerInfo = styled.li`
  display: flex;
  flex-direction: column;
`;

export const InputText = styled.label`
  color: gray;
`;

export const ShortInput = styled.input`
  width: 140px;
  height: 15px;
  border-radius: 2px;
  padding: 5px;
  color: black;
  font-family: monospace;
  border: 1px solid #ccc;
`;

export const LongInput = styled.input`
  width: 310px;
  height: 15px;
  border-radius: 2px;
  padding: 5px;
  color: black;
  font-family: monospace;
  border: 1px solid #ccc;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
