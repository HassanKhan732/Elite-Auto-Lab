import React from 'react'
import Img1 from './assets/img10.png'
import styled from 'styled-components'
const Body = () => {
  return (
    <>
     <Container>
  <div className="left">
<h1>
EXPERIENCE <br /> THE FINEST</h1>
<p>
<i>    Creamic Paint Protection and Premium Detailing <br /> In Sydney At Elite Auto Lab
</i>
</p>
  </div>
<div className="right">
<div className="imgCont"><img src={Img1} alt="" />
</div>
</div>
        </Container>   
         </>
  )
}
const Container = styled.div`
display: flex;
background-color: #000;
height: 104vh;
.left{
    width: 30%;
    height: 90vh;
    background-color: #000;
color: white;
}
.left h1{
  position: absolute;
  top: 28%;
  left: 25%;
  font-size: 3rem;
  letter-spacing: 4px;
}
.left p{
  position: absolute;
  top: 50%;
  left: 25%;
}
.right{
    width: 60%;
    height: 90vh;
    background-color: #000;

}
.imgCont{
    height: 100%;
    width: 100%;
  /* margin-top: 20%; */

}
.imgCont img{
  margin-top: 5rem;
    /* mix-blend-mode: multiply; */
    height:100%;
  width: 65vw;
  object-fit: cover;
  background: black;

}
`;
export default Body






// import React from 'react';
// import Img1 from './assets/img10.png';
// import styled from 'styled-components';

// const Body = () => {
//   return (
//     <>
//       <Container>
//         <div className="left">
//           <h1>EXPERIENCE <br /> THE FINEST</h1>
//           <p>
//             <i>
//               Ceramic Paint Protection and Premium Detailing <br />
//               In Sydney At Elite Auto Lab
//             </i>
//           </p>
//         </div>
//         <div className="right">
//           <div className="imgCont">
//             <img src={Img1} alt="" />
//           </div>
//         </div>
//       </Container>   
//     </>
//   );
// };

// const Container = styled.div`
//   display: flex;
//   background-color: #000;
//   height: 100vh;
//   align-items: center;

//   /* 📌 Tablet View */
//   @media (max-width: 1024px) {
//     flex-direction: column;
//     height: auto;
//   }

//   .left {
//     width: 40%;
//     color: white;
//     padding: 3rem;

//     @media (max-width: 1024px) {
//       width: 100%;
//       text-align: center;
//       padding: 2rem;
//     }
//   }

//   .left h1 {
//     font-size: 3rem;
//     letter-spacing: 4px;

//     @media (max-width: 768px) {
//       font-size: 2rem;
//       letter-spacing: 2px;
//     }
//   }

//   .left p {
//     margin-top: 1rem;
//     font-size: 1rem;

//     @media (max-width: 768px) {
//       font-size: 0.9rem;
//     }
//   }

//   .right {
//     width: 60%;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     @media (max-width: 1024px) {
//       width: 100%;
//     }
//   }

//   .imgCont {
//     height: 100%;
//     width: 100%;
//     display: flex;
//     justify-content: center;

//     @media (max-width: 768px) {
//       width: 90%;
//     }
//   }

//   .imgCont img {
//     max-width: 100%;
//     height: auto;
//     object-fit: cover;

//     @media (max-width: 768px) {
//       width: 80%;
//     }
//   }
// `;

// export default Body;
