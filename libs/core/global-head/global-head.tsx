import Head from 'next/head';

interface GlobalHeadProps {
  title: string;
  description: string;
}

export const GlobalHead = ({ title, description }: GlobalHeadProps) => {
  return (
    <Head>
      <title>{title} | Brad King</title>
      <meta name="description" content={description} />
      <link rel="icon" href={`/favicon.ico`} />
    </Head>
  );
};
