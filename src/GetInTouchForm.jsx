import React, { useState } from "react";
import styled from "styled-components";

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    service: "",
    vehicleModel: "",
    year: "",
    paintColor: "",
    bookingDate: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    console.log(formData);
  };

  return (
    <MainContainer>
      <Heading>Get in <span>Touch</span></Heading>

      <FormContainer>
        <form onSubmit={handleSubmit}>
          
          <Select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select a Service</option>
            <option value="Ceramic Coating">Ceramic Coating</option>
            <option value="Interior Detailing">Interior Detailing</option>
            <option value="Paint Protection">Paint Protection</option>
            <option value="Car Wash">Car Wash</option>
          </Select>

          <FlexRow>
            <Input name="vehicleModel" placeholder="Vehicle Model" value={formData.vehicleModel} onChange={handleChange} required />
            <Input name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
          </FlexRow>

          <FlexRow>
            <Input name="paintColor" placeholder="Paint Color" value={formData.paintColor} onChange={handleChange} required />
            <Input type="date" name="bookingDate" value={formData.bookingDate} onChange={handleChange} required />
          </FlexRow>

          <FlexRow>
            <Input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <Input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          </FlexRow>

          <FlexRow>
            <Input type="tel" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
            <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          </FlexRow>

          <TextArea name="additionalInfo" placeholder="Additional Info (Optional)" value={formData.additionalInfo} onChange={handleChange} />

          <Button type="submit">Submit</Button>

        </form>
      </FormContainer>
    </MainContainer>
  );
};

// ✅ Styled Components
const MainContainer = styled.div`
  width: 100%;
  text-align: center;
  background: #f5f5f5;

  
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;
  width: 90%;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
  span {
    color: red;
  }
`;

const FormContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin: auto;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 15px;
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;

  &:focus {
    border-bottom: 2px solid red;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;
  min-height: 100px;
  margin-bottom: 15px;

  &:focus {
    border-bottom: 2px solid red;
  }
`;

const Button = styled.button`
  width: 30%;
  padding: 12px;
  background: red;
  color: white;
  border: none;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: darkred;
  }
`;

export default GetInTouchForm;
