import { GetServerSideProps } from 'next';
// import Hero from '../components/Home/Hero/Index';
// import Work from '../components/Home/Work/Index';
// import Help from '../components/Home/Help/Index';
import Layout from '../components/Layout';
import { createClient } from 'contentful';
import loadable from '@loadable/component';
import React, { useState } from 'react';
const Drawer = loadable(() => import('../components/Drawer'));
const WhySection = loadable(() => import('../components/Home/Why/Index'));
const Hero = loadable(() => import('../components/Home/Hero/Index'));
const Work = loadable(() => import('../components/Home/Work/Index'));
const Help = loadable(() => import('../components/Home/Help/Index'));
import LottieBoxContainer from './../components/Micro/LottieBoxContainer';
import Contact from '../components/Contact/Index';

export default function Home({ services, projects, tests }) {
  const [isActiveDrawer, setIsActiveDrawer] = useState(false);
  const [showText, setShowText] = useState(true);

  return (
    <Layout>
      <Hero showText={showText} setShowText={setShowText} />
      <Work projects={projects} />
      <LottieBoxContainer />
      <WhySection services={services} />
      <Help setIsActiveDrawer={setIsActiveDrawer} />
      <Drawer isActive={isActiveDrawer} setIsActive={setIsActiveDrawer}>
        <Contact />
      </Drawer>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  });
  // Fetch services
  const services = await client.getEntries({ content_type: 'faq' });
  const projects = await client.getEntries({ content_type: 'project', locale: '*' });
  const tests = await client.getEntries({ content_type: 'test' });

  return {
    props: { services: services.items, projects: projects.items, tests: tests },
  };
};

/*

Figma File: https://www.figma.com/file/CTFdrSs4BerxkdftilTRYm/mellow-agency?node-id=0%3A1
Github Repo: https://github.com/m90khan/mellow-agency-app 
Live Link: https://mellow-agency-app.vercel.app/
Demo Video: https://youtu.be/_XRKDB9QsfY

*/
