import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
const OverflowWrapper = styled.div`
  overflow: hidden;
`;
const Container = styled.div`
  padding: 0 2.75vw;
`;
const HelpSection = styled.section`
  padding-top: 5vw;
  overflow: hidden;
  position: relative;
`;
const SectionWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const BoldTitle = styled(motion.h1)`
  font-weight: 500;
  color: ${(props) => props.theme.text};
  font-size: 8rem;
  margin: 0;
  transform: translate(-50%, -50%);
  cursor: pointer;
  &:hover {
    color: var(--yellow);
  }
`;

const Bubble = styled(motion.div)`
  position: absolute;
  word-wrap: break-word;
  margin-bottom: 12px;
  line-height: 24px;
  padding: 1vw 2vw;
  border-radius: 25px;
  font-size: 2vw;

  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme.bigText};
  align-self: flex-end;

  &:before {
    right: -7px;
    width: 20px;
    background-color: ${(props) => props.theme.bigText};
    border-bottom-left-radius: 16px 14px;
  }

  &:after {
    right: -26px;
    width: 26px;
    background-color: ${(props) => props.theme.background};
    border-bottom-left-radius: 10px;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 25px;
  }
`;
const BubbleWrapper = styled.div`
  position: absolute;
  width: 100%;
`;
const Pos1 = styled(BubbleWrapper)`
  top: 20%;
  left: 5%;
`;
const Pos2 = styled(BubbleWrapper)`
  top: 35%;
  left: 55%;
`;
const Pos3 = styled(BubbleWrapper)`
  left: 15%;
  bottom: 15%;
`;
const Pos4 = styled(BubbleWrapper)`
  right: -45%;
  bottom: 30%;
`;

const Help = ({ setIsActiveDrawer }) => {
  const [firstTitle, setFirstTitle] = useState(true);
  const [secondTitle, setSecondTitle] = useState(false);
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setFirstTitle(true);
      setTimeout(() => {
        setFirstTitle(false);

        setTimeout(() => {
          setSecondTitle(true);
        }, 1000);
      }, 2500);
    }
  }, [inView]);

  return (
    <HelpSection ref={sectionRef}>
      <Container>
        <SectionWrapper>
          <Pos1>
            <Bubble
              initial={{ scale: 0 }}
              animate={inView && { scale: 1 }}
              transition={{
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 0.5,
                delay: 1,
              }}
            >
              You're facing problems with technical resources!
            </Bubble>
          </Pos1>
          <Pos2 data-scroll data-scroll-speed={-1}>
            <Bubble
              initial={{ scale: 0 }}
              animate={inView && { scale: 1 }}
              transition={{
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 0.5,
                delay: 2.2,
              }}
            >
              Oh no ... You made a architectural mistake?
            </Bubble>
          </Pos2>
          <Pos3 data-scroll data-scroll-speed={1}>
            <Bubble
              initial={{ scale: 0 }}
              animate={inView && { scale: 1 }}
              transition={{
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 0.5,
                delay: 1.8,
              }}
            >
              Need help with product validation?
            </Bubble>
          </Pos3>
          <Pos4 data-scroll data-scroll-speed={2}>
            <Bubble
              initial={{ scale: 0 }}
              animate={inView && { scale: 1 }}
              transition={{
                ease: [0.6, 0.05, -0.01, 0.9],
                duration: 0.5,
                delay: 1.4,
              }}
            >
              Problems with your website maintenance.
            </Bubble>
          </Pos4>
          <OverflowWrapper>
            <AnimatePresence>
              {firstTitle && (
                <BoldTitle
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.5,
                  }}
                >
                  How can we help?
                </BoldTitle>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {secondTitle && (
                <BoldTitle
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.5,
                  }}
                  onClick={() => setIsActiveDrawer(true)}
                >
                  Let's Connect
                </BoldTitle>
              )}
            </AnimatePresence>
          </OverflowWrapper>
        </SectionWrapper>
      </Container>
    </HelpSection>
  );
};

export default Help;
