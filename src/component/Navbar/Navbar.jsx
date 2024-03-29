import "./Navbar.css";
import {useContext, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {CartContext} from "../../context/CartProvider.jsx";
import { ShoppingCart } from "phosphor-react";
import SlidingCart from "./SlidingCart.jsx";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleShowCart = () => {
    setShowCart(!showCart)
  }

  return (
    <header className={`header ${showCart ? "visible" : ""}`}>
      <Navigations toggleShowCart={toggleShowCart}/>
      <SlidingCart toggleShowCart={toggleShowCart}/>
      <CartSliderOverlay/>
    </header>
  )
}

const CartButton = ({toggleShowCart}) => {
  const {cart} = useContext(CartContext);

  const totalCartQty = cart.reduce((totalQty, current) => {
    return totalQty + current.qty;
  }, 0);

  return (
    <span onClick={toggleShowCart} className="cart-icon">
      <ShoppingCart size={22}/>
      <div className="cart-counter">{totalCartQty}</div>
    </span>
  )
}

const Navigations = ({toggleShowCart}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpenNavigation = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav className={`nav container ${isNavOpen ? "nav-open" : ""}`}>
      <span className="brand-name">
        <Link to="/">Fashion Store</Link>
      </span>
      <ul className="nav-link_container">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/explore/men">Men</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/explore/women">Women</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/explore/all">Explore All</NavLink>
        </li>
      </ul>
      <div className="nav-secondary_btn" onClick={handleOpenNavigation}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav-secondary">
        <CartButton toggleShowCart={toggleShowCart}/>
      </div>
      <div className="nav-overlay"></div>
    </nav>
  )
}

const CartSliderOverlay = () => {
  return <div className="cart-slide_overlay"></div>
}

export default Navbar;