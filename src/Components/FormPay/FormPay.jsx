import { useRef, useState } from "react";
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
}) => {
  const [focus, setFocus] = useState(null);

  const visaRef = useRef(null);
  const private24Ref = useRef(null);
  const terminalRef = useRef(null);
  const webmoneyRef = useRef(null);
  const paypalRef = useRef(null);

  const handleButtonClick = (method) => {
    const buttonRefs = {
      Visa: visaRef,
      Приват24: private24Ref,
      "Термінал України": terminalRef,
      Webmoney: webmoneyRef,
      PayPal: paypalRef,
    };

    Object.keys(buttonRefs).forEach((key) => {
      const ref = buttonRefs[key];
      if (key === method) {
        ref.current.style.backgroundColor = "#a394fc";
      } else {
        ref.current.style.backgroundColor = "#e1e8fa";
      }
    });
  };

  return (
    <Section>
      <PaymentMethods>
        <p>Спосіб оплати</p>
        <List>
          <ListElement>
            <Button
              ref={visaRef}
              id="visa"
              onClick={() => handleButtonClick("Visa")}
            >
              <img width="50" height="15" src={VisaLogo} alt="VisaLogo" />
              <TextInButton>Карта Visa/ MasterCard</TextInButton>
            </Button>
          </ListElement>
          <ListElement>
            <Button
              ref={private24Ref}
              id="private24"
              onClick={() => handleButtonClick("Приват24")}
            >
              <img width="80" height="20" src={Private24} alt="Private24" />
              <TextInButton>Приват 24</TextInButton>
            </Button>
          </ListElement>
          <ListElement>
            <Button
              ref={terminalRef}
              id="terminal"
              onClick={() => handleButtonClick("Термінал України")}
            >
              <img width="50" height="40" src={Terminal} alt="Terminal" />
              <TextInButton>Термінал України</TextInButton>
            </Button>
          </ListElement>
          <ListElement>
            <Button
              ref={webmoneyRef}
              id="webmoney"
              onClick={() => handleButtonClick("Webmoney")}
            >
              <img width="70" height="50" src={WebMoney} alt="WebMoney" />
              <TextInButton>Web Money</TextInButton>
            </Button>
          </ListElement>
          <ListElement>
            <Button
              ref={paypalRef}
              id="paypal"
              onClick={() => handleButtonClick("PayPal")}
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
            onChange={(e) => {
              const input = e.target.value.replace(/\D/g, ""); // Видаляє всі символи, крім цифр
              if (input.length <= 16) {
                setCardNumber(input);
              }
            }}
            pattern="\d*"
            onFocus={() => setFocus("number")}
          />
          <input
            type="text"
            name="expiry"
            placeholder="Термін дії (мм/рр)"
            value={expiry}
            onChange={(e) => {
              const input = e.target.value.replace(/\D/g, ""); // Видаляє всі символи, крім цифр
              if (input.length <= 4) {
                setExpiry(input.replace(/(\d{2})(\d{2})/, "$1/$2")); // Автоматично додає "/" між місяцем і роком
              }
            }}
            pattern="\d{2}/\d{2}"
            onFocus={() => setFocus("expiry")}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => {
              const input = e.target.value.replace(/\D/g, ""); // Видаляє всі символи, крім цифр
              if (input.length <= 3) {
                setCVC(input);
              }
            }}
            pattern="\d*"
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
  selectedPaymentMethod: PropTypes.string.isRequired,
};

export default FormPay;
