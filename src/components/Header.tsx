import React, { useRef, useCallback } from 'react'
import { NavLink } from "react-router-dom";
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'

type Props = {}

const Header = (props: Props) => {
  let activeLinkClasses = useRef("uppercase ff-sans-cond fs-300 fw-normal text-white active_link")
  let inactiveLinkClasses = useRef("uppercase ff-sans-cond fs-300 fw-normal text-white")

  let hamburgerControl = useCallback(
    () => {
      let hamburgerBtn = document.querySelector(".hamburger")!
      hamburgerBtn.ariaExpanded = hamburgerBtn.ariaExpanded == "false" ? "true" : "false" 
    },
    [],
  )

  return (
    <header className='flex'>
      <div>
        <img src={logo} alt="space logo" />
      </div>
      <button aria-expanded="false" className='hamburger' onClick={hamburgerControl} >
        <img src={hamburger} alt="hamburger menu" className="hamburger-button hamburger-open"/>
        <img src={close} alt="close menu" className="hamburger-button hamburger-close"/>
      </button>
      <div>
        <div className="hr"></div>
        <nav>
          <ul className='navbar flex'>
            <li>
              <NavLink
                to="home"
                className={({isActive}) => isActive ? activeLinkClasses.current : inactiveLinkClasses.current}
                onClick={hamburgerControl}
              >
                <span className='fw-bold'>00</span>Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="destination"
                className={({isActive}) => isActive ? activeLinkClasses.current : inactiveLinkClasses.current}
                onClick={hamburgerControl}
              >
                <span className='fw-bold'>01</span>Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                to="crew"
                className={({isActive}) => isActive ? activeLinkClasses.current : inactiveLinkClasses.current}
                onClick={hamburgerControl}
              >
                <span className='fw-bold'>02</span>Crew
              </NavLink>
            </li>
            <li>
              <NavLink
                to="technology"
                className={({isActive}) => isActive ? activeLinkClasses.current : inactiveLinkClasses.current}
                onClick={hamburgerControl}
              >
                <span className='fw-bold'>03</span>Technology
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header