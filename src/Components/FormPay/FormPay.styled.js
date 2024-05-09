import styled from "styled-components";
import Cards from "react-credit-cards";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1039px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const StyledCards = styled(Cards)`
  margin: auto;
`;

export const PaymentMethods = styled.div`
  margin-bottom: 20px;
`;

export const PaymentTitle = styled.p`
  margin-bottom: 10px;

  color: gray;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 700px;
`;

export const ListElement = styled.li`
  height: 100px;
  width: 200px;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: #e1e8fa;
  transition: all 0.75s;
  &:hover {
    border-color: #646cff;
  }
`;

export const TextInButton = styled.p`
  color: white;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  p {
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      margin-bottom: 10px;
      padding: 10px;
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }
  }
`;
