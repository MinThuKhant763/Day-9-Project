import { useContext } from 'react';
import { ItemContext } from '../store/itemContext';
import './Cart.css';
import CartItem from './CartItem';


const Cart = ({ hideCartHandler }) => {
    const { items, totalAmount } = useContext(ItemContext);
    const totalPrice = `$ ${ totalAmount.toFixed(2) } `;
    return (
        <section className='cart-box'>
            <h2>You are cart items are here</h2>
            <section className='overflow-ctr'>
                {
                    items.length < 1 ?
                        (<h1 className='no-item'>No item in your cart !!!</h1>)
                        :
                        (<>
                            {
                                items.map((fruit) => (
                                    <CartItem key={ fruit.id } fruit={ fruit } />
                                ))
                            }
                        </>)
                }

            </section>
            <hr />
            <div className='total'>
                <h3>Total price</h3>
                <p>{totalPrice}</p>
            </div>
            <div className='cart-btns'>
                <button className='close-btn' onClick={ hideCartHandler }>Close</button>
                {
                    items.length < 1 ?
                        (<></>) :     
                        (<button className='order-btn' onClick={()=>alert("ordered !!")}>Order</button>)
                }
               
            </div>
        </section>
    );
};

export default Cart;
