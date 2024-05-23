import {useState, useEffect} from 'react'
import CafeNavBar from '../CafeNavBar'

import {CategoryList, CategoryItem} from './styledComponents'

const Category = {
  salads: 'Salads and Soup',
  banyard: 'From The Barnyard',
  hen_house: 'From the Hen House',
  sea: '"Fresh From The Sea"',
  biryani: 'Biryani',
  fast_food: 'Fast Food',
}

const CafePage = () => {
  const [cafeData, setCafeData] = useState([])
  const [activeCategory, setCategory] = useState(Category.salads)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://run.mocky.io/v3/72562bef-1d10-4cf5-bd26-8b0c53460a8e',
      )
      const data = await response.json()
      setCafeData(data)
    }

    fetchData()
  }, [])

  const MenuCategory =
    cafeData.length > 0
      ? cafeData[0].table_menu_list.map(e => e.menu_category)
      : []
  console.log(MenuCategory)

  return (
    <>
      <CafeNavBar />
      <CategoryList>
        {MenuCategory.map(e => (
          <CategoryItem
            key={e}
            onClick={() => setCategory(e)}
            isActive={activeCategory === e}
          >
            {e}
          </CategoryItem>
        ))}
      </CategoryList>
    </>
  )
}

export default CafePage
