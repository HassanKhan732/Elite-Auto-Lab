import React from 'react';
import Img1 from './assets/img10.png';
import Img40 from './assets/img40.png'; // ✅ Image Import
import styled from 'styled-components';

const Body = () => {
  return (
    <>
      <Container bgImage={Img40}>
        <div className="left">
          <h1>EXPERIENCE <br /> THE FINEST</h1>
          <p>
            <i>
              Ceramic Paint Protection and Premium Detailing <br />
              In Sydney At Elite Auto Lab
            </i>
          </p>
        </div>
        <div className="right">
          <div className="imgCont">
            <img src={Img1} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  background-color: #000;
  height: 100vh;
  align-items: center;
  background: url(${(props) => props.bgImage}) no-repeat center center/cover; // ✅ Imported Image Used

  /* 📌 Tablet View */
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }

  .left {
    width: 40%;
    color: white;
    padding: 3rem;
    position: absolute;
    left: 17%;
    top: 23%;
    @media (max-width: 1024px) {
      width: 100%;
      text-align: center;
      padding: 2rem;
    }
  }

  .left h1 {
    font-size: 3rem;
    letter-spacing: 4px;

    @media (max-width: 768px) {
      font-size: 2rem;
      letter-spacing: 2px;
    }
  }

  .left p {
    margin-top: 1rem;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .right {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
position: absolute;
left: 40%;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .imgCont {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  .imgCont img {
    max-width: 100%;
    height: auto;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;

export default Body;







