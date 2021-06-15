import Link from 'next/link';
import styled from 'styled-components';
import media from 'css-in-js-media';
import { motion } from 'framer-motion';
import Image from 'next/image';
import IconToggle from './IconToggle';
import { useGlobalStateContext } from '../utils/globalContext';
export default function Header({ setToggleMenu, toggleMenu }) {
  const { currentTheme } = useGlobalStateContext();

  return (
    <HeaderContainer
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 2,
      }}
    >
      <div className='header-inner'>
        <IconToggle toggleMenu={toggleMenu} />
        <Link href='/'>
          {currentTheme === 'dark' && !toggleMenu ? (
            <Image
              alt='logo'
              src='/images/logo.svg'
              layout='fixed'
              width={180}
              height={50}
              className='logo'
            />
          ) : (
            <Image
              alt='logo'
              src='/images/logo-dark.svg'
              layout='fixed'
              width={180}
              height={50}
              className='logo'
            />
          )}
        </Link>

        <div
          className={
            toggleMenu ? 'hamburger-menu hamburger-menu--span' : 'hamburger-menu'
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <motion.span
            initial={{ rotate: 0 }}
            animate={{
              rotate: toggleMenu ? 45 : 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          ></motion.span>
          <motion.span
            initial={{ rotate: 0, y: 0 }}
            animate={{
              rotate: toggleMenu ? -45 : 0,
              y: toggleMenu ? -6 : 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          ></motion.span>
        </div>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(motion.div)`
  font-size: 1.8rem;
  height: 10vh;
  display: flex;
  justify-content: center;
  padding: 0 10rem;
  ${media('<=tablet')} {
    padding: 0;
  }
  .header-inner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      cursor: pointer;
      z-index: 100;
    }

    .hamburger-menu {
      height: 56px;
      width: 56px;
      border-radius: 100%;
      display: flex;
      z-index: 100;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      cursor: pointer;
      &:hover {
        background: var(--yellow);
      }
      &:hover span {
        background: ${(props) => props.theme.text};
      }

      span {
        width: 20px;
        height: 3px;
        margin: 2px 0;
        background: ${(props) => props.theme.text};
        display: block;
        transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      &--nav {
        span {
          background: var(--black) !important;
        }
      }
    }
  }
`;
