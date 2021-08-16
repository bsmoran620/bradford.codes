import React, {Fragment, useState} from 'react';
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export function ProjectList(props) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleIsCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <Fragment>
            <Accordion defaultActiveKey="0">
                <Jumbotron fluid>
                    <h2>Unique Experiences</h2>
                    <Accordion.Collapse eventKey="0">
                        <ul>
                            {props.uniqueExperiences.map((uniqueExperience, index) => uniqueExperienceComponent(uniqueExperience, index))}
                        </ul>
                    </Accordion.Collapse>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={toggleIsCollapsed}>
                        {isCollapsed ? 'See More' : 'See Less'}
                    </Accordion.Toggle>
                </Jumbotron>
            </Accordion>
            <div className="project-container">
                {props.projects
                    .filter(project => {
                        return (
                            props.selectedSkills.length === 0 ||
                            project.skills.some(skill => props.selectedSkills.includes(skill))
                        );
                    })
                    .map((project, index) => projectCardComponent(project, index, props.colorLookup))}
            </div>
        </Fragment>
    );
}

function uniqueExperienceComponent(uniqueExperience, index) {
    return <li key={index} dangerouslySetInnerHTML={{__html: uniqueExperience}} />;
}

function projectCardComponent(project, index, colorLookup) {
    console.log(colorLookup);
    // TODO: Clean up/remove the styles in here
    return <Card key={index} className="project-item">
        <Card.Header>{project.title}</Card.Header>
        <Card.Body>
            {project.subtitle && <Card.Title className="mb-2 text-muted">{project.subtitle}</Card.Title>}
            {project.timeFrame && <Card.Subtitle className="mb-2 text-muted">{project.timeFrame}</Card.Subtitle>}
            <Card.Text dangerouslySetInnerHTML={{__html: project.description}} />
            <div>
                {project.skills.map(skill => {
                    const colorFound = colorLookup.find(test => test.id === skill);
                    return <Badge
                        variant="primary"
                        style={{backgroundColor: `${colorFound === undefined ? '#ffaabb' : colorFound.color}`}}
                    >{skill}</Badge>
                })}
            </div>
        </Card.Body>
    </Card>
}