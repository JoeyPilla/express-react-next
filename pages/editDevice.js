import React, { Component } from 'react'
import Layout from '../components/layout';
import DeviceGridColumn from '../components/deviceGridColumn';
import { Form, Header, Icon, Input, Item, Button, Label, Grid } from 'semantic-ui-react';
import { runInThisContext } from 'vm';

export default class editDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            files: []
        }

        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static getInitialProps({ query: { id } }) {
        return { id: id }
    }

    componentDidMount() {
        console.log(this.props.id)
        fetch(`/api/getDevice/${this.props.id}`)
            .then(res => res.json())
            .then(user => this.setState({ data: user.resp[0] }));
    }

    handleFileChange(file, name) {
        var files = this.state.files;
        var data = this.state.data;

        switch (name) {
            case 'Dieplot':
                data.dieplotUpdateCount ? data.dieplotUpdateCount = data.dieplotUpdateCount++ : data.dieplotUpdateCount = 1;
                data.dieplotLastUpdateDate = new Date();
                data.dieplot = file.name;
                break;
            case 'Pinout':
                data.pinoutUpdateCount ? data.pinoutUpdateCount = data.pinoutUpdateCount++ : data.pinoutUpdateCount = 1;
                data.pinoutLastUpdateDate = new Date();
                data.pinout = file.name;
                break;
            case 'Database':
                data.databaseUpdateCount ? data.databaseUpdateCount = data.databaseUpdateCount++ : data.databaseUpdateCount = 1;
                data.databaseLastUpdateDate = new Date();
                data.database = file.name;
                break;
            case 'Assura':
                data.assuraUpdateCount ? data.assuraUpdateCount = data.assuraUpdateCount++ : data.assuraUpdateCount = 1;
                data.assuraLastUpdateDate = new Date();
                data.assura = file.name;
                break;
            case 'Datasheet':
                data.datasheetUpdateCount ? data.datasheetUpdateCount = data.datasheetUpdateCount++ : data.datasheetUpdateCount = 1;
                data.datasheetLastUpdateDate = new Date();
                data.datasheet = file.name;
                break;
            case 'EVM':
                data.evmUpdateCount ? data.evmUpdateCount = data.evmUpdateCount++ : data.evmUpdateCount = 1;
                data.evmLastUpdateDate = new Date();
                data.evm = file.name;
                break;
        }

        this.setState({
            data: data,
            files: [...this.state.files, file]
        })
    }

    handleSubmit(e) {

    }

    render() {
        return (
            <div>
                <Layout>
                    <Header as='h1' textAlign='center'>
                        <Icon name='microchip' />
                        {this.state.data.name}
                    </Header>
                    <Grid columns='equal' divided>
                        <Grid.Row>
                            <DeviceGridColumn
                                name='Dieplot'
                                file={this.state.data.dieplot}
                                count={this.state.data.dieplotUpdateCount}
                                date={this.state.data.dieplotLastUpdateDate}
                                onChange={this.handleFileChange} />
                            <DeviceGridColumn
                                name='Pinout'
                                file={this.state.data.pinout}
                                count={this.state.data.pinoutUpdateCount}
                                date={this.state.data.pinoutLastUpdateDate}
                                onChange={this.handleFileChange} />
                            <DeviceGridColumn
                                name='Database'
                                file={this.state.data.database}
                                count={this.state.data.databaseUpdateCount}
                                date={this.state.data.databaseLastUpdateDate}
                                onChange={this.handleFileChange} />
                        </Grid.Row>
                        <Grid.Row>
                            <DeviceGridColumn
                                name='Assura'
                                file={this.state.data.assura}
                                count={this.state.data.assuraUpdateCount}
                                date={this.state.data.assuraLastUpdateDate}
                                onChange={this.handleFileChange} />
                            <DeviceGridColumn
                                name='Datasheet'
                                file={this.state.data.datasheet}
                                count={this.state.data.datasheetUpdateCount}
                                date={this.state.data.datasheetLastUpdateDate}
                                onChange={this.handleFileChange} />
                            <DeviceGridColumn
                                name='EVM'
                                file={this.state.data.evm}
                                count={this.state.data.evmUpdateCount}
                                date={this.state.data.evmLastUpdateDate}
                                onChange={this.handleFileChange} />
                        </Grid.Row>
                    </Grid>
                    <Button type='submit' onClick={this.handleFileChange}>Submit</Button>
                </Layout>
            </div>
        )
    }
}