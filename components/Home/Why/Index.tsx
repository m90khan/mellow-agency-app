import React, { useState, useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import media from 'css-in-js-media';

import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import { useGlobalStateContext } from '../../../utils/globalContext';
const Container = styled.div`
  padding: 0 2.75vw;
  max-width: 90%;
  margin: 5rem 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media('<=tablet')} {
    flex: 1;
    margin-top: 5rem;
    flex-wrap: wrap;
  }
`;

const DefaultCard = styled(motion.div)`
  border: 4px solid var(--text);
  padding: 4vw 2.75vw;
`;

const GridCenterStats = styled.div`
  grid-column-end: span 2;
  /* overflow: hidden; */
`;
const HeadlineWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  color: ${(props) => props.theme.bigText};
`;
const Headline = styled.span`
  font-size: 7vw;
  line-height: 1.2;
  word-wrap: nowrap;
  margin: 0 1vw;
  line-height: 95%;
  font-weight: 400;

  text-transform: uppercase;
`;

const WhySection = ({ services }) => {
  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    // Giving our scrollwheel additional margin before executing animation
    rootMargin: '-50px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial='hidden'
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: -72 },
      }}
    >
      <GridCenterStats>
        <DefaultCard
          initial={{ y: '-10%' }}
          animate={inView && { y: 0 }}
          transition={{
            ease: [0.6, 0.05, -0.01, 0.9],
            duration: 1,
            delay: 0.5,
          }}
        >
          <HeadlineWrapper
            initial={{ x: '0' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 15,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
          >
            <Headline>MELLO</Headline>
            <Headline>—</Headline>
            <Headline>STRATEGY</Headline>
            <Headline>—</Headline>
            <Headline>DESIGN </Headline>
            <Headline>—</Headline>
            <Headline>DEVELOP</Headline>
            <Headline>—</Headline>
            <Headline>OPERATE</Headline>
            <Headline>—</Headline>
          </HeadlineWrapper>
        </DefaultCard>
      </GridCenterStats>
      <Container>
        <About>
          <h2>
            Mellow is an integrated, full-service creative studio offering video
            production, creative development, and post-production services.
          </h2>
          <p>
            Everybody’s got a story. And we don’t stop until we’ve uncovered what makes
            yours worth telling. Whether it’s working directly with you, an agency
            partner, or putting the finishing touches on something special, we’re ready to
            dig in and get our hands dirty—are you?
          </p>
        </About>
        <Services>
          <h3>Services</h3>
          {services.map((service, index) => (
            <Accordion key={service.sys.id} details={service.fields} />
          ))}
        </Services>
      </Container>
    </HomeAboutSection>
  );
};

const Accordion = ({ details }) => {
  const [isToggled, setIsToggled] = useState(false);

  const [hovered, setHovered] = useState(false);
  const { currentTheme } = useGlobalStateContext();
  return (
    <>
      <AccordionHeader
        initial={false}
        onClick={() => setIsToggled((prevState) => !prevState)}
        whileHover={{
          color: !isToggled && currentTheme === 'dark' ? '#ffffff' : '#000000',
        }}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isToggled || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isToggled || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key='content'
        animate={{ height: isToggled ? 'auto' : '0' }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.description.map((result, index) => (
          <p key={index} className='tech-item'>
            {result}
          </p>
        ))}
      </AccordionContent>
    </>
  );
};

export default WhySection;

const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${(props) => props.theme.bigText} !important;
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.8rem;
  margin: 1rem 0;
`;
const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: ${(props) => props.theme.bigText};

    transition: all 0.1s ease-in-out;
  }
`;

const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;

  .tech-item {
    width: 100%;
    margin: 8px 0;
    font-size: 1.5rem;
    color: ${(props) => props.theme.text};
    display: block;
    font-weight: 300;
  }
`;

export const HomeAboutSection = styled(motion.div)`
  /* margin-bottom: 200px; */
  display: 'flex';
  justify-content: 'space-between';
  align-items: 'center';
  padding: 10rem 0;
  overflow: hidden;
  min-height: 100vh;
  ${media('<=tablet')} {
    min-height: auto;
  }
`;
const About = styled.div`
  ${media('<=tablet')} {
    flex: 0 0 100%;
  }
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin: 2rem 0 0 6rem;
    color: ${(props) => props.theme.text};
  }
  p {
    max-width: 50rem;
    font-size: 1.4rem;
    line-height: 1.6rem;
    margin: 2rem 0 0 6rem;
    color: ${(props) => props.theme.text};
  }
`;
const Services = styled.div`
  ${media('<=tablet')} {
    flex: 0 0 100%;
    max-width: 80%;
    margin-top: 4rem;
  }
  h3 {
    color: ${(props) => props.theme.text};
  }
`;
