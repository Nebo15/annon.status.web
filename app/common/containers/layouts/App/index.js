import React from 'react';
import Helmet from 'react-helmet';

export default ({ children }) => (<div>
  <Helmet
    htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
    titleTemplate="Annon Status Page - %s"
    defaultTitle="Annon Status Page - status page for Annon API Gateway "
    link={[
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/icons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/images/icons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/images/icons/favicon-16x16.png', sizes: '16x16' },
      { rel: 'manifest', href: '/images/icons/manifest.json' },
      { rel: 'mask-icon', href: '/images/icons/safari-pinned-tab.svg', color: '#2c83b5' },
      { rel: 'shortcut icon', href: '/favicon.ico?v=214' },
    ]}
    meta={[
      { charset: 'utf-8' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'api gateway, status, annon' },
      { name: 'description', content: 'Status page for Annon API Gateway.' },
      { property: 'og:title', content: 'Annon Status' },
      { property: 'og:site_name', content: 'Annon Status' },
      { property: 'og:description', content: 'Status page for Annon API Gateway.' },
      { name: 'apple-mobile-web-app-title', content: 'Annon Status' },
      { name: 'application-name', content: 'Annon Status' },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'msapplication-TileImage', content: '/images/icons/mstile-150x150.png' },
      { name: 'msapplication-config', content: '/images/icons/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' },
    ]}
  />
  { children }
</div>);
