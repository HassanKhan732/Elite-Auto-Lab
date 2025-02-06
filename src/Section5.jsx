import React from 'react'
import styled from 'styled-components'
import Img26 from './assets/img26.webp'
import Img34 from './assets/img34.jpg'
import Img31 from './assets/img31.jpeg'
import Img32 from './assets/img32.jpeg'
import Img11 from './assets/img11.png.png'
import Img39 from './assets/img39.png'

const Section5 = () => {
  return (
<Main style={{  background:'#f5f5f5'
    }}>
<Heading>
    <Wrapper>
        <ThirdColor3 />
        <FirstColor1 />
        <SecondColor2 />
      </Wrapper>
      <h1>WHAT WE DO <span style={{color:'red'}}>?</span></h1>
      <p style={{color:'grey'}}>click the green icon to reveal our services and details</p>
    </Heading>
    <ImgCont>
    <img src={Img11} alt="" />
    </ImgCont>
    <ImgsCont>
      <div className="row">
        <Card>
          <img src={Img26} alt="Image 1" />
          <Button>Learn More</Button>
        </Card>
        <Card>
          <img src={Img31} alt="Image 2" />
          <Button>Learn More</Button>
        </Card>
      </div>
      <div className="row">
        <Card>
          <img src={Img32} alt="Image 3" />
          <Button>Learn More</Button>
        </Card>
        <Card>
          <img src={Img34} alt="Image 4" />
          <Button>Learn More</Button>
        </Card>
      </div>
    </ImgsCont>
    <SecondImgCont>
    <img src={Img39} alt="Image" />

    </SecondImgCont>
</Main>
)
}
const Main =  styled.div`
    

`
const ImgCont =  styled.div`
      height: 80%;
      width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      height: 80%;
max-width:70%;
}
`
const SecondImgCont =  styled.div`
      height: 80%;
      width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      height: 80%;
max-width:70%;
}
`
const ImgsCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width:60%;
  justify-content: center;
  margin: auto;

  .row {
    display: flex;
    gap: 5px;

  }

  @media (max-width: 768px) {
    .row {
      flex-direction: column;
    }
  }
`;

const Card = styled.div`
  width: 440px;
  height: 200px;
  border-radius: 9px;
  gap: 5px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* &:hover button {
    opacity: 1;
    transform: translateY(0);
  } */
`;

const Button = styled.button`
  position: absolute;
  bottom: 10%;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  color: black;
  background: #a39c9c;
  border: 2px solid black;
  cursor: pointer;
  /* transition: 0.3s;
  opacity: 0;
  transform: translateY(10px); */

  &:hover {
    background: black;
    color: white;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
margin-top:2rem;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  height: 3px;
width: 70px;
margin-left: 2rem;
margin-bottom: 3px;
`;
const FirstColor1 = styled.div`
  width: 32.33%;
  background-color: #ffffff;
  transform: skewX(-50deg);
  transform-origin: left;
`;

const SecondColor2 = styled.div`
  width: 32.33%;
  background-color: red;
  transform: skewX(-50deg);
  transform-origin: left;
`;

const ThirdColor3 = styled.div`
  width: 32.33%;
  background-color: green;
  transform: skewX(-50deg);
  transform-origin: right;
`;
export default Section5