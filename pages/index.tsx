import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Home/Hero/Index';
import Work from '../components/Home/Work/Index';
import Layout from '../components/Layout';
import { API_URL, PER_PAGE } from '../utils/helper';
import { createClient } from 'contentful';
import WhySection from '../components/Home/Why/Index';
import Help from '../components/Home/Help/Index';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Drawer from '../components/Drawer';
import Clock from 'react-clock';

import Contact from '../components/Contact/Index';
export default function Home({ services, projects }) {
  const [isActiveDrawer, setIsActiveDrawer] = useState(false);
  const [showText, setShowText] = useState(true);

  return (
    <Layout>
      <Hero showText={showText} setShowText={setShowText} />

      <Work projects={projects} />
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
  const projects = await client.getEntries({ content_type: 'project' });

  return {
    props: { services: services.items, projects: projects.items },
  };
};
