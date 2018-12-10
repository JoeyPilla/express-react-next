import React, { Component } from 'react';
import { Button, Grid, Confirm } from 'semantic-ui-react';

export default class DeviceDropdown extends Component {
    constructor(props) {
        super();
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
        return (
            <div class='deviceDropdownCollection'>
                <Grid divided='vertically'>
                    <Grid.Row columns={8}>
                        <Grid.Column>
                            <Button fluid color='green'>Edit</Button>
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