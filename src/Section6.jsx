import React from 'react'
import styled from 'styled-components'
import { FaInstagram } from "react-icons/fa6";
import Img21 from './assets/img21.jpg';
import Img22 from './assets/img22.jpg';
import Img23 from './assets/img23.jpg';
import Img24 from './assets/img24.jpg';
import Img25 from './assets/img25.jpg';
import Img26 from './assets/img26.webp';
import Img27 from './assets/img27.jpg';
import Img28 from './assets/img28.jpg';
// ✅ Array of Imported Images
const images = [Img21, Img22, Img23, Img24, Img25, Img26, Img27, Img28];

const Section6 = () => {
  return (
    <Main style={{  background:'#f5f5f5'
    }}>
       <Section>
       <h1>
            <span style={{ color:'red'}}>OUR WORK </span> SPEAK FOR ITSELF
        </h1>
<div>
<h3>@eliteautolabau</h3>
<button>
follow on Instagram <FaInstagram  className="icon" />

</button>
    </div>
        </Section>  
        <Container>
      {images.map((img, index) => (
        <Card key={index}>
          <img src={img} alt={`Card ${index + 1}`} />
        </Card>
      ))}
    </Container>

    </Main>
  )
}
const Main =styled.div`
    
`
const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 5rem;
    h1{
        height: 3rem;
    }
    div{
        display: flex;
gap: 2rem;
}
div button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    height: 30px;
    background-color: red;
    border: none;
    color: white;
    border-radius: 3px;
    width: 150px;
    cursor: pointer;
}

`


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 20px;
  max-width: 90vw;
  margin: auto;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-wrap: wrap; 
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

const Card = styled.div`
  width: 10%; 
  aspect-ratio: 1;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-in-out;
  border-radius: 10px;
  height: 30%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.1); 
  }

  &:hover img {
    filter: brightness(80%);
  }

  @media (max-width: 1024px) {
    width: 22%;
  }

  @media (max-width: 768px) {
    width: 45%; 
  }
`;
export default Section6

