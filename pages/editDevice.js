import React, { Component } from 'react'
import Layout from '../components/layout';
import DeviceGridColumn from '../components/deviceGridColumn';
import { Form, Header, Icon, Input, Item, Button, Divider, Grid } from 'semantic-ui-react';
import { runInThisContext } from 'vm';
import axios from 'axios';
import DropZone from '../components/dropZone';

export default class editDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            files: [],
        }

        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileDrops = this.handleFileDrops.bind(this);
    }

    static getInitialProps({ query: { id } }) {
        return { id: id }
    }

    componentDidMount() {
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
            files: [...this.state.files, file],
        })
    }

    handleFileDrops(files) {
        Array.from(files).forEach(file => {
            var name = file.name.toLowerCase();
            if (name.includes('pin')) {
                this.handleFileChange(file,'Pinout');
            } else if (name.includes('db') || name.includes('database')){
                this.handleFileChange(file,'Database');
            } else if (name.includes('assura')){
                this.handleFileChange(file,'Assura');
            } else if (name.includes('datas') || name.includes('spec')){
                this.handleFileChange(file,'Datasheet');
            } else if (name.includes('evm')){
                this.handleFileChange(file,'EVM');
            }
        });
    }


    handleSubmit(e) {
        const data = new FormData();
        data.append('file', this.state.files[0],  this.state.files[0].name);
        console.log(data);
        var url = ' http://localhost:3000/api/updateDevice';
        
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        fetch(url, {
            method: 'POST',
            body: data
        })
        // axios.post(url, data, config).then(res => {
        //     console.log(res.statusText);
        // })
    }
    
    render() {
        return (
            <div>
                <Layout>
                    <Header as='h1' textAlign='center'>
                        <Icon name='microchip' />
                        {this.state.data.name}
                    </Header>
                    <Grid columns='equal' divided stackable>
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
                                onChange={this.handleFileChange}/>
                        </Grid.Row>
                    </Grid>
                    <Divider horizontal>Or</Divider>
                    <DropZone 
                        onDrop={this.handleFileDrops}
                    >
                    </DropZone>
                    <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
                </Layout>
            </div>
        )
    }
}