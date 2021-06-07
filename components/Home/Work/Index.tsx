import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import media from 'css-in-js-media';
import Image from 'next/image';
import Link from 'next/link';

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
const BoldTitle = styled(motion.h2)`
  position: sticky;
  top: 10px;
  font-weight: 500;
  color: var(--yellow);
  font-size: 4rem;
  margin: 0;

  ${media('<=tablet', '>phone')} {
    font-size: 8vw;
  }
  ${media('<=phone')} {
    font-size: 5rem;
  }
`;
const Caption = styled(motion.p)`
  font-size: 2.5vw;
  margin: 1rem 0;
  line-height: 1.2;
  color: var(--white);

  &:hover {
    color: var(--yellow);
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
  const [statsRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <StyledAbout>
      <SplitWrapper ref={statsRef}>
        <StatRows>
          {projects.map((project) => (
            <motion.div key={project.sys.id}>
              <OverflowWrapper>
                <Image
                  alt='logo'
                  src={'https:' + project.fields.thumbnail.fields.file.url}
                  layout='responsive'
                  width={project.fields.thumbnail.fields.file.details.image.width}
                  height={project.fields.thumbnail.fields.file.details.image.height}
                />
                <BoldTitle
                  initial={{ y: '100%' }}
                  animate={inView && { y: 0 }}
                  transition={{
                    ease: [0.6, 0.05, -0.01, 0.9],
                    duration: 0.5,
                  }}
                ></BoldTitle>
              </OverflowWrapper>
              <Link href={`/projects/${project.fields.slug}`}>
                <Caption>{project.fields.title}</Caption>
              </Link>
            </motion.div>
          ))}
        </StatRows>
        <div>
          <BoldTitle>
            <p>
              Mellow is an integrated, full-service creative studio offering video
              production, creative development, and post-production services.
            </p>
            <h1>Recent Projects</h1>
          </BoldTitle>
        </div>
      </SplitWrapper>
    </StyledAbout>
  );
};

export default Work;
