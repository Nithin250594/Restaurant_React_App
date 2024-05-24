import {useContext} from 'react'
import {
  NavBar,
  CafeLogo,
  CartContainer,
  CartLogo,
  CartCount,
} from './styledComponents'
import CartContext from '../../CartContext'

const CafeNavBar = () => {
  const {cartCounts} = useContext(CartContext)
  const totalCount = Object.values(cartCounts).reduce(
    (sum, count) => sum + count,
    0,
  )

  return (
    <NavBar>
      <CafeLogo>UNI Resto Cafe</CafeLogo>
      <CartContainer>
        <CartLogo />
        <CartCount>{totalCount}</CartCount>
      </CartContainer>
    </NavBar>
  )
}

export default CafeNavBar
