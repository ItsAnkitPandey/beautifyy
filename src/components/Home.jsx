import React from 'react'
import FrontBanner from '../img/frontBanner.webp'
import FrontBanner2 from '../img/frontBanner2.webp'
import Category1 from '../img/category1.webp'
import Category2 from '../img/category2.webp'
import Category3 from '../img/category3.webp'
import Category4 from '../img/category4.webp'
import Navbar from './Navbar'
import Footer from './Footer'
import Products from './Products'
import { items } from './Items'


const Home = ({ addToCart, count  } ) => {
    return (
        <div >
            {/* <Navbar count={count}/> */}
            
            {/* <!-- Banner Wrapper--> */}
            <div className="banner-wrapper">
                <img src={FrontBanner} alt="Banner Image" />
                <span>Luxury Cosmetic and<br />Beauty Products</span>
                <a href="#featured"><button>Shop Now</button></a>
            </div>

            {/* <!--Category of Products--> */}
            <div className="category-wrapper">
                <span>Featured Categories</span>
                <p>Give your customers insight into your product collection. Select imagery and name that relates to the
                    product category.</p>

                <div className="cat-wrapper">
                    <a href="#">
                        <figure>
                            <img src={Category1} alt="Product 1" />
                            <figcaption>Skin Care</figcaption>
                        </figure>
                    </a>

                    <a href="#">
                        <figure>
                            <img src={Category2} alt="Product 2" />
                            <figcaption>Skin Care</figcaption>
                        </figure>
                    </a>

                    <a href="#">
                        <figure>
                            <img src={Category3} alt="Product 3" />
                            <figcaption>Skin Care</figcaption>
                        </figure>
                    </a>

                    <a href="#">
                        <figure>
                            <img src={Category4} alt="Product 4" />
                            <figcaption>Skin Care</figcaption>
                        </figure>
                    </a>

                </div>

                {/* <!--Highlighted Section --> */}
                <div className="highlited-section-wrapper">
                    <img src={FrontBanner2} alt="Banner 2" />
                    <span>Highlighted Section</span>
                    <p>What differentiates you from the competition? Use this section to talk about it. Don't forget to talk
                        about the benefits.</p>
                    <button id="btn">Shop Now</button>
                </div>
                <div className="collection-wrapper" id='featured'>
                    <span>Featured Collection</span>
                    <p>Give your customers insight into your product collection. Select imagery and name that relates to the
                        product category.</p>
                    <div className="product-wrapper">
                    {items.map((curItem)=> {
						return <Products key={curItem.id} {...curItem}
                         addToCart={addToCart} 
                         curItem={curItem}  />
					})}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
