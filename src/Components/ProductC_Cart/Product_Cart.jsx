import React, { useState } from 'react';
import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineDelete } from "react-icons/ai";
import { incrementCartQuantity, removeFromCart, decrementCart } from '../context/Cart/CartSlice';
import Swal from 'sweetalert2';
import emptycart from './emptycart.gif'
import { Link } from 'react-router-dom';

const Product_Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value)    ;
  const [voucher, setVoucher] = useState('');
  const [discount, setDiscount] = useState(0);
  const [voucherError, setVoucherError] = useState('');

  const total = cartItems?.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountedTotal = total - discount;



  const handleRemoveFromCart = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to remove ${item.title} from the cart?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(item.id));
        Swal.fire(
          'Deleted!',
          `${item.title} has been removed from the cart.`,
          'success'
        );
      }
    });
  };

  const handleVoucherRedeem = () => {
    if (voucher === 'ZAFARBEK') {
      setDiscount(total * 0.5); 
      setVoucherError('');
      Swal.fire(
        'Success!',
        'Voucher applied successfully.',
        'success'
      );
    } else {
      setVoucherError('Invalid voucher code');
      Swal.fire(
        'Error!',
        'Invalid voucher code.',
        'error'
      );
    }
  };

   let ProductCart = cartItems.length === 0 ? (
    <div className="empty-cart">
      <img src= {emptycart} alt="empty.png" />
      <Link to={"/"} id='backtohome'><button>Go to home</button></Link>
    </div>
  ) : (
    <>
      <table>
      
        <tbody>
          {cartItems?.map((user) => (
                    <div className="karzina Container">
                    <table className="karzina_table">
                      <thead>
                        <tr>
                          <th>Фото</th>
                          <th>Товары</th>
                          <th>Описание</th>
                          <th>Артикул</th>
                          <th>Количество</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='img'>
                          <img  src={user.Image_url} alt={user.title} />
                          </td>
                          <td>
                            <h4>    {user.title} </h4> <br />
                            <p>$ {user.price}</p>
                          </td>
                          <td className='opisaniye'> 
                            <h5 id='h5'>Светильник RADUGA COMBO <br /> XS  Промышленное освещение; <br /> 50Вт; 230В; S4; XS;</h5>
                          </td>
                          <td className='opisaniye'>
                            <h5 id='h5'>RAD-COMBO-50/XXX/230/ <br /> XXX/ XXX/ S4/XS</h5>
                          </td>
                          <td>
                            <div className="kalichestvo">
                              <div className="btnss">
                              <button disabled={user.quantity <= 1} onClick={() => dispatch(decrementCart(user))}>-</button>
                                <span className='button'>{user.quantity}</span>
                                <button disabled={user.quantity >= 10} onClick={() => dispatch(incrementCartQuantity(user))}>+</button>
                              </div>
                              <p onClick={() => handleRemoveFromCart(user)}><AiOutlineDelete className='removeicon' /></p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              
          ))}
        </tbody>
      </table>
     
    </>
  )

  return (
    <>
      <div className={`product__cart Container `}>
            {ProductCart}
   
      </div>
    </>
  );
};

export default Product_Cart;