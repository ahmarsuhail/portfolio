import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import styles from './styles.css'

class Contact extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        console.log("Hello");
        event.preventDefault();
        fetch('http://localhost:4000/contact/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state,
                email: this.state.email,
                message: this.state.message
            })
        })
    }



    render() {

        const styles = {
            root: {
                '& label.Mui-focused': {
                    color: 'green',
                  }
            }
        }

        return (
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item xs={5}>
                        <TextField
                            name="name"
                            value={this.state.name}
                            label="Name *"
                            margin="normal"
                            fullWidth
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={5}>
                        <TextField
                            name="email"
                            value={this.state.email}
                            label="Email *"
                            margin="normal"
                            fullWidth
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}></Grid>

                    <Grid item xs={10}>
                    <TextField
                        id="outlined-dense-multiline"
                        label="Message"
                        margin="dense"
                        variant="outlined"
                        multiline
                        rows="4"
                        rowsMax="8"
                        fullWidth
                    />
                    </Grid>

                    <Grid item xs={3} xm={2}>
                        <div className="button">
                            Send
                        </div>
                    </Grid>
                </Grid>
            </form>
        )
    }

}

export default Contact