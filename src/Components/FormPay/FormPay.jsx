import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import VisaLogo from "../../assets/visaLogo.png";
import Private24 from "../../assets/Private24.png";
import Terminal from "../../assets/Terminal.png";
import WebMoney from "../../assets/WebMoney.png";
import PayPal from "../../assets/PayPal.png";

import {
  Section,
  PaymentMethods,
  CardDetails,
  StyledCards,
  List,
  ListElement,
  Button,
  TextInButton,
} from "./FormPay.styled";
import "react-credit-cards/es/styles-compiled.css";

const FormPay = ({
  cardNumber,
  setCardNumber,
  expiry,
  setExpiry,
  cvc,
  setCVC,
  onPaymentMethodSelect,
  selectedPaymentMethod,
}) => {
  const [focus, setFocus] = useState(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        // Додайте вашу логіку тут
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (color, method) => {
    // Додайте вашу логіку тут
    onPaymentMethodSelect(method);
  };

  return (
    <Section>
      <PaymentMethods>
        <h2>Спосіб оплати</h2>
        <List>
          <ListElement>
            <Button
              ref={buttonRef}
              onClick={() => handleButtonClick("purple", "Visa")}
              background={
                selectedPaymentMethod === "Visa" ? "purple" : "transparent"
              }
            >
              <img width="50" height="15" src={VisaLogo} alt="VisaLogo" />
              <TextInButton>Карта Visa/ MasterCard</TextInButton>
            </Button>
          </ListElement>
          <ListElement>
            <Button
              ref={buttonRef}
              onClick={() => handleButtonClick("purple", "Приват 24")}
              background={
                selectedPaymentMethod === "Приват 24" ? "purple" : "transparent"
              }
            >
              <img width="80" height="20" src={Private24} alt="Private24" />
              <TextInButton>Приват 24</TextInButton>
            </Button>
          </ListElement>
          <ListElement>
            <Button
              ref={buttonRef}
              onClick={() => handleButtonClick("purple", "Термінал України")}
              background={
                selectedPaymentMethod === "Термінал України"
                  ? "purple"
                  : "transparent"
              }
            >
              <img width="50" height="40" src={Terminal} alt="Terminal" />
              <TextInButton>Термінал України</TextInButton>
            </Button>
          </ListElement>
          <ListElement>
            <Button
              ref={buttonRef}
              onClick={() => handleButtonClick("purple", "Webmoney")}
              background={
                selectedPaymentMethod === "Webmoney" ? "purple" : "transparent"
              }
            >
              <img width="70" height="50" src={WebMoney} alt="WebMoney" />
              <TextInButton>Web Money</TextInButton>
            </Button>
          </ListElement>
          <ListElement>
            <Button
              ref={buttonRef}
              onClick={() => handleButtonClick("purple", "PayPal")}
              background={
                selectedPaymentMethod === "PayPal" ? "purple" : "transparent"
              }
            >
              <img width="60" height="50" src={PayPal} alt="PayPal" />
              <TextInButton>PayPal</TextInButton>
            </Button>
          </ListElement>
        </List>
      </PaymentMethods>
      <CardDetails>
        <div>
          <p>Інформація про картку:</p>
          <StyledCards
            number={cardNumber}
            name=""
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </div>
        <form>
          <input
            type="tel"
            name="cardNumber"
            placeholder="Номер картки"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            onFocus={() => setFocus("number")}
          />
          <input
            type="text"
            name="expiry"
            placeholder="Термін дії (мм/рр)"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={() => setFocus("expiry")}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCVC(e.target.value)}
            onFocus={() => setFocus("cvc")}
          />
        </form>
      </CardDetails>
    </Section>
  );
};

FormPay.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  setCardNumber: PropTypes.func.isRequired,
  expiry: PropTypes.string.isRequired,
  setExpiry: PropTypes.func.isRequired,
  cvc: PropTypes.string.isRequired,
  setCVC: PropTypes.func.isRequired,
  onPaymentMethodSelect: PropTypes.func.isRequired,
  selectedPaymentMethod: PropTypes.string.isRequired,
};

export default FormPay;
