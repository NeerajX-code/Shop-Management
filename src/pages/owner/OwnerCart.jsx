import { useNavigate } from "react-router"
import "../../styles/ownerCart.css"
import { ChevronLeft, IndianRupee } from "lucide-react";

const OwnerCart = ({ token }) => {
  console.log(token)
  const navigate = useNavigate();
  return (
    <div className="OwnerCart">
      <nav>
        <button className='back' onClick={() => navigate(-1)}><ChevronLeft /></button>
        <h2>My Shopping Cart</h2>
      </nav>
      <div className="cart">
        <div className="cartItems">
          <div className="cartItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-7NQv4Jf6IueVRTLWh-TpMi_LlEmJQKkEQ&s" alt="" />
            <div className="itemInfo">
              <h3>Maggi</h3>
              <div className="price">
                <p><IndianRupee size={12} />1999.99</p>
                <div className="quantity">
                  <button>+</button>
                  <button>1</button>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
           <div className="cartItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfD5NCdr8WmrAfY3TvDW4qHVqY8aBAQUrcQ&s" alt="" />
            <div className="itemInfo">
              <h3>Maggi</h3>
              <div className="price">
                <p><IndianRupee size={12} />1999.99</p>
                <div className="quantity">
                  <button>+</button>
                  <button>1</button>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
           <div className="cartItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHXZDeuSltF_CzmHTVG5Bfjy7Hqql3UnYnQ&s" alt="" />
            <div className="itemInfo">
              <h3>Maggi</h3>
              <div className="price">
                <p><IndianRupee size={12} />1999.99</p>
                <div className="quantity">
                  <button>+</button>
                  <button>1</button>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
           <div className="cartItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9r-0aJlPEvKKdjbYOQ152YDQsLm2WCpjJhw&s" alt="" />
            <div className="itemInfo">
              <h3>Maggi</h3>
              <div className="price">
                <p><IndianRupee size={12} />1999.99</p>
                <div className="quantity">
                  <button>+</button>
                  <button>1</button>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-summary">
            <h3>Order Summary</h3>
            <div className="rows">
            <div className="summary-row">
              <span>Subtotal</span>
              <span><IndianRupee size={12} />7999.96</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span><IndianRupee size={12} />50.00</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span><IndianRupee size={14} />8049.96</span>
            </div>
            </div>
            <div className="checkoutBtnBox">
               <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwnerCart