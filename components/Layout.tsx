import Head from 'next/head';
import { ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';
import media from 'css-in-js-media';

import { useRouter, NextRouter } from 'next/router';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Cursor from './Cursor';

interface Props {
  title: string | null;
  keywords?: string | null;
  description?: string | null;
  children?: ReactNode;
  functionChildren?: (name: string) => React.ReactNode;
}
function Layout({ title, keywords, description, children }: Props) {
  const router: NextRouter = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;600;800&display=swap'
        />
      </Head>
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Cursor toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Container> {children}</Container>

      <Footer />
    </>
  );
}
Layout.defaultProps = {
  title: 'Mellow | We build brands',
  description: 'We help brands by connecting their goals with customer motivation',
  keywords: 'agency, brand, design, development, seo',
};

const Container = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  ${media('<=phone')} {
    max-width: 95%;
    padding: 0 1rem;
  }
`;
export default Layout;
/*
smallPhone: 320
phone: 600
tablet: 768
desktop: 1024
largeDesktop: 1440
*/
