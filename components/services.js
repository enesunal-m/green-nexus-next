import React from 'react'

import PropTypes from 'prop-types'

import ServicesCard from './services-card'

const Services = (props) => {
  return (
    <>
      <div
        id="services"
        className="services-services bg-animation section-container"
      >
        <div className="services-heading-container">
          <div className="services-text-container">
            <span className="services-text">{props.text}</span>
            <h2 className="services-text1">
              <span className="Heading2">
                We provide a wide range of
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="Heading2"></br>
              <span className="Heading2">creative solutions</span>
              <br></br>
            </h2>
          </div>
          <div className="services-controls">
            <button className="control-btn">
              <svg viewBox="0 0 1024 1024" className="services-icon">
                <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
              </svg>
              {props.button}
            </button>
            <button className="control-btn">
              <svg viewBox="0 0 1024 1024" className="services-icon2">
                <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
              </svg>
              {props.button1}
            </button>
          </div>
        </div>
        <div className="services-cards-container">
          <div className="services-container">
            <ServicesCard
              text="Idea Showcase"
              text1="Browse, search, and submit sustainable projects and ideas."
              image_src="/playground_assets/idea_showcase-200h.png"
              rootClassName="services-card-root-class-name"
            ></ServicesCard>
            <ServicesCard
              text="Investor Portal &amp; Crowdfunding"
              text1="Access funding opportunities, pitch ideas to potential investors, and participate in crowdfunding campaigns."
              image_src="/playground_assets/crowdfunding-200h.png"
              rootClassName="services-card-root-class-name1"
            ></ServicesCard>
            <ServicesCard
              text="Networking &amp; Collaboration "
              text1="Discover upcoming events, webinars, and schedule meetings with other members."
              image_src="/playground_assets/collab_icon-200h.png"
              rootClassName="services-card-root-class-name3"
            ></ServicesCard>
            <ServicesCard
              text="Mentorship Hub"
              text1="Receive expert guidance, resources, and support from industry leaders."
              image_src="/playground_assets/mentoring-200h.png"
              rootClassName="services-card-root-class-name2"
            ></ServicesCard>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .services-services {
            width: 100%;
            display: flex;
            position: relative;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .services-heading-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .services-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .services-text1 {
            color: rgb(0, 0, 0);
          }
          .services-controls {
            display: grid;
            grid-gap: 12px;
            grid-template-columns: 1fr 1fr;
          }
          .services-icon {
            width: 16px;
            height: 16px;
          }
          .services-icon2 {
            width: 16px;
            height: 16px;
          }
          .services-cards-container {
            width: 100%;
            display: flex;
            grid-gap: 20px;
          }
          .services-container {
            gap: 10px;
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
        `}
      </style>
    </>
  )
}

Services.defaultProps = {
  button: '',
  button1: '',
  text: 'our services',
}

Services.propTypes = {
  button: PropTypes.string,
  button1: PropTypes.string,
  text: PropTypes.string,
}

export default Services
