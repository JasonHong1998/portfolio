import React from 'react';
import { Layout, SEO } from 'components/common';

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <h1>Whoops!</h1>
    <p>You just hit a route that doesn&#39;t exist! It's okay, don't cry!</p>
  </Layout>
);
