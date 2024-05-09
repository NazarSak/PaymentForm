import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Title = styled.h2`
  color: #0d3d56;
  font-size: 45px;
  font-weight: 900;
`;

export const PhysPerson = styled.div`
  background-color: #0d3d56;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 35px;
  border-radius: 5px;
`;

export const PhysPersonText = styled.p`
  color: white;
`;

export const SubmitButton = styled.button`
  width: 250px;
  height: 50px;
  background: linear-gradient(to right, #ff0000, #800080);
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.7s ease;

  &:hover {
    background: linear-gradient(to right, #cc0000, #660066);
    background-color: red;
  }
`;
