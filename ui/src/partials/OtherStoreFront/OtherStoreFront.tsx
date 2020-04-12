import React from 'react';

import '../StoreFront/StoreFront.scss';

import { ProductCard } from '../../components';

const OtherStoreFront = () => {
  return (
    <>
      <div className="p-store-front">
        <div className="p-store-front__company">
          <div className="p-store-front__company-description">
            <h1>Bippy</h1>
            <p>Earth-Friendly Butt Stuff.</p>
          </div>

          <div className="p-store-front__company-nav">
            <ul>
              <li>
                <a href="https://heybippy.com/">
                  DISCOVER MORE
                                </a>
              </li>

              <li>
                <a href="">
                  SHARE
                                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-store-front__products">
          <ProductCard
            image="https://cdn.shopify.com/s/files/1/0182/7697/4692/products/ezgif-2-9954ee5163e1_462x475.jpg?v=1584076429"
            title="Bippy Bamboo Toilet Paper"
            description="Bamboo grows really fast and doesn't hurt your bum."
            price="10000.00"
          />

          <ProductCard
            image="https://cdn.shopify.com/s/files/1/0182/7697/4692/products/Bippy_HandSanitizer-1000x1000_960x960.jpg?v=1586380998"
            title="Bippy Hand Sanitizer"
            description="Your last line of defense"
            price="4896.99"
          />

          <ProductCard
            image="https://cdn.shopify.com/s/files/1/0182/7697/4692/products/Screen_Shot_2019-06-08_at_4.12.15_PM_506x489.png?v=1579852535"
            title="Bippy Toilet Paper Foam"
            description="LITERALLY WHAT ON EARTH"
            price="11.99"
          />
        </div>
      </div>
    </>
  )
}

export default OtherStoreFront;