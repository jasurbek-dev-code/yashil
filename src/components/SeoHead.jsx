import Head from 'next/head';

export default function SeoHead({ title, description, keywords, url }) {
  const fullTitle = `${title} | Yashil Loyiha`;
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`https://yashilloyiha.uz${url}`} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://yashilloyiha.uz${url}`} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
