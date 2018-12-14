import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout';
import DevicesTable from '../components/devicesTable';
import {Button} from 'semantic-ui-react';

export default () => (
  <div>
    <Layout>
      <DevicesTable/>
      <Button onClick={<Link href='/newDevice'></Link>}>New Device</Button>
    </Layout>
  </div>
)
