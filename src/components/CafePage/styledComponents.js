import styled from 'styled-components'

export const CategoryList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  height: 6vh;
`
export const CategoryItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.isActive ? '#c45a0e' : '')};
  padding-bottom: 22px;
  padding-left: 3vw;
  padding-right: 3vw;
  border-bottom: 2px solid
    ${props => (props.isActive ? '#c45a0e' : 'transparent')};
  cursor: pointer;

  &:hover {
    color: #c45a0e;
    border-bottom: 2px solid #c45a0e;
  }
`
