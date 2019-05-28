import React from 'react'
import{FaBars,FaCartPlus} from 'react-icons/fa'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import logo from '../images/logo.svg'

export default function Navbar() {
  return <ProductConsumer>
    {value =>{
      const{cartItems,handleSidebar,handleCart} = value;
      return<NavWrapper>
    <div className="nav-center">
    <FaBars className="nav-icon" onClick={handleSidebar}/>
    <img src={logo} alt="techstore"/>
    <div className="nav-cart">
    <FaCartPlus className="nav-icon" onClick={handleCart}>
    </FaCartPlus>
    <div className="cart-items">{cartItems}</div>
    
    </div>
    </div>
      </NavWrapper>
    }}
  </ProductConsumer>
}

const NavWrapper = styled.nav`
    position:-webkit-sticky;
    position:sticky;
    top:0;
    width:100%;
    padding:1rem 1.5rem;
    background-image: linear-gradient(160deg, #82ddff -51%, #ffffff 51%, #82ddff 136%);
    border-bottom:3px solid var(--primaryColor);
    .nav-center{
      display:flex;
      align-items:center;
      justify-content:space-between;
      max-width:1170px;
      margin:0 auto
    }
    .nav-icon{
      font-size:1.5rem;
      cursor:pointer;
    }
    .nav-cart{
      position:relative;
    }
    .cart-items{
      background-color:var(--primaryColor);
      color:var(--mainWhite);
      border-radius:70%;
      font-size:0.75rem;
      position:absolute;
      top:-8px;
      right:-8px;
      padding:0 5px;
    
    }
`