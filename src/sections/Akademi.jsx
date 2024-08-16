import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../assets/images/seminarMillenium.jpeg";
import img2 from "../assets/images/veritas.webp";
import img3 from "../assets/images/cnc.webp";
import img4 from "../assets/images/SPTF_Logo.webp";
import img5 from "../assets/images/Game_Dev_Icon.webp";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  color: ${(props) => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Text = styled.div`
  width: 20%;
  font-size: 17px;
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: 17.5px;
  }

  @media (max-width: 48em) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  box-shadow: 0 0 0 4vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.body};
  z-index: 11;

  @media (max-width: 70em) {
    width: 40vw;
    height: 80vh;
  }

  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
  }

  @media (max-width: 48em) {
    width: 60vw;
  }

  @media (max-width: 30em) {
    width: 80vw;
    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }

  @media (max-width: 48em) {
    width: 40vw;
  }

  @media (max-width: 30em) {
    width: 60vw;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Product = ({ img, title = " " }) => {
  return (
    <Item>
      <img width="400" height="600" src={img} alt={title}></img>
      <h2 style={{ paddingTop: "32px" }}>{title}</h2>
    </Item>
  );
};

const Akademi = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App",
          scrub: true,
          pin: true,
          // markers: true,
        },

        ease: "none",
      });

      //Vertical Scroll
      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },

        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: true,
            // markers: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();

      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="akademi">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal">
        Akademi
      </Title>

      <Container ref={ScrollingRef}>
        <Product img={img1} title="Seminar" />
        <Product img={img2} title="Veritas" />
        <Product img={img3} title="Cleaning&Clearing(C&C)" />
        <Product img={img4} title="Paranormal Affairs Department" />
        <Product img={img5} title="Game Development Department" />
      </Container>

      <Text data-scroll data-scroll-speed="-4">
        Millennium is able to compete with them in terms of influence as many of
        the infrastructure, equipment, and inventions seen and used all
        throughout Kivotos are said to have originated from Millennium.
        <br />
        <br />
        In the past, a group of researchers came together in an effort to solve
        seven difficult problems unsolvable by current technology, called the
        Millennium Problems.
        <br />
        <br />
        Every year, the school holds a large-scale contest known as the
        Millennium Prize, where clubs all throughout the school compete with the
        results of their club activities.
      </Text>
    </Section>
  );
};

export default Akademi;
