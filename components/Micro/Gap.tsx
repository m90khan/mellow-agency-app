import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

export const Gap = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <Wrapper>
      <motion.div
        className='container'
        style={{
          scale,
        }}
      >
        <motion.div
          className='item'
          style={{
            scaleY: scrollYProgress,
          }}
        />
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 150px;
  height: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
  }

  .item {
    width: inherit;
    height: inherit;
    background: white;
    transform-origin: 50% 100%;
  }
`;
