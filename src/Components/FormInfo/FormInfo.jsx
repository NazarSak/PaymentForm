import { useState } from "react";
import {
  Form,
  ContainerInterInputs,
  InputContainerInfo,
  InputText,
  ShortInput,
  LongInput,
  List,
} from "./FormInfo.styled";

const FormInfo = () => {
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

  const [logo, setLogo] = useState(null);
  const [logoUrl, setLogoUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
    setLogoUrl(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithLogo = { ...formData, logo };
    console.log(formDataWithLogo);
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <List>
          <ContainerInterInputs>
            <InputContainerInfo>
              <InputText htmlFor="fname">Ім'я</InputText>

              <ShortInput
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </InputContainerInfo>
          </ContainerInterInputs>

          <InputContainerInfo>
            <InputText htmlFor="company">Назва компанії,організації</InputText>
            <LongInput
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </InputContainerInfo>

          {/* <InputContainerInfo>
          <InputText htmlFor="logo">Логотип компанії:</InputText>

          <LongInput
            type="file"
            id="logo"
            name="logo"
            accept="image/*"
            onChange={handleLogoChange}
          />
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Логотип"
              style={{ maxWidth: "200px", marginTop: "10px" }}
            />
          )}
        </InputContainerInfo> */}

          <InputContainerInfo>
            <InputText htmlFor="email">Email адрес</InputText>
            <LongInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <InputText htmlFor="state">Штат,Район</InputText>
              <ShortInput
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputText htmlFor="postalCode">Поштовий індекс</InputText>
            <ShortInput
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
        </List>
      </Form>
    </div>
  );
};

export default FormInfo;
