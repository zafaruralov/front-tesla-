import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
    console.log(backgroundImg)
  return (
    <Wrap BgImg={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
        <ButtoN>
        <Fade bottom>

        <ButtonGroup>
            <LeftGroup>
            {leftBtnText}
            </LeftGroup>
            {rightBtnText && 
            <RightGroup>
                {rightBtnText}
            </RightGroup>
            }
        </ButtonGroup>
            </Fade>
        <DownArrow src="Imgs/down-arrow.svg"/>
        </ButtoN>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
background-size:cover;
background-position: center;
background-repeat: no-repeat;
/* background-image: url('/Imgs/model-s.jpg'); */
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
/* background-image: ${props => `url('/Imgs/${props.backgroundImg}')` } */
background-image: url(${props => props.BgImg});
`
const ItemText = styled.div`
z-index: -1;
padding-top: 15vh;
text-align: center;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom: 30px;
@media (max-width:768px){
    flex-direction: column;
}

`
const LeftGroup = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`
const RightGroup = styled(LeftGroup)`
background-color: white;
opacity: 0.65;
color: black;
`
const DownArrow = styled.img`
height: 40px;
animation: animateDown infinite 1.5s;
overflow-x: hidden;
`
const ButtoN = styled.div`

`