import PropTypes from "prop-types";
import {
  Form,
  ContainerInterInputs,
  InputContainerInfo,
  InputText,
  ShortInput,
  LongInput,
  List,
} from "./FormInfo.styled";

const FormInfo = ({ formData, setFormData, onSubmit }) => {
  return (
    <div className="form-container">
      <Form onSubmit={ onSubmit}>
        <List>
          <ContainerInterInputs>
            <InputContainerInfo>
              <InputText htmlFor="fname">Ім&#39;я</InputText>
              <ShortInput
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={(e) => {
                  setFormData({ ...formData, fname: e.target.value });
                  e.target.classList.remove("invalid");
                }}
                required
              />
            </InputContainerInfo>
            <InputContainerInfo>
              <InputText htmlFor="lname">Фамілія</InputText>
              <ShortInput
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={(e) => {
                  setFormData({ ...formData, lname: e.target.value });
                  e.target.classList.remove("invalid");
                }}
                required
              />
            </InputContainerInfo>
          </ContainerInterInputs>

          <InputContainerInfo>
            <InputText htmlFor="company">Назва компанії, організації</InputText>
            <LongInput
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={(e) => {
                setFormData({ ...formData, company: e.target.value });
                e.target.classList.remove("invalid");
              }}
            />
          </InputContainerInfo>

          <InputContainerInfo>
            <InputText htmlFor="email">Email адрес</InputText>
            <LongInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                e.target.classList.remove("invalid");
              }}
              required
            />
          </InputContainerInfo>

          <InputContainerInfo>
            <InputText htmlFor="phone">Номер телефону</InputText>
            <LongInput
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                e.target.classList.remove("invalid");
              }}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </InputContainerInfo>
        </List>
        <List>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputText htmlFor="country">Країна</InputText>
            <LongInput
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={(e) => {
                setFormData({ ...formData, country: e.target.value });
                e.target.classList.remove("invalid");
              }}
            />
          </div>

          <ContainerInterInputs>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <InputText htmlFor="city">Місто</InputText>
              <ShortInput
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={(e) => {
                  setFormData({ ...formData, city: e.target.value });
                  e.target.classList.remove("invalid");
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <InputText htmlFor="state">Штат, Район</InputText>
              <ShortInput
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={(e) => {
                  setFormData({ ...formData, state: e.target.value });
                  e.target.classList.remove("invalid");
                }}
              />
            </div>
          </ContainerInterInputs>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputText htmlFor="address">Адреса</InputText>
            <LongInput
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) => {
                setFormData({ ...formData, address: e.target.value });
                e.target.classList.remove("invalid");
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputText htmlFor="postalCode">Поштовий індекс</InputText>
            <ShortInput
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={(e) => {
                setFormData({ ...formData, postalCode: e.target.value });
                e.target.classList.remove("invalid");
              }}
            />
          </div>
        </List>
      </Form>
    </div>
  );
};

FormInfo.propTypes = {
  formData: PropTypes.shape({
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
    company: PropTypes.string,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    country: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    address: PropTypes.string,
    postalCode: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormInfo;
