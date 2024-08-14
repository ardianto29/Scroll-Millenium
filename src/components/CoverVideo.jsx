import React from "react";
import styled from "styled-components";
import mainVideo from "../assets/videos/Opening.mp4";
import { motion } from "framer-motion";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
`;

const Title = styled(motion.h1)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  span {
    display: flex;
    flex-direction: row;
    margin: 0 45px;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }
  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: { delayChildren: 5, staggerChildren: 0.3 }, // Moved transition here
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.44"
            data-scroll-speed="4">
            M
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.39"
            data-scroll-speed="4">
            I
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.34"
            data-scroll-speed="4">
            L
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.29"
            data-scroll-speed="4">
            L
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.24"
            data-scroll-speed="4">
            E
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.19"
            data-scroll-speed="4">
            N
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.14"
            data-scroll-speed="4">
            I
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4">
            U
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4">
            M
          </motion.h1>
        </div>
        <motion.h2
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2">
          Welcome To Millenium Science School
        </motion.h2>
      </Title>
      <video src={mainVideo} typeof="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
