import React from "react";
import styled from "styled-components";

import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.jpg";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;

  display: flex;

  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 18%;
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }

  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal">
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Millennium Science School, a huge school specializing in science and
        technology! Although its history is still short, it is highly regarded
        for its cutting-edge science and technology that is unrivaled by other
        schools, and it has even become an influential school comparable to
        Trinity General School and Gehenna Academy!
        <br />
        <br />
        The newest of the Three Great Academies of Kivotos, which values logic
        and technical skill over all else. Because of it, they stand at the
        forefront of scientific research and attract many students who desire to
        study math or science.
        <br />
        <br />
        In the past, a group of researchers came together in an effort to solve
        seven difficult problems unsolvable by current technology, called the
        Millennium Problems.
      </Left>
      <Right>
        <img src={img1} alt="about us" />
        <img
          src={img2}
          alt="about us"
          className="small-img-1"
          data-scroll
          data-scroll-speed="5"
        />
        <img
          src={img3}
          alt="about us"
          className="small-img-2"
          data-scroll
          data-scroll-speed="-2"
        />
      </Right>
    </Section>
  );
};

export default About;
