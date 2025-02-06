import React from 'react'
import styled from 'styled-components'
import Img26 from './assets/img26.webp'
const Section1 = () => {
  return (
    < div style={{  background:'#f5f5f5'
    }}>
    <Heading>
    <Wrapper>
        <ThirdColor3 />
        <FirstColor1 />
        <SecondColor2 />
      </Wrapper>
      <h1>WHY ELITE AUTO LAB <span style={{color:'red'}}>?</span></h1>
    </Heading>
    <FirstBox>
      <Text>
     
 <span>   <h1> P E R F E C T I O N</h1>
 </span>
 <div>
At Elite Auto Lab, we're obsessed with perfection. Our expert team is dedicated to providing the ultimate car detailing experience. We meticulously clean and polish your vehicle, ensuring every corner and crevice is spotless. Our commitment to excellence means your car will shine like new with our premium ceramic coatings.</div>
      </Text>
    <BoxesCont> <HeaderWrapper>
        <ThirdColor />
        <FirstColor />
        <SecondColor />
</HeaderWrapper>
      <Boxes><img src={Img26} alt="" /></Boxes>
      </BoxesCont> 
       </FirstBox>
       </div>
  )
}

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
const FirstBox = styled.div `
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;

`
const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
margin-top:2rem;
  flex-direction: column;
`
const HeaderWrapper = styled.div`
  display: flex;
  height: 3px;
width: 70px;
margin-left: 2rem;
margin-bottom: 3px;
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
const Text = styled.div`
  width: 350px;
  margin-right: 2rem;
  span h1{
    width: 160px;
    display: block;
    color: red;
    font-weight: 800;
    font-size: large;
  }
  div{
    padding: 1rem;
    
  }
`
const BoxesCont = styled.div`
  width: 250px;
  height: 170px;
/* transform: skewX(-20deg);
border-top: 2px dashed lightgray;
border-left: 2px dashed lightgray; */

`;
const Boxes = styled.div`
  width: 250px;
  height: 180px;
transform: skewX(-20deg);
border-top: 2px dashed lightgray;
border-left: 2px dashed lightgray;
overflow: hidden;
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

export default Section1