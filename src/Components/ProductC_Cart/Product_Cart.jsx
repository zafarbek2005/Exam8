import React, { useState } from 'react';
import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineDelete } from "react-icons/ai";
import { incrementCartQuantity, removeFromCart, decrementCart } from '../context/Cart/CartSlice';
import Swal from 'sweetalert2';
import emptycart from './emptycart.gif';
import { Link } from 'react-router-dom';
import {ToastContainer
  , toast } from "react-toastify";

const Product_Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);

  const total = cartItems?.reduce((sum, item) => sum + (item.price * item.quantity), 0);

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

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
    address: ""
  });

  toast('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const botToken = "6714877771:AAHjhYSI1QCXr74V76owsIhEJN-FA_pjvhE";
    const chatId = "1976708153";
    const message = `
      Name: ${contactData.name}
      Email: ${contactData.email}
      Message: ${contactData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Message sent successfully!", {});
      } else {
        console.error("Response error:", data);
        toast.error(`Failed to send message: ${data.description}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending message.", {});
    }
  };

  let ProductCart = cartItems.length === 0 ? (
    <div className="empty-cart">
      <img src={emptycart} alt="empty.png" />
      <Link to={"/"} id="backtohome"><button>Go to home</button></Link>
    </div>
  ) : (

   <>
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
          {cartItems?.map((user) => (
            <tr key={user.id}>
              <td className="img">
                <img src={user.Image_url} alt={user.title} />
              </td>
              <td>
                <h4>{user.title}</h4><br />
                <p id="price"> {user.price}₽</p>
              </td>
              <td className="opisaniye">
                <h5 id="h5">Светильник RADUGA COMBO <br /> XS Промышленное освещение; <br /> 50Вт; 230В; S4; XS;</h5>
              </td>
              <td className="opisaniye">
                <h5 id="h5">RAD-COMBO-50/XXX/230/ <br /> XXX/ XXX/ S4/XS</h5>
              </td>
              <td>
                <div className="kalichestvo">
                  <div className="btnss">
                    <button disabled={user.quantity <= 1} onClick={() => dispatch(decrementCart(user))}>-</button>
                    <span className="button">{user.quantity}</span>
                    <button disabled={user.quantity >= 10} onClick={() => dispatch(incrementCartQuantity(user))}>+</button>
                  </div>
                  <p onClick={() => handleRemoveFromCart(user)}><AiOutlineDelete className="removeicon" /></p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="cart_form Container">
        <h3>Оформление</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <input type="text"
                placeholder="ФИО"
                value={contactData.name}
                name="name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input type="text"
                placeholder="телефон"
                required
                name="number"
                value={contactData.number}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input type="text"
                placeholder="Электронная почта"
                required
                value={contactData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <h3>Доставка</h3>
          <div className="input2">
            <div className="input1">
              <input type="text"
                name="address"
                placeholder="Адрес доставки"
                onChange={handleChange}
                value={contactData.address}
                required
              />
            </div>
            <div className="input3">
              <input type="text"
                name="message"
                required
                placeholder="Адрес доставки"
                onChange={handleChange}
                value={contactData.message}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="input_bootom Container">
        <h3>Оплата</h3>
        <div className="tovar">
          <p>Товары.............................................12 300₽</p>
          <p>Доставка.............................................. 580₽</p>
        </div>
        <form onSubmit={handleSubmit}>
          <h3>12 800₽</h3>
          <div className="inp_p">
            <button>Купить</button>
            <p>
              <input type="radio"
                onChange={handleChange}
              />
              Я согласен наобработку моих персональных данных
            </p>
          </div>
        </form>
      </div>
   
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    <ToastContainer />
     */}
     
   </>
    
  );

  return (
    <div className="product__cart Container">
      {ProductCart}
    </div>
  );
};

export default Product_Cart;
