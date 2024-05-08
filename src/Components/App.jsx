import { useState } from "react";
import FormInfo from "./FormInfo/FormInfo";
import {
  TitleContainer,
  Title,
  PhysPerson,
  PhysPersonText,
} from "./App.styled";

function App() {
  return (
    <>
      <TitleContainer>
        <Title>Заповніть форму</Title>
        <PhysPerson>
          <PhysPersonText>Фіз. Особа</PhysPersonText>
        </PhysPerson>
      </TitleContainer>
      <FormInfo />
    </>
  );
}

export default App;
