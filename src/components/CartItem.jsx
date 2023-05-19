import React from 'react'

const CartItem = ({name, img, inCart, price, id}) => {
    return (
        <>
            <div className="product">
                <ion-icon name="close-circle"></ion-icon>
                <img className="cart-img" src={img} />
                <span className='product_name'>{name}</span>
            </div>
            <div className="price">${price}</div>
            <div className="quantity">
                <ion-icon name="caret-back-circle-outline"></ion-icon>
                <span>{inCart}</span>
                <ion-icon name="caret-forward-circle-outline"></ion-icon>
            </div>
            <div className="total">
                ${price * inCart}
            </div>
            
					
           
        </>
    )
}

export default CartItem