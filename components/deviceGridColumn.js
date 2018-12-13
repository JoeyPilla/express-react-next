import { Input, Header, Segment, Grid, Icon} from 'semantic-ui-react';
import React, { Component } from 'react';
import moment from 'moment';


export default class DeviceGridColumn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid.Column className="segment centered">
                <Segment textAlign='center'>
                    <Header as='h3'>
                    {this.props.name}
                    {this.props.file ?
                                <Icon color='green' name='check'/>
                            :
                                <Icon color='red' name='close'/>
                    }
                    </Header>
                    {this.props.file ?
                        <div>
                            <div>
                                <span className='uploads'>This device's dieplot has been updated {this.props.count} times.</span>
                            </div>
                            <div>
                            <span className='uploaded'>This device's dieplot was last updated on: {this.props.date? moment(this.props.date).format("dddd, MMMM Do YYYY, h:mm:ss a"): this.props.date}.</span>
                            </div>
                        </div>
                    : 
                        <div>
                            <div>
                                <span className='uploads'>This device does not have a {this.props.name.toLowerCase()} on file.</span>
                            </div>
                            <div>
                                <span>{'\0'}</span>
                            </div>
                            <div>
                                <span>{'\0'}</span>
                            </div>
                        </div>
                    }
                    <Input type='file' fluid onChange={(e) => this.props.onChange(e.target.files[0], this.props.name)} />
                </Segment>
            </Grid.Column>
        )
    }
}