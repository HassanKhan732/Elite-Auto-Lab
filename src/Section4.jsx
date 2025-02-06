import React from 'react'
import styled from 'styled-components'
import Img34 from './assets/img34.jpg'
const Section4 = () => {
  return (
    <FirstBox style={{  background:'#f5f5f5'
    }}>
  
    <BoxesCont> <HeaderWrapper>
        <ThirdColor />
        <FirstColor />
        <SecondColor />

      </HeaderWrapper>
      <Boxes><img src={Img34} alt="" /></Boxes>
      </BoxesCont> 
      <Text>
     
     <span>   <h1> P E R F E C T I O N</h1>
     </span>
     <div>
    At Elite Auto Lab, we're obsessed with perfection. Our expert team is dedicated to providing the ultimate car detailing experience. We meticulously clean and polish your vehicle, ensuring every corner and crevice is spotless. Our commitment to excellence means your car will shine like new with our premium ceramic coatings.</div>
          </Text>
       </FirstBox>

  )
}
const FirstBox = styled.div `
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;

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
  margin-left: 6rem;
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
export default Section4