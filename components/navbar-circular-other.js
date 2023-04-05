import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavbarCircularOther = (props) => {
  return (
    <>
      <div
        id="navbar"
        data-type="navbar"
        className={`navbar-circular-other-container bg-animation ${props.rootClassName} `}
      >
        <header data-thq="thq-navbar" className="navbar">
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="navbar-circular-other-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="navbar-circular-other-nav"
            >
              <Link href="/projects">
                <a className="navbar-circular-other-link">
                  <label className="navbar-circular-other-text">
                    <span className="navbar-circular-other-text1">
                      Projects
                    </span>
                    <br></br>
                  </label>
                </a>
              </Link>
            </nav>
          </div>
          <Link href="/">
            <a>
              <img
                alt="logo"
                src="/playground_assets/logo%202-200w.png"
                className="navbar-circular-other-logo"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-btn-group"
            className="navbar-circular-other-btn-group"
          >
            <Link href="/login">
              <a className="navbar-circular-other-link2 gradient-text button-secondary-white button NormalButton">
                {props.Login}
              </a>
            </Link>
            <div className="navbar-circular-other-container1"></div>
            <Link href="/register">
              <a className="navbar-circular-other-link3 NormalButton button-secondary gradient-text button">
                {props.Register}
              </a>
            </Link>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="navbar-circular-other-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="navbar-circular-other-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navbar-circular-other-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="navbar-circular-other-nav1"
            >
              <div className="navbar-circular-other-container2">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="navbar-circular-other-image"
                />
                <div
                  data-thq="thq-close-menu"
                  className="navbar-circular-other-menu-close"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-circular-other-icon02"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="navbar-circular-other-nav2"
              >
                <span className="navbar-circular-other-text3">About</span>
                <span className="navbar-circular-other-text4">Features</span>
                <span className="navbar-circular-other-text5">Pricing</span>
                <span className="navbar-circular-other-text6">Team</span>
                <span className="navbar-circular-other-text7">Blog</span>
              </nav>
              <div className="navbar-circular-other-container3">
                <button className="navbar-circular-other-login1 button">
                  Login
                </button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="navbar-circular-other-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="navbar-circular-other-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navbar-circular-other-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navbar-circular-other-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-circular-other-container {
            width: 100%;
            height: 103px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .navbar-circular-other-desktop-menu {
            display: flex;
          }
          .navbar-circular-other-nav {
            flex: 0 0 auto;
            color: #093e17;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-circular-other-link {
            display: contents;
          }
          .navbar-circular-other-text {
            color: rgba(9, 62, 23, 0.83);
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
            padding-top: 4px;
            border-color: rgba(9, 62, 23, 0.83);
            border-style: 62;
            border-width: 1.5px;
            padding-left: var(--dl-space-space-unit);
            border-radius: 20px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 4px;
            text-decoration: none;
          }
          .navbar-circular-other-text:hover {
            color: rgba(9, 62, 23, 0.56);
          }
          .navbar-circular-other-logo {
            width: 104px;
            height: 100px;
            text-decoration: none;
          }
          .navbar-circular-other-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-circular-other-link2 {
            transition: 0.3s;
            border-width: 1px;
            margin-right: 0px;
            padding-right: 0.5rem;
            text-decoration: none;
            background-color: transparent;
            background-image: linear-gradient(
              90deg,
              rgb(153, 24, 118) 0%,
              rgb(83, 75, 45) 99%
            );
          }
          .navbar-circular-other-link2:hover {
            color: #562b2b;
          }
          .navbar-circular-other-container1 {
            width: 2px;
            height: 30px;
            display: block;
            border-radius: 16px;
            background-color: #393939;
          }
          .navbar-circular-other-link3 {
            transition: 0.3s;
            border-width: 1px;
            padding-left: 0.5rem;
            text-decoration: none;
            background-color: transparent;
            background-image: linear-gradient(
              90deg,
              rgb(83, 74, 41) 0%,
              rgb(153, 24, 118) 99%
            );
          }
          .navbar-circular-other-link3:hover {
            color: #562b2b;
          }
          .navbar-circular-other-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .navbar-circular-other-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-circular-other-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-circular-other-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-circular-other-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-circular-other-image {
            height: 2rem;
          }
          .navbar-circular-other-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-circular-other-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-circular-other-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-circular-other-text3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-circular-other-text4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-circular-other-text5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-circular-other-text6 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-circular-other-text7 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-circular-other-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .navbar-circular-other-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-circular-other-icon-group {
            display: flex;
          }
          .navbar-circular-other-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-circular-other-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-circular-other-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 1200px) {
            .navbar-circular-other-container {
              width: 1200px;
              height: 100px;
              margin-top: 0px;
            }
            .navbar-circular-other-text {
              color: rgba(9, 62, 23, 0.83);
              font-style: normal;
              font-weight: 700;
              padding-top: 4px;
              border-color: rgba(9, 62, 23, 0.83);
              border-width: 1.5px;
              padding-left: var(--dl-space-space-unit);
              border-radius: 20px;
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 4px;
              text-decoration: none;
            }
          }
          @media (max-width: 991px) {
            .navbar-circular-other-container {
              width: 816px;
            }
            .navbar-circular-other-desktop-menu {
              display: none;
            }
            .navbar-circular-other-btn-group {
              display: none;
            }
            .navbar-circular-other-link2 {
              padding-right: 1rem;
            }
            .navbar-circular-other-link3 {
              padding-left: var(--dl-space-space-unit);
            }
            .navbar-circular-other-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .navbar-circular-other-text {
              margin-left: var(--dl-space-space-unit);
            }
            .navbar-circular-other-text1 {
              margin-left: var(--dl-space-space-unit);
            }
            .navbar-circular-other-icon {
              fill: #ffffff;
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
          }
          @media (max-width: 479px) {
            .navbar-circular-other-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

NavbarCircularOther.defaultProps = {
  Login: 'Login',
  Register: 'Register',
  rootClassName: '',
}

NavbarCircularOther.propTypes = {
  Login: PropTypes.string,
  Register: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavbarCircularOther
