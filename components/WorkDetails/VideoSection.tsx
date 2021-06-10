import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import media from 'css-in-js-media';

export const fade = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.75 },
  },
};
const VideoSection = ({
  src = 'https://www.youtube-nocookie.com/embed/ghzFFalTciE',
  width = '80%',
  title = 'Video Resume',
  highlight = 'Full Story',
  border = 'red',
  resume,
}) => {
  return (
    <Video style={{ width: width, height: '100vh' }} id='videoSectionID'>
      <motion.div
        className='video-block'
        variants={fade}
        initial='hidden'
        style={{ border: `2px solid ${border}` }}
      >
        {highlight && <motion.h4 className='short'>{highlight}</motion.h4>}
        {title && <motion.h3 style={{ color: border }}>{title}</motion.h3>}
        <br />
        <motion.div className='video'>
          <iframe
            title='Video Resume'
            src={src}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>
    </Video>
  );
};
const Video = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 5rem;

  ${media('<=desktop', '>tablet')} {
    height: 70vh;
  }
  ${media('<=tablet', '>phone')} {
    height: 50vh;
  }
  ${media('<=phone')} {
    width: 95% !important;
  }

  .video-block {
    /* background: rgba(25, 32, 44, 0.5); */
    padding: 6rem;
    width: 80%;
    z-index: 900;
    height: auto;
    color: var(--white);
    background: rgba(25, 32, 44, 0.8);
    border-bottom-right-radius: 4rem;
    border-top-right-radius: 4rem;
    border-bottom-left-radius: 4rem;
    position: relative;
    -webkit-box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);
    box-shadow: 2px 5px 15px 8px rgba(0, 0, 0, 0.6);

    ${media('>=desktop')} {
      width: 95%;
    }
    ${media('<=tablet', '>phone')} {
      width: 90%;
    }
    ${media('<=phone')} {
      padding: 3rem 2rem;
    }

    .video {
      overflow: hidden;
      padding-bottom: 56.25%;
      position: relative;
      height: 0;
      border: 1rem solid var(--yellow);

      iframe {
        border: 1rem solid var(--white);
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
      }
    }
    ${media('<=phone')} {
      width: 100%;
    }
  }
`;
export default VideoSection;
