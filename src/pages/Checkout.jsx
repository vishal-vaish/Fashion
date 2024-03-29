import "./Checkout.css";
import UserInfo from "../component/checkout/UserInfo.jsx";
import OrderSummary from "../component/checkout/OrderSummary.jsx";

const Checkout = () => {
  return(
    <div className="container checkout-container">
      <UserInfo/>
      <OrderSummary/>
    </div>
  )
}

export default Checkout;