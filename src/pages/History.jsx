import React, { useContext } from 'react'

import ProductCard from '../components/ProductCard'
import { Storage } from '../components/App'
import FillerBullet from '../components/FillerBullet'

const History = () => {
  const { orderCollection, setOrderCollection, itemLoader, setItemLoader } = useContext(Storage)

  return (
    <div className="product-collection">
      <>
        <div className="product-category">
          <h2>История заказов</h2>
        </div>
        <div className="product-container">
          {itemLoader ? (
            [...Array(8)].map((index) => <ProductCard key={index} />)
          ) : orderCollection.length > 0 ? (
            orderCollection.map((item) => <ProductCard {...item} />)
          ) : (
            <FillerBullet
              imageUrl={'img/emoji-1.svg'}
              title={'У вас нет заказов'}
              describe={'История ваших заказов будет отображаться здесь.'}
            />
          )}
        </div>
      </>
    </div>
  )
}

export default History
