import React from 'react'
import './navbar.css'
import { logo } from '../../../assets/data'
import { CgMenuLeft } from "react-icons/cg";
import { TbChevronDown } from "react-icons/tb";
import { GoRocket } from "react-icons/go";

const Navbar = () => {
  return (
    <>
      <div className="topMainContainer">
        <div className="topItemContainer">
          <div className="topLeft">
            <span>Get up to 50% off new season styles, limited time only</span>
          </div>
          <div className="topRight">
            <a className='links' href="#">Order Tracking</a>
            <a className='links' href="#">Help Center</a>
          </div>
        </div>
      </div>
      <div className="mainNavContainer">
        <div className="borderBottom">
          <div className="firstNav">
            <div className="logo">
              <img src={logo.logoLandscape} alt="logo" />
            </div>
            <div className="searchBar">
              <input type="text" placeholder='Search the products...' />
              <div className="searchIconNav">
              <lord-icon
                className="searchIcon"
                src="https://cdn.lordicon.com/wjyqkiew.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#2D4F2B,secondary:#347433"
                style={{ width: "20px", height: "20px" }}
              ></lord-icon>
              </div>
            </div>
            <div className="login-signup">
              <div className="logintxt gap-3 d-flex">
                <div className="mx-3 loginTextNav">
                  <span><a className='links' href="#">Login</a></span> &nbsp; | &nbsp; <span><a className='links' href="#">Signup</a></span>
                </div>


                <lord-icon
                  src="https://cdn.lordicon.com/nvsfzbop.json"
                  trigger="morph"
                  stroke="bold"
                  state="morph-slider"
                  colors="primary:#2D4F2B,secondary:#347433"
                  style={{ width: "27px", height: "27px", cursor: "pointer" }}>
                </lord-icon>

                <lord-icon
                  src="https://cdn.lordicon.com/ggirntso.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#2D4F2B,secondary:#347433"
                  style={{ width: "27px", height: "27px", cursor: "pointer" }}>
                </lord-icon>
              </div>
            </div>
          </div>
        </div>

       <div className="borderBottom">
       <div className="categoryItems py-1 d-flex">
          <div className="catDiv">
            <CgMenuLeft className='catDivIconOne' /> <span className='catDivText'>SHOP BY  CATEGORIES</span><TbChevronDown className='catDivIconTwo' />
          </div>
          <div className="listItems">
            <ul className='d-flex gap-4'>
              <li className='links'>Home</li>
              <li className='links'>Fashion</li>
              <li className='links'>Electronics</li>
              <li className='links'>Bags</li>
              <li className='links'>Footwear</li>
              <li className='links'>Groceries</li>
              <li className='links'>Beauty</li>
              <li className='links'>Wellness</li>
              <li className='links'>Jewellery</li>
            </ul>
          </div>
          <div className="delText">
            <GoRocket /> <span>Free International Delievery</span>
          </div>
        </div>
       </div>
      </div>
    </>
  )
}

export default Navbar