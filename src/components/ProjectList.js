import React, { Component } from 'react';
import Card from "react-bootstrap/Card";

export class ProjectList extends Component {
    // TODO: Clean up/remove the styles in here
    // TODO: Make a challenges / lessons learned portion for each card?
    // TODO: Allow the cards to be collapsed?
    // TODO: Allow filtering buttons to also filter the project list by tags?
    // TODO: Add a clear all filters button
    projectCardComponent = project => (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                {project.subtitle && <Card.Subtitle className="mb-2 text-muted">{project.subtitle}</Card.Subtitle>}
                <Card.Text dangerouslySetInnerHTML={{__html: project.description}} />
            </Card.Body>
        </Card>
    );

    // TODO: Accordion? Wrap in css grid?
    render() {
        return (
            <div>
                {this.props.projects.map(this.projectCardComponent)}
            </div>
        );
    }
}