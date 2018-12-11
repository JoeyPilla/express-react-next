import {Input, Item, Grid} from 'semantic-ui-react';
import React, { Component } from 'react';
import moment from 'moment';

export default class DeviceGridColumn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid.Column>
                <Item>
                <Item.Content>
                    <Item.Header as='h2'>{this.props.name}</Item.Header>
                        {this.props.file ?
                            <div>
                                <Item.Meta>
                                    <span className='uploads'>This device's dieplot has been updated {this.props.count} times.</span>
                                </Item.Meta>
                                <Item.Meta>
                                <span className='uploaded'>This device's dieplot was last updated on: {this.props.date? moment(this.props.date).format("dddd, MMMM Do YYYY, h:mm:ss a"): this.props.date}.</span>
                                </Item.Meta>
                                
                            </div>
                        : 
                            <div>
                                <Item.Meta>
                                    <span className='uploads'>This device does not have a {this.props.name.toLowerCase()} on file.</span>
                                </Item.Meta>
                                <Item.Meta>
                                    <span>{'\0'}</span>
                                </Item.Meta>
                            </div>
                        }
                    <Item.Extra>
                        <Input type='file' onChange={(e) => this.props.onChange(e.target.files[0], this.props.name)} />
                    </Item.Extra>
                </Item.Content>
            </Item>
            </Grid.Column>
        )
    }
}
