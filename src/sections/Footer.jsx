import React from "react";
import styled from "styled-components";

import Logo from "../assets/Svgs/MilleniumLogo.svg";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
    color: ${(props) => props.theme.text};
  }
  h3 {
    font-size: ${(props) => props.theme.fontxl};
    font-family: "Kaushan Script";

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 64em) {
    width: 85vw;
  }

  @media (max-width: 48em) {
    width: 90vw;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 64em) {
      justify-content: center;
    }

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Button = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    span {
      transform: none !important;
      margin-top: 0.5rem;
    }

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img data-scroll data-scroll-speed="2" src={Logo} alt="millenium" />
        <h3 data-scroll data-scroll-speed="-1">
          {" "}
          Millenium Science School
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}>
        <ul>
          <li onClick={() => handleScroll("#home")}>Home</li>
          <li onClick={() => handleScroll(".about")}>About</li>
          <li onClick={() => handleScroll("#name")}>Name</li>
          <li onClick={() => handleScroll("#akademi")}>Akademi</li>
          <li>
            <a
              href="https://bluearchive.fandom.com/wiki/Millennium_Science_School"
              target="_blank"
              rel="noreferrer">
              Source
            </a>
          </li>
          <li>
            <a
              href="https://github.com/codebucks27/wibe-studio"
              target="_blank"
              rel="noreferrer">
              Inspiration
            </a>
          </li>
        </ul>
        <Button>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal">
            &copy; {new Date().getFullYear()}. Millenium Science School.
          </span>
          <span>Made with Ardianto29</span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal">
            Thanks to &hearts; &nbsp;
            <a href="http://devdreaming.com" target="_blank" rel="noreferrer">
              CodeBucks
            </a>
          </span>
        </Button>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
