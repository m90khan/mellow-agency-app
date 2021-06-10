import { createClient } from 'contentful';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Layout from '../../components/Layout';
import media from 'css-in-js-media';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

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

  console.log(featImage, thumbImage);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Layout title={title + ' | Mellow'} description={description.slice(0, 200)}>
      <AnimateSharedLayout>
        <main className='layout'>
          <AnimatePresence>
            <motion.header layoutId='header'>
              <motion.div layoutId='projectImg'>
                <Image
                  alt='logo'
                  src={'https:' + thumbImage}
                  layout='responsive'
                  width={project.fields.thumbnail.fields.file.details.image.width}
                  height={project.fields.thumbnail.fields.file.details.image.height}
                />
              </motion.div>
              <Link href={`/projects/${project.fields.slug}`}>
                <motion.h1 layoutId='logo' className='fake-logo'>
                  {title}
                </motion.h1>
              </Link>
            </motion.header>
          </AnimatePresence>
        </main>
      </AnimateSharedLayout>
    </Layout>
  );
};

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
