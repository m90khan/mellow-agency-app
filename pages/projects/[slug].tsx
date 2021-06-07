import { createClient } from 'contentful';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
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
      <p>{description}</p>
      <Image
        alt='logo'
        src={'https:' + thumbImage}
        layout='responsive'
        width={project.fields.thumbnail.fields.file.details.image.width}
        height={project.fields.thumbnail.fields.file.details.image.height}
      />
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
