import React, { Component } from 'react'
import Layout from '../components/layout';
import DeviceGridColumn from '../components/deviceGridColumn';
import { Form, Header, Icon, Input, Item, Button, Divider, Grid } from 'semantic-ui-react';
import axios from 'axios';
import DropZone from '../components/dropZone';

export default class editDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: {},
            files: []
        }

        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileDrops = this.handleFileDrops.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    static getInitialProps({ query: { id } }) {
        return { id: id }
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

        e.preventDefault();
        
        var data = this.state.data;
        console.log('data', data)
        var url = ' http://localhost:3000/api/newDevice';
        axios.post(url,data)
        .then(response=>console.log(response))
        .catch(e=>console.log(e))
    }

    handleInputChange(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <div>
                <Layout>
                    <Header as='h2' textAlign='center'>
                    {this.state.name}
                        <Input type='text' center icon='microchip' placeholder='Enter device name' onChange={this.handleInputChange}></Input>
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