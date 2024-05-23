import styled from 'styled-components'
import {BsCart3} from 'react-icons/bs'

export const NavBar = styled.nav`
  height: 10vh;
  background-color: #fdfdfd;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
`

export const CafeLogo = styled.h1`
  color: #262625;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: 600;
`

export const CartContainer = styled.div`
  display: flex;
`
export const CartLogo = styled(BsCart3)`
  height: 50px;
  width: 30px;
  color: #414241;
  align-self: flex-end;
`

export const CartCount = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 12px;
  background-color: #f27507;
  color: white;
  text-align: center;
`
