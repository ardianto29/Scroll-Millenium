import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";
import { motion } from "framer-motion";

import img1 from "../assets/images/Rio.jpeg";
import img2 from "../assets/images/Noa.jpeg";
import img3 from "../assets/images/Chihiro.jpg";
import img4 from "../assets/images/Asuma.Toki.600.4067982.jpg";
import img5 from "../assets/images/Himari.jpeg";
import img6 from "../assets/images/Utaha.jpeg";
import img7 from "../assets/images/Sumire.jpg";
import img8 from "../assets/images/Alice.jpeg";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: 70px;
  }

  @media (max-width: 48em) {
    font-size: 40px;
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 24px;
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontlg};
    }

     @media (max-width: 48em) {
      width: 40%;
    p {
      font-size: ${(props) => props.theme.fontlg};
    }

     @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  } 
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5 rem;
    margin: 0 2rem;
  }
`;
const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 34rem;
    cursor: pointer;
    object-fit: cover;
  }
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;

    margin-top: 0.5rem;

    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const Product = ({ img, title = " " }) => {
  return (
    <Item
      initial={{ filter: `grayScale(100%)` }}
      whileHover={{ filter: `grayscale(0%)` }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}>
      <img width="400" height="600" src={img} alt={title}></img>
      <h1>{title}</h1>
    </Item>
  );
};
const Name = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          pin: true,
          // markers: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      //Horizontal Scroll
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          // markers: true,
        },
        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();

      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="name">
      <Title data-scroll data-scroll-speed="-1">
        Students
      </Title>
      <Left>
        <p>
          Millennium is able to compete with them in terms of influence as many
          of the infrastructure, equipment, and inventions seen and used all
          throughout Kivotos are said to have originated from Millennium.
          <br />
          <br />
          Millennium as a school was formed by these research groups, and
          Seminar was placed at its head.
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={img1} title="Tsukatsuki Rio" />
        <Product img={img2} title="Ushio Noa" />
        <Product img={img3} title="Kagami Chihiro" />
        <Product img={img4} title="Asuma Toki" />
        <Product img={img5} title="Akeboshi Himari" />
        <Product img={img6} title="Shiraishi Utaha" />
        <Product img={img7} title="Otohana Sumire" />
        <Product img={img8} title="Tendou Alice" />
      </Right>
    </Section>
  );
};

export default Name;
