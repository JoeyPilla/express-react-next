import React, { Component } from 'react'
import Layout from '../components/layout'; 
import Head from 'next/head';

import { Form, Header, Icon, Button } from 'semantic-ui-react';

export default class newDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pinout: '',
            dieplot: '',
            database: '',
            assura: '',
            evm: '',
            datasheet: ''
        }
    }
    render() {
            return (
            <div>
                <Head>
                    <title>Devices</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"/>
                </Head>
                <Layout>
                    <Header as='h1' textAlign='center'>
                        <Icon name='microchip'/>
                        {this.state.data.name}
                    </Header>
                    <Form>
                        <Form.Group>
                            <Form.Input label='Device Name' placeholder='Enter Device Name...' width={8} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input type='file' label='Pinout' placeholder={this.state.data.pinout} width={8} />
                            <Form.Input type='file' label='Dieplot' placeholder={this.state.data.dieplot} width={8} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input type='file' label='Database' placeholder={this.state.data.database} width={8} />
                            <Form.Input type='file' label='Assura' placeholder={this.state.data.assura} width={8} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input type='file' label='Datasheet' placeholder={this.state.data.datasheet} width={8} />
                            <Form.Input type='file' label='EVM' placeholder={this.state.data.evm} width={8} />
                        </Form.Group>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Layout>
            </div>
        )
}
}