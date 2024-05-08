import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    gap: 200px;
`

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
  color: white;
  background-color: #d3d3d3;
`;

export const LongInput = styled.input`
  width: 310px;
  height: 15px;
  border-radius: 2px;
  padding: 5px;
  color: white;
  background-color: #d3d3d3;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
