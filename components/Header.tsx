import Link from 'next/link';
import styled from 'styled-components';
import media from 'css-in-js-media';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Header({ setToggleMenu, toggleMenu }) {
  return (
    <HeaderContainer
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
    >
      <div className='header-inner'>
        <Link href='/'>
          {!toggleMenu ? (
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
          <span></span>
          <span></span>
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
        background: var(--black);
      }

      span {
        width: 20px;
        height: 3px;
        margin: 2px 0;
        background: var(--white);
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
