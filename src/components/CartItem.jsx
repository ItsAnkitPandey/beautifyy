import React, { useEffect } from 'react'

const CartItem = ({ name, img, inCart, price, id, cart, setCart }) => {
  const handleRemove = () => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleIncrease = () => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, inCart: item.inCart + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecrease = () => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.inCart > 1) {
        return { ...item, inCart: item.inCart - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  return (
    <>
      <div className="product">
        <ion-icon name="close-circle" onClick={handleRemove}></ion-icon>
        <img className="cart-img" src={img} />
        <span className='product_name'>{name}</span>
      </div>
      <div className="price">${price}</div>
      <div className="quantity">
        <ion-icon name="caret-back-circle-outline" onClick={handleDecrease}></ion-icon>
        <span>{inCart}</span>
        <ion-icon name="caret-forward-circle-outline" onClick={handleIncrease}></ion-icon>
      </div>
      <div className="total">
        ${price * inCart}
      </div>



    </>
  )
}

export default CartItem