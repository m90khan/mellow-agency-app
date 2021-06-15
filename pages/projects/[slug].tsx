import { createClient } from 'contentful';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Layout from '../../components/Layout';
import media from 'css-in-js-media';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const WordDetails = ({ project }) => {
  const {
    title,
    description,
    featureImage: {
      fields: {
        file: { url: featImage },
      },
    },
    techs,
    thumbnail: {
      fields: {
        file: { url: thumbImage },
      },
    },
  } = project.fields;

  console.log(project.fields);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Layout
      title={title + ' | Mellow Creative Studio'}
      description={description.slice(0, 200)}
    >
      <AnimatePresence>
        <ProjectHeader>
          <Link href={`/projects/${project.fields.slug}`}>
            <motion.div layoutId={project.sys.id}>
              <Image
                className='image'
                src={'https:' + thumbImage}
                layout='responsive'
                width={project.fields.thumbnail.fields.file.details.image.width}
                height={project.fields.thumbnail.fields.file.details.image.height}
              />
            </motion.div>
          </Link>

          <motion.div>
            <motion.h1 layoutId={project.fields.title}>{title}</motion.h1>
            <motion.p layoutId={project.fields.description.slice(0, 5)}>
              {description}
            </motion.p>
            <h1>Tech Stack:</h1>
            <motion.p>{techs.map((skill) => ` ${skill},`)}</motion.p>
          </motion.div>
        </ProjectHeader>
        <motion.div>
          <Image
            className='image'
            src={'https:' + featImage}
            layout='responsive'
            width={project.fields.featureImage.fields.file.details.image.width}
            height={project.fields.featureImage.fields.file.details.image.height}
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
  });

  return {
    props: { project: project.items[0] },
  };
};
