import React, { Component } from 'react';
import styles from './styles.css'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import profileImage from './profileImage.jpg';
import Grid from '@material-ui/core/Grid';
import text from './text.json';
import R from './Resume.pdf';

class Resume extends Component {

    constructor() {
        super();
        this.state = {
            projectText: "",
            currentProject: ""
        }

        this.changeProjectText = this.changeProjectText.bind(this);
    }

    componentDidMount() {
        let description = text.projectDescriptions["kubedex"].description.map((x) => {
            return <p>{x}</p>
        });
        text.projectDescriptions["kubedex"].description = description;
        this.setState({ projectText: text.projectDescriptions["kubedex"], currentProject: "kubedex" })
    }

    changeProjectText(projectName) {
        let description = text.projectDescriptions[projectName].description.map((x) => {
            return <p>{x}</p>
        });
        text.projectDescriptions[projectName].description = description;
        this.setState({ projectText: text.projectDescriptions[projectName], currentProject: projectName })
    }


    render() {


        return (<div className="resume">

            <Grid container direction="row" justify="flex-start" alignItems="flex-start">

                <Grid item xs={12}>
                    <Grid container direction="row" justify="center" alignItems="flex-start">
                        <Grid item xs={12}><div class="resume-heading"><h2>{text.resume}</h2></div></Grid>
                    </Grid>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={3}>
                            <Avatar src={profileImage} className="avatar" />
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <a href={R} target="_blank">
                                <div class="resume-link">
                                    Resume.pdf
                                </div>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">

                        <Grid item xs={8}>
                            <p>{text.languages}</p>
                            <p>{text.webBackend}</p>
                            <p>{text.webFrontend}</p>
                            <p>{text.cloud}</p>
                            <p>{text.devOps}</p>
                        </Grid>

                        <Grid item xs={12}>
                            <h2 className="heading-margin">{text.links}</h2>
                            <a href={text.linkedIn} target="_blank"><p>{text.linkHeadings.linkedIn}</p></a>
                            <a href={text.github} target="_blank"><p>{text.linkHeadings.github}</p></a>
                            <a href={text.angelList} target="_blank"><p>{text.linkHeadings.angelList}</p></a>
                            <p>{text.email}</p>
                        </Grid>

                        <Grid item xs={12}>
                            <h2 className="heading-margin">{text.work}</h2>
                            <p className="project-heading" onClick={() => this.changeProjectText("kubedex")}>
                                {this.state.currentProject == "kubedex" ? <span>{text.dash}</span> : null}{text.kubedex}{text.projects.kubedex}</p>
                            <p className="project-heading" onClick={() => this.changeProjectText("iot")}>
                                {this.state.currentProject == "iot" ? <span>{text.dash}</span> : null}{text.iot}{text.projects.iot}</p>
                            <p className="project-heading" onClick={() => this.changeProjectText("britishAirways")}>
                                {this.state.currentProject == "britishAirways" ? <span>{text.dash}</span> : null}{text.britishAirways}{text.projects.britishAirways}</p>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <div className="project-details-box">
                        <p>{this.state.projectText.heading}</p>
                        {this.state.projectText.description}
                    </div>

                    <div class="education">
                        <h2 className="heading-margin">{text.educationHeading}</h2>
                        <div>
                            <p class="education-heading">{text.education.masters}</p>
                            <p class="education-date">{text.education.mastersDate}</p>
                        </div>
                        <div>
                            <p class="education-heading">{text.education.bachelors}</p>
                            <p class="education-date">{text.education.bachelorsDate}</p>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </div>
        )
    }



}


export default Resume;