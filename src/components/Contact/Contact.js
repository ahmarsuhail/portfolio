import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import text from './text.json';
import styles from './styles.css'

class Contact extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: "//Enter Message Here",
            messageSent: "false"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            await fetch('http://localhost:4000/contact/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: this.state,
                })
            });

            this.setState({ messageSent: "true" });

        } catch (err) {
            this.setState({ messageSent: "error" });
            console.log(err);
        }
    }

    render() {


        if (this.state.messageSent == "false") {
            return (
                <div class="contact-form">

                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={12}>
                            <div class="contact-heading"><h2>{text.contact}</h2></div>
                        </Grid>
                    </Grid>

                    <form onSubmit={this.handleSubmit}>

                        <div class="form-mid">
                            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                                <Grid item xs={1}><div class="name-input">{text.name}</div></Grid>
                                <Grid item xs={9}>
                                    <div><input class="custom-input name-input" type="text" name="name" value={this.state.name} onChange={this.handleChange} /></div>
                                </Grid>
                            </Grid>

                            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                                <Grid item xs={1}><div class="name-input">{text.email}</div></Grid>
                                <Grid item xs={9}>
                                    <div><input class="custom-input name-input" type="text" name="email" value={this.state.email} onChange={this.handleChange} /></div>
                                </Grid>
                            </Grid>


                            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                                <Grid item xs={1}></Grid>
                                <Grid item xs={9}>
                                    <textarea rows="10" class="message" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                                </Grid>
                            </Grid>

                            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4}>
                                    <div><input class="button" type="submit" value="Send" /></div>
                                </Grid>
                            </Grid>
                        </div>

                        <div class="form-small">

                            <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                                <Grid item xs={1}><div class="name-input">{text.name}</div></Grid>
                                <Grid item xs={9}>
                                    <div><input class="custom-input name-input" type="text" name="name" value={this.state.name} onChange={this.handleChange} /></div>
                                </Grid>
                            </Grid>

                            <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                                <Grid item xs={1}><div class="name-input">{text.email}</div></Grid>
                                <Grid item xs={9}>
                                    <div><input class="custom-input name-input" type="text" name="email" value={this.state.email} onChange={this.handleChange} /></div>
                                </Grid>
                            </Grid>

                            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                                <Grid item xs={9}>
                                    <textarea rows="10" class="message" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                                </Grid>
                            </Grid>

                            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                                <Grid item xs={5}>
                                    <div><input class="button" type="submit" value="Send" /></div>
                                </Grid>
                            </Grid>

                        </div>
                    </form>
                </div>
            )
        } else if (this.state.messageSent == "true") {

            return (
                <div class="contact-form">
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={12}>
                            <div class="contact-heading"><h2>{text.messageSent}</h2></div>
                        </Grid>
                    </Grid>
                </div>
            )
        } else if (this.state.messageSent == "error") {
            return (
                <div class="contact-form">
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={12}>
                            <div class="contact-heading"><h2>{text.wentWrong1}</h2></div>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={12}>
                            <div class="contact-heading"><h2>{text.wentWrong2}</h2></div>
                        </Grid>
                    </Grid>
                </div >
            )
        }
    }

}

export default Contact