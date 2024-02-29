import React, { useContext } from 'react'

import { Storage } from '../components/App'
import ProductCard from '../components/ProductCard'
import FillerBullet from '../components/FillerBullet'

const Favorite = () => {
  const { favoriteCollection, addCartItem, addFavoriteItem, itemLoader } = useContext(Storage)

  return (
    <div className="product-collection">
      <>
        <div className="product-category">
          <h2>Список желаемого</h2>
        </div>
        <div className="product-container">
          {itemLoader ?
          [...Array(8)].map((index) => (
            <ProductCard
              key={index}
            />
          )) :
          favoriteCollection.length > 0 ?
          favoriteCollection
          .map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              addCartItem={item => addCartItem(item)}
              addFavoriteItem={item => addFavoriteItem(item)}
            />
          )) :
          <FillerBullet
            imageUrl={"img/emoji-2.svg"}
            title={"Нет желаемых товаров"}
            describe={"Ваш список желаемого будет отображаться здесь."}
          />}
        </div>
      </>
    </div>
  )
}

export default Favorite