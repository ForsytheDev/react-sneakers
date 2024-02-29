import React, { useContext } from 'react'

import { Storage } from '../components/App'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import Carousel from '../components/Carousel'

const Catalogue = () => {
  const { items, searchChanges, addCartItem, addFavoriteItem, itemLoader } = useContext(Storage)

  const render = () => {
    return itemLoader
      ? [...Array(8)].map((item, index) => <ProductCard key={index} />)
      : items
          .filter((item) => item.title.toLowerCase().includes(searchChanges.toLowerCase()))
          .map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              addCartItem={(item) => addCartItem(item)}
              addFavoriteItem={(item) => addFavoriteItem(item)}
            />
          ))
  }

  return (
    <>
      <Carousel />
      <div className="product-collection">
        <div className="product-category">
          <h2>Все кроссовки</h2>
          <SearchBar />
        </div>
        <div className="product-container">{render()}</div>
      </div>
    </>
  )
}

export default Catalogue
