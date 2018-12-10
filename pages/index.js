import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout';
import DevicesTable from '../components/devicesTable';

export default () => (
  <div>
    <Head>
      <title>Devices</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"/>
    </Head>
    <Layout>
      <DevicesTable>
      </DevicesTable>
    </Layout>
  </div>
)
