import React from 'react'
import Card from '../Card'
import { productItemsDetails } from '../../../assets/data'

const ProductItems = () => {
  return (
    <div style={{ display: "flex", overflow: "auto" }}>
      {
        productItemsDetails.map((i, index) => (
          <Card key={index} companyName={i.companyName} productTitle={i.productTitle} productRating={i.productRating} cancelPriceProduct={i.cancelPriceProduct} activePriceProduct={i.activePriceProduct} />
        ))
      }
    </div>
  )
}

export default ProductItems