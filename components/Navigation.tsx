import React, { useState } from 'react';
//Styled Components
import { Nav, NavHeader, NavList, NavVideos } from '../styles/NavigationStyles';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Container, Flex } from '../styles/UtilStyles';

const navRoutes = [
  {
    id: 0,
    title: 'Aloha Travels',
    path: '/aloha-travels',
    video: 'aloha-video.mp4',
  },
  {
    id: 1,
    title: 'AirHouse',
    path: '/airhouse',
    video: 'airhouse-video.mp4',
  },
  {
    id: 2,
    title: 'Aya Kaffee',
    path: '/ayakaffee',
    video: 'ayakaffee-video.mp4',
  },
  {
    id: 3,
    title: 'Meet UP',
    path: '/meetup',
    video: 'meetup-video.mp4',
  },
];

const Navigation = ({ toggleMenu, setToggleMenu }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: 'aloha-video.mp4',
    key: '0',
  });

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: '-100%' }}
            exit={{ x: '-100%' }}
            animate={{ x: toggleMenu ? 0 : '-100%', type: 'spring' }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex>
                  <Link href='/'>
                    <h1>Projects</h1>
                  </Link>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map((route) => (
                    <motion.li
                      key={route.id}
                      onHoverStart={() =>
                        setRevealVideo({
                          show: true,
                          video: route.video,
                          key: `${route.id}`,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealVideo({
                          show: false,
                          video: route.video,
                          key: `${route.id}`,
                        })
                      }
                    >
                      <Link href={`/projects${route.path}`}>
                        <motion.div
                          initial={{ x: -108 }}
                          className='link'
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                          <span className='arrow'>
                            <motion.svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 101 57'
                            >
                              <path
                                d='M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z'
                                fill='#000'
                                fillRule='evenodd'
                              ></path>
                            </motion.svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </NavList>

              <NavVideos>
                <motion.div
                  animate={{ width: revealVideo.show ? 0 : '100%' }}
                  className='reveal'
                ></motion.div>
                <motion.div className='video'>
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key}
                      src={`/video/${revealVideo.video}`}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      loop
                      autoPlay
                    ></motion.video>
                  </AnimatePresence>
                </motion.div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
