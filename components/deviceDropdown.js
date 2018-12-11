import React, { Component } from 'react';
import { Button, Grid, Confirm } from 'semantic-ui-react';
import Link from 'next/link';

export default class DeviceDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteClicked: false
        };
      this.handleDeleteClick = this.handleDeleteClick.bind(this);
      this.handleDeleteCancel = this.handleDeleteCancel.bind(this);
      this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
    }

    handleDeleteClick() {
        console.log("delete clicked")
        this.setState({deleteClicked: true});
    }

    handleDeleteCancel() {
        console.log("Confirm canceled")
        this.setState({deleteClicked: false});
    }

    handleDeleteConfirm() {
        console.log("Confirm confirmed")
        this.setState({deleteClicked: false});
    }

    render() {
        console.log(this.props.row.original)
        return (
            <div class='deviceDropdownCollection'>
                <Grid divided='vertically'>
                    <Grid.Row columns={8}>
                        <Grid.Column>
                        <Link href={{ pathname: '/editDevice', query: {id:this.props.row.original._id} }}>
                        <Button fluid color='green'>Edit</Button>
                        </Link>
                        </Grid.Column>
                        <Grid.Column>
                            <Button fluid color='red' onClick={this.handleDeleteClick}>Delete</Button>
                            <Confirm open={this.state.deleteClicked} onCancel={this.handleDeleteCancel} onConfirm={this.handleDeleteConfirm} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        );
    }
}