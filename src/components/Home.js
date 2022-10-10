import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title='Model S'
            description="Order Online Touchless Delivery"
            backgroundImg="/Imgs/model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title='Model Y'
            description="Order Online Touchless Delivery"
            backgroundImg="/Imgs/model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title='Model 3'
            description="Order Online Touchless Delivery"
            backgroundImg="/Imgs/model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title='Model x'
            description="Order Online Touchless Delivery"
            backgroundImg="/Imgs/model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Lowest Cost Solar Panels in America"        
            description="Money-back- guarantee"
            backgroundImg="/Imgs/solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Solar for New Roofs"        
            description="Money-back- guarantee"
            backgroundImg="/Imgs/solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Accessories"        
            description="Money-back- guarantee"
            backgroundImg="/Imgs/accessories.jpg"
            leftBtnText="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
z-index: 10;
`
