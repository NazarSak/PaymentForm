import { useState } from "react";
import FormInfo from "./FormInfo/FormInfo";
import FormPay from "./FormPay/FormPay";
import Notiflix from "notiflix";
import {
  TitleContainer,
  Title,
  PhysPerson,
  PhysPersonText,
  SubmitButton,
} from "./App.styled";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    address: "",
    postalCode: "",
  });

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const validateForm = () => {
    // Перевірка наявності введених даних для особистих даних
    const isPersonalInfoValid = Object.values(formData).every(
      (value) => value !== ""
    );

    // Перевірка наявності введених даних для кредитної картки
    const isCreditCardValid = cardNumber !== "" && expiry !== "" && cvc !== "";

    // Повертаємо true, якщо і особисті дані, і дані картки є валідними
    return isPersonalInfoValid && isCreditCardValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setFormData({
        fname: "",
        lname: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        state: "",
        address: "",
        postalCode: "",
      });
      setCardNumber("");
      setExpiry("");
      setCVC("");
      setSelectedPaymentMethod("");
      Notiflix.Notify.success("Дякуємо за допомогу!");
    } else {
      // Створимо рядок для зберігання повідомлення про помилку
      let errorMessage = "Будь ласка, введіть всі необхідні дані:";

      let invalidFields = [];
      if (formData.fname === "") invalidFields.push("fname");
      if (formData.company === "") invalidFields.push("company");
      if (formData.country === "") invalidFields.push("country");
      if (formData.city === "") invalidFields.push("city");
      if (formData.address === "") invalidFields.push("address");
      if (formData.postalCode === "") invalidFields.push("postalCode");
      if (formData.state === "") invalidFields.push("state");
      if (formData.lname === "") invalidFields.push("lname");
      if (formData.email === "") invalidFields.push("email");
      if (formData.phone === "") invalidFields.push("phone");
      if (cardNumber === "") invalidFields.push("cardNumber");
      if (expiry === "") invalidFields.push("expiry");
      if (cvc === "") invalidFields.push("cvc");

      invalidFields.forEach((field) => {
        const inputField = document.querySelector(`input[name="${field}"]`);
        if (inputField) {
          inputField.classList.add("invalid");
        }
      });
      Notiflix.Notify.failure(errorMessage);
    }
  };

  return (
    <main>
      <TitleContainer>
        <Title>Заповніть форму</Title>
        <PhysPerson>
          <PhysPersonText>Фіз. Особа</PhysPersonText>
        </PhysPerson>
      </TitleContainer>
      <FormInfo
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
      <TitleContainer>
        <Title>Види Допомоги</Title>
        <p>Наразі лише фінансова допомога</p>
      </TitleContainer>
      <FormPay
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        expiry={expiry}
        setExpiry={setExpiry}
        cvc={cvc}
        setCVC={setCVC}
        selectedPaymentMethod={selectedPaymentMethod}
        setSelectedPaymentMethod={setSelectedPaymentMethod}
      />
      <SubmitButton onClick={handleSubmit}>Допомогти</SubmitButton>
    </main>
  );
}

export default App;
