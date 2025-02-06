import React from 'react'
import Header from './Header'
// <<<<<<< HEAD
import About from './AboutPage/About'
const App = () => {
  return (
    <>
      <Header />
      <About />
    </>
// =======
import Body from './body'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import CustomerReview from './CustomerReview'
import Map from './Map.jsx'
import GetInTouchForm from './GetInTouchForm.jsx'
const App = () => {
  return (
    <>
    <Header/>
   <Body></Body>
   <Section1></Section1>
   <Section2></Section2>
   <Section3></Section3>
   <Section4></Section4>
<Section5></Section5>
<Section6></Section6>
<CustomerReview></CustomerReview>
<GetInTouchForm></GetInTouchForm>

<Map></Map>
   </>
// >>>>>>> af48d69b4ac840c6489934ac8fa4d45ba27cf9e9
  )
}

export default App
