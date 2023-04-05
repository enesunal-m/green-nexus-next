import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const LoginNavbar = (props) => {
  return (
    <>
      <div
        id="navbar"
        data-type="navbar"
        className={`login-navbar-container bg-animation ${props.rootClassName} `}
      >
        <header data-thq="thq-navbar" className="navbar">
          <Link href="/">
            <a>
              <img
                alt="logo"
                src="/playground_assets/logo%202-200w.png"
                className="login-navbar-logo"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="login-navbar-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="login-navbar-nav"
            ></nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="login-navbar-btn-group"
          >
            <div className="login-navbar-container1"></div>
            <span className="login-navbar-text">{props.text}</span>
            <Link href="/register">
              <a className="login-navbar-link1 button-secondary gradient-text NormalButton button">
                {props.Register}
              </a>
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="login-navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="login-navbar-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="login-navbar-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="login-navbar-nav1"
            >
              <div className="login-navbar-container2">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="login-navbar-image"
                />
                <div
                  data-thq="thq-close-menu"
                  className="login-navbar-menu-close"
                >
                  <svg viewBox="0 0 1024 1024" className="login-navbar-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="login-navbar-nav2"
              >
                <span className="login-navbar-text1">About</span>
                <span className="login-navbar-text2">Features</span>
                <span className="login-navbar-text3">Pricing</span>
                <span className="login-navbar-text4">Team</span>
                <span className="login-navbar-text5">Blog</span>
              </nav>
              <div className="login-navbar-container3">
                <button className="login-navbar-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="login-navbar-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="login-navbar-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="login-navbar-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="login-navbar-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .login-navbar-container {
            width: 100%;
            height: 103px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .login-navbar-logo {
            width: 104px;
            align-self: center;
            text-decoration: none;
          }
          .login-navbar-desktop-menu {
            display: flex;
          }
          .login-navbar-nav {
            flex: 0 0 auto;
            color: #093e17;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .login-navbar-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .login-navbar-container1 {
            width: 2px;
            height: 30px;
            display: block;
            border-radius: 16px;
          }
          .login-navbar-text {
            color: #000000;
            font-size: 17px;
            font-family: Roboto;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .login-navbar-link1 {
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
          .login-navbar-link1:hover {
            color: #562b2b;
          }
          .login-navbar-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .login-navbar-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .login-navbar-mobile-menu {
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
          .login-navbar-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .login-navbar-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .login-navbar-image {
            height: 2rem;
          }
          .login-navbar-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .login-navbar-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .login-navbar-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .login-navbar-text1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .login-navbar-text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .login-navbar-text3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .login-navbar-text4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .login-navbar-text5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .login-navbar-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .login-navbar-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .login-navbar-icon-group {
            display: flex;
          }
          .login-navbar-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .login-navbar-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .login-navbar-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 1200px) {
            .login-navbar-container {
              width: 1200px;
              height: 100px;
              margin-top: 0px;
            }
            .login-navbar-text {
              font-size: 15px;
            }
            .login-navbar-link1 {
              background-image: linear-gradient(
                90deg,
                rgb(193, 30, 55) 67%,
                rgba(204, 115, 76, 0.29) 100%
              );
            }
          }
          @media (max-width: 991px) {
            .login-navbar-container {
              width: 816px;
            }
            .login-navbar-desktop-menu {
              display: none;
            }
            .login-navbar-btn-group {
              display: none;
            }
            .login-navbar-link1 {
              padding-left: var(--dl-space-space-unit);
            }
            .login-navbar-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .login-navbar-icon {
              fill: #ffffff;
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
          }
          @media (max-width: 479px) {
            .login-navbar-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

LoginNavbar.defaultProps = {
  rootClassName: '',
  Login: 'Login',
  text: "Don't Have an Account?",
  Register: 'Register',
}

LoginNavbar.propTypes = {
  rootClassName: PropTypes.string,
  Login: PropTypes.string,
  text: PropTypes.string,
  Register: PropTypes.string,
}

export default LoginNavbar
