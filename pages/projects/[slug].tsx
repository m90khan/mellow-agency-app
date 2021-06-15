import { createClient } from 'contentful';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Layout from '../../components/Layout';
import media from 'css-in-js-media';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FeaturedProjects } from '../../styles/HomeStyles';
import { useGlobalStateContext } from '../../utils/globalContext';

const WordDetails = ({ project }) => {
  const { currentLanguage } = useGlobalStateContext();

  const {
    title: { 'en-US': englishTitle, de: germanTitle },
    description: { 'en-US': englishDescription, de: germanDescription },
    featureImage: {
      'en-US': {
        fields: {
          file: {
            'en-US': {
              url: featImage,
              details: {
                image: { width: featImageWidth, height: featImageHeight },
              },
            },
          },
        },
      },
    },
    techs: { 'en-US': techStacks },
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
  } = project.fields;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Layout
      title={
        currentLanguage === 'english'
          ? englishTitle
          : germanTitle + ' | Mellow Creative Studio'
      }
      description={
        currentLanguage === 'english'
          ? englishDescription.slice(0, 200)
          : germanDescription.slice(0, 200)
      }
    >
      <AnimatePresence>
        <ProjectHeader>
          <Link href={`/projects/${project.fields.slug}`}>
            <motion.div layoutId={project.sys.id}>
              <Image
                className='image'
                src={'https:' + thumbImage}
                layout='responsive'
                width={thumbImageWidth}
                height={thumbImageHeight}
              />
            </motion.div>
          </Link>

          <motion.div>
            <motion.h1
            // layoutId={currentLanguage === 'english' ? englishTitle : germanTitle}
            >
              {currentLanguage === 'english' ? englishTitle : germanTitle}
            </motion.h1>

            <motion.p
            // layoutId={
            //   currentLanguage === 'english'
            //     ? englishDescription.slice(0, 5)
            //     : germanDescription.slice(0, 5)
            // }
            >
              {currentLanguage === 'english' ? englishDescription : germanDescription}
            </motion.p>

            <h1>Tech Stack:</h1>
            {techStacks.map((skill) => (
              <motion.p style={{ display: 'inline-block' }} key={skill}>
                {skill} ,
              </motion.p>
            ))}
          </motion.div>
        </ProjectHeader>
        <motion.div>
          <Image
            className='image'
            src={'https:' + featImage}
            layout='fixed'
            width={featImageWidth}
            height={thumbImageHeight}
          />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

const ProjectHeader = styled(motion.header)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 5rem;
  min-height: 80vh;

  width: 90%;
  margin: auto auto;
  padding: 2rem 0;

  ${media('<=desktop', '>tablet')} {
    grid-template-columns: 1fr;
  }
  ${media('<=tablet', '>phone')} {
    font-size: 52.5%;
  }
  ${media('<=phone')} {
    font-size: 50%;
  }
  h1 {
    padding: 2rem 0;
    color: ${(props) => props.theme.text};
  }
  p {
    font-size: 1.8rem;
    padding: 0.5rem;
    line-height: 1.4;
  }
`;

export default WordDetails;

export const getServerSideProps: GetServerSideProps = async ({ query: { slug } }) => {
  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  });
  // Fetch services
  const project = await client.getEntries({
    content_type: 'project',
    'fields.slug[match]': slug,
    locale: '*',
  });
  return {
    props: { project: project.items[0] },
  };
};

/*
fields: {…}
​​
description: Object {
   "en-US": "Travel has always been an integral part of human life to reduce stress. People are always looking 
   for new and exciting locations and most of the places out there become mundane after one visit. Besides how many times 
   we try to book the next best trip using the many third-party aggregators?. The recent covid-19 element completely plunges 
   the travel industry.\n\nIntroducing Aloha Travels, a travel company based in the USA that provides exciting tours to remote 
   locations with tour guides to make your travel adventure memorable.\n\nThis project was assigned in March 2020. It was a solo 
   led project comprised of starting the project from scratch with ideation, research, design, and development. I collaborated 
   with all available stakeholders over the time period on the execution and delivery of the final product v1. ", 
   
   de: "Reisen war schon immer ein fester Bestandteil des menschlichen Lebens, um Stress abzubauen. Die Leute sind immer auf der Suche nach neuen und aufregenden Orten und die meisten Orte da draußen werden nach einem Besuch alltäglich. Abgesehen davon, wie oft wir versuchen, die nächstbeste Reise über die vielen Drittanbieter-Aggregatoren zu buchen?. Das jüngste Covid-19-Element stürzt die Reisebranche vollständig ab.\n\nWir stellen Ihnen Aloha Travels vor, ein Reiseunternehmen mit Sitz in den USA, das aufregende Touren zu abgelegenen Orten mit Reiseleitern anbietet, um Ihr Reiseabenteuer unvergesslich zu machen.\n\nDieses Projekt wurde im März 2020 zugewiesen. Es war ein allein geführtes Projekt, das aus dem Start des Projekts von Grund auf mit Ideenfindung, Forschung, Design und Entwicklung bestand. Ich habe während des gesamten Zeitraums mit allen verfügbaren Stakeholdern an der Ausführung und Lieferung des Endprodukts v1 zusammengearbeitet." }
​​
featureImage: Object { "en-US": {…} }
​​
slug: Object { "en-US": "aloha-travels" }
​​
techs: Object { "en-US": (7) […] }
​​
thumbnail: Object { "en-US": {…} }
​​
title: Object { "en-US": "Aloha Travels", de: "Aloha Reisen" }
​​
<prototype>: Object { … }
​
metadata: Object { tags: [] }
​
sys: Object { id: "66x3rodEQbedxfqXEXIrEb", type: "Entry", createdAt: "2021-06-06T23:51:31.606Z", … }
​
<prototype>: {…

*/
