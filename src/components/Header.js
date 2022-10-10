import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import {useSelector} from 'react-redux'
import { SelectCars } from '../features/car/carSlice';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(SelectCars)
  return (
    <Container>
      <a>
        <img src='/Imgs/logo.svg' alt=''/>
      </a>
      <Menu>
        {
          cars && cars.map((car, index) => 
          (
            <a key={index} href='#'>{car}</a>
          )
          )
        }
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <ConsumMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper >
          <CostumeClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>
        {
          cars && cars.map((car, index) => 
          (
            <li key={index}><a href='#'>{car}</a></li>
          )
          )
        }
        <li><a href='#'>Used inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Charging</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
z-index: 10;
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;
justify-content: space-between;
top: 0;
left: 0;
right: 0;
z-index: 1;
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}

@media (max-width: 768px){
  display: none;
}
`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
  font-weight: 600;
  text-transform: uppercase;
  margin-right:10px;
}
`

const ConsumMenu = styled(MenuIcon)`
cursor: pointer;
`
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 100;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
transition: transform 0.2s;
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  a{
    font-weight: 600;
  }
}
`
const CostumeClose = styled(ClearIcon)`
cursor: pointer;
`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`