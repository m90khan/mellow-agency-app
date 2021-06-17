import { motion } from 'framer-motion';
import { useLottie, useLottieInteractivity } from 'lottie-react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import scene from '../../assets/lottie/scene.json';
import { useGlobalStateContext } from '../../utils/globalContext';
import de from '../../utils/locales/de';
import en from '../../utils/locales/en';

const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 2, ease: 'easeOut' },
  },
};
const style = {
  height: '50vw',
  top: '10rem',
};
const LottieBox = () => {
  const options = {
    animationData: scene,
  };
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 1],
        type: 'seek',
        frames: [0, 240],
      },
    ],
  });
  return Animation;
};

const LottieBoxContainer = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
  });
  const { currentLanguage } = useGlobalStateContext();

  const t = currentLanguage === 'english' ? en : de;

  return (
    <Container ref={ref}>
      <Hide>
        {inView && (
          <Heading variants={titleAnim}>
            We find and combine the best resources to solve your problem ...
          </Heading>
        )}
      </Hide>
      <LottieBox />
    </Container>
  );
};

const Hide = styled.div`
  overflow: hidden;
  flex: 0 0 50%;
`;
const Heading = styled(motion.h2)`
  color: ${(props) => props.theme.background};
  font-size: 5rem;
`;
const Container = styled.div`
  display: flex;
  margin: 10rem 0 0 0;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.header};
`;

export default LottieBoxContainer;
