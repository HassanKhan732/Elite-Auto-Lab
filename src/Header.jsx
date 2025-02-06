import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa"; // For the phone icon
import logo from './assets/logo.jpg';

const mainContainer = styled.body`
  margin:0;
  padding:0px;
  box-sizing:border-box;

`
const HeaderWrapper = styled.div`
  display: flex;
  height: 17px;

  @media (max-width: 768px) {
    height: 12px;
  }
`;

const FirstColor = styled.div`
  width: 32.33%;
  background-color: #ffffff;
  transform: skewX(-50deg);
  transform-origin: left;
`;

const SecondColor = styled.div`
  width: 32.33%;
  background-color: red;
  transform: skewX(-50deg);
  transform-origin: left;
`;

const ThirdColor = styled.div`
  width: 32.33%;
  background-color: green;
  transform: skewX(-50deg);
  transform-origin: right;
`;

const SecondHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: #ffff;
background-color: #000000;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  .span{
    font-size: 2rem;

  }
.right{
    width: 30%;
    display: flex;
    justify-content: space-between;
}
.left{
    display: flex;
    align-items: center;
    gap: 1rem;
}
`;

const Logo = styled.img`
  height: 40px;
border-radius: 50%;
  @media (max-width: 768px) {
    height: 30px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #ffff;
    font-weight: bold;

    &:hover {
      color: red;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-weight: bold;
    color: #ffff;
  }

  .icon {
    color: red;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

function Header() {
  return (
    <mainContainer>
      {/* First Header */}
      <HeaderWrapper>
        <FirstColor />
        <SecondColor />
        <ThirdColor />
      </HeaderWrapper>

      {/* Second Header */}
      <SecondHeader>
        {/* Logo */}
        <div className="left">
          <Logo src={logo} alt="Logo" />
          <span className="span">Elite Auto Lab</span>
        </div>
        <div className="right">
          {/* Navigation Links */}
          <NavLinks>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#faq">FAQ</a>
          </NavLinks>

          {/* Contact Information */}
          <ContactInfo>
            <FaPhoneAlt className="icon" />
            <span>03212240843</span>
          </ContactInfo>
        </div>

      </SecondHeader>
    </mainContainer>
  );
}

export default Header;


