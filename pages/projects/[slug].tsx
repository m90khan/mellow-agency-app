import { createClient } from 'contentful';
import { GetServerSideProps } from 'next';
import React from 'react';

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
  return (
    <div>
      <h1>{title}</h1>
    </div>
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
