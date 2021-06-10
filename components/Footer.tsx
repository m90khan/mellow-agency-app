import React, { useEffect, useRef } from 'react';

// Scroll Animations
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import media from 'css-in-js-media';

//Icons
import { Instagram, Facebook, Vimeo } from '../assets/svg/social-icons';
import styled from 'styled-components';
export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  display: flex;
  ${media('>desktop')} {
    max-width: 1152px;
  }
  ${media('<=desktop', '>tablet')} {
    max-width: 960px;
  }
  ${media('<=tablet', '>phone')} {
    font-size: 52.5%;
  }
  ${media('<=phone')} {
    font-size: 50%;
  }
`;
const Footer = () => {
  const animation = useAnimation();
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });
  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <FooterNav
      ref={footerRef}
      animate={animation}
      initial='hidden'
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
          <FooterContent>
            <p>123.872.1279</p>
            <p>hello@mellow.studio</p>
          </FooterContent>
          <FooterContent>
            <p>Richard Wagner 900 Unit C</p>
            <p>Berlin, BE. DE 661125</p>
          </FooterContent>{' '}
        </div>

        <FooterSocial>
          <a href='/' target='_blank'>
            <Instagram />
          </a>
          <a href='/' target='_blank'>
            <Facebook />
          </a>
          <a href='/' target='_blank'>
            <Vimeo />
          </a>
        </FooterSocial>
      </Container>
    </FooterNav>
  );
};

export default Footer;
const FooterNav = styled(motion.div)`
  height: 20vh;
  margin-top: 20rem;
`;

const FooterContent = styled.div`
  color: var(--yellow);
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.5;
  flex: 1;
`;

const FooterSocial = styled.div`
  display: flex;
  position: relative;
  a {
    position: relative;
    display: block;
    width: 3rem;
    height: 2rem;
    padding: 0.2rem;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
