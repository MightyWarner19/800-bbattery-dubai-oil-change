import Head from "next/head";
import { useRouter } from "next/router";

// Default value for some meta data
const defaultMeta = {
  title: '24x7 Car Battery Replacement | 800 BBattery',
  siteName: '800 BBattery',
  description:
    'Get 24x7 car battery replacement services from 800 BBattery. Quick, reliable, and professional assistance whenever you need it. Contact us today!',
  url: 'https://www.800bbattery.com/best-car-battery-services-in-dubai',
  type: 'website',
  robots: 'follow, index',
  image: 'https://imagedelivery.net/yg9mV_kJZn9RkpQKfOuKfA/a8df3196-6c39-4799-0072-92dbd37c6700/public',
  author: '800 BBattery'
};

// Add GTM script to the head section
const gtmScript = `
  (function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-MNXRNNP6');
`;

const SeoHead = (props) => {
  const router = useRouter();
  const meta = { ...defaultMeta, ...props };

  meta.title = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;

  return (
    <Head>
      {/* GTM script in the head */}
      <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
      
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta name='publish_date' property='og:publish_date' content={meta.date} />
          <meta name='author' property='article:author' content={meta.author} />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      {/* Windows 8 app icon */}
      <meta name='msapplication-TileColor' content='#f2871c' />
      {/* Accent color on supported browser */}
      <meta name='theme-color' content='#f2871c' />
    </Head>
  );
};

// Favicons, other icons, and manifest definition
const favicons = [
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '../public/favicon/apple-touch-icon.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '../public/assets/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    href: '../public/assets/favicon/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '../public/assets/favicon/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '../public/assets/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '../public/assets/favicon/android-chrome-192x192.png',
  },
  {
    rel: 'manifest',
    href: '../public/site.webmanifest',
  },
];

export default SeoHead;
