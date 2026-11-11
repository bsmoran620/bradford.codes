import React, {Fragment, useState} from 'react';
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export function ProjectList(props) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleIsCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <Fragment>
            {/* Bootstrap 5 dropped .jumbotron; utilities recreate its background and vertical padding */}
            <div className="jumbotron bg-body-secondary py-5 mb-4">
                <h2>Unique Experiences</h2>
                <Collapse in={!isCollapsed}>
                    <div>
                        <ul>
                            {props.uniqueExperiences.map((uniqueExperience, index) => uniqueExperienceComponent(uniqueExperience, index))}
                        </ul>
                    </div>
                </Collapse>
                <Button variant="link" onClick={toggleIsCollapsed}>
                    {isCollapsed ? 'See More' : 'See Less'}
                </Button>
            </div>
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
                    // bg={null}: the default bg-primary class is !important and would override the skill color
                    return <Badge
                        key={skill}
                        bg={null}
                        style={{backgroundColor: `${colorFound === undefined ? '#ffaabb' : colorFound.color}`}}
                    >{skill}</Badge>
                })}
            </div>
        </Card.Body>
    </Card>
}