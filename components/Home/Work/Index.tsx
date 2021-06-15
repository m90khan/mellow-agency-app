import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { AnimateSharedLayout, motion, AnimatePresence } from 'framer-motion';
import media from 'css-in-js-media';
import Image from 'next/image';
import Link from 'next/link';
import { useGlobalStateContext } from '../../../utils/globalContext';

const StyledAbout = styled.section`
  padding-top: 15rem;
  max-width: 80%;
  margin: 0 auto;
`;
const SplitWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 4rem;

  ${media('<=tablet', '>phone')} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
  }
`;
const OverflowWrapper = styled.div`
  overflow: hidden;
`;
const StatRows = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 4vw;

  ${media('<=tablet', '>phone')} {
    order: 1;
  }
`;
const BoldTitle = styled(motion.div)`
  position: sticky;
  font-weight: 500;
  top: 10px;
  padding: 1rem 0;
  color: ${(props) => props.theme.text};
  font-size: 4rem;
  margin: 0;

  h1 {
    &:hover {
      color: ${(props) => props.theme.bigText};
      cursor: pointer;
    }
  }
  p {
    font-size: 5rem;
    color: ${(props) => props.theme.bigText};
  }
  ${media('<=tablet', '>phone')} {
    font-size: 8vw;
  }
  ${media('<=phone')} {
    font-size: 5rem;
  }
`;
const Caption = styled(motion.h1)`
  font-size: 4vw;
  margin: 1rem 0;
  line-height: 1.2;
  color: ${(props) => props.theme.bigText};

  &:hover {
    color: ${(props) => props.theme.header};
    cursor: pointer;
  }

  ${media('<=tablet', '>phone')} {
    font-size: 5vw;
  }
  ${media('<=phone')} {
    font-size: 2.2rem;
  }
`;

const Work = ({ projects }) => {
  const { currentLanguage } = useGlobalStateContext();

  const [statsRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const WorkTitle =
    currentLanguage === 'english'
      ? 'Mellow is an integrated, full-service creative studio offering video production, creative development, and post-production services.'
      : 'Mellow ist ein integriertes Full-Service-Kreativstudio, das Videoproduktion, kreative Entwicklung und Postproduktionsdienste anbietet.';
  const recentProjects =
    currentLanguage === 'english' ? 'Recent Projects' : 'Letzte Projekte';

  return (
    <StyledAbout>
      <SplitWrapper ref={statsRef}>
        <StatRows>
          {projects.map(
            ({
              fields: {
                title: { 'en-US': englishTitle, de: germanTitle },
                description: { 'en-US': englishDescription, de: germanDescription },

                thumbnail: {
                  'en-US': {
                    fields: {
                      file: {
                        'en-US': {
                          url: thumbImage,
                          details: {
                            image: { width: thumbImageWidth, height: thumbImageHeight },
                          },
                        },
                      },
                    },
                  },
                },
                slug: { 'en-US': projectSlug },
              },
              sys: { id: sysID },
            }) => (
              <motion.div key={sysID}>
                <OverflowWrapper>
                  <motion.header>
                    <motion.div>
                      <motion.div layoutId={sysID}>
                        <Image
                          className='image'
                          src={'https:' + thumbImage}
                          layout='responsive'
                          width={thumbImageWidth}
                          height={thumbImageHeight}
                        />
                      </motion.div>
                    </motion.div>
                    <Link href={`/projects/${projectSlug}`}>
                      <motion.h1
                      // layoutId={
                      //   currentLanguage === 'english' ? englishTitle : germanTitle
                      // }
                      >
                        {currentLanguage === 'english' ? englishTitle : germanTitle}
                      </motion.h1>
                    </Link>
                  </motion.header>
                </OverflowWrapper>
                {/* <Link href={`/projects/${project.fields.slug}`}>
              <Caption>{project.fields.title}</Caption>
            </Link> */}
              </motion.div>
            )
          )}
        </StatRows>
        <div>
          <BoldTitle>
            <p>{WorkTitle}</p>
            <h1>{recentProjects}</h1>
          </BoldTitle>
        </div>
      </SplitWrapper>
    </StyledAbout>
  );
};

export default Work;
