import {
  NavBar,
  CafeLogo,
  CartContainer,
  CartLogo,
  CartCount,
} from './styledComponents'

const CafeNavBar = () => (
  <NavBar>
    <CafeLogo>UNI Resto Cafe </CafeLogo>
    <CartContainer>
      <CartLogo />
      <CartCount>0</CartCount>
    </CartContainer>
  </NavBar>
)

export default CafeNavBar
