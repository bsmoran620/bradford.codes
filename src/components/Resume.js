import React, {useState} from 'react';
import {SkillGraph} from "./SkillGraph";
import {getLanguages, getProjects, getSkills, getUniqueExperiences, getOtherSkills} from "../utils/SkillData";
import {ProjectList} from "./ProjectList";
import resumePDF from '../resources/BMoranResume.pdf';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';

export function Resume() {
    const [selectedSkills, setSelectedSkills] = useState([]);

    const toggleSelectedSkill = skill => {
        const index = selectedSkills.indexOf(skill);
        if (index === -1) {
            setSelectedSkills([...selectedSkills, skill]);
        } else {
            setSelectedSkills(selectedSkills.filter((_, i) => i !== index));
        }
    };

    const clearAllSkillsIn = (skills) => setSelectedSkills(selectedSkills.filter(skill => skills.indexOf(skill) === -1));

    const getColorMap = () => {
        const languages = getLanguages().map(({ id, color }) => ({ id, color }));
        const skills = getSkills().map(({ id, color }) => ({ id, color }));
        const other = getOtherSkills().map(({ id, color }) => ({ id, color }));
        return languages.concat(skills).concat(other);
    };

    const scalePopover = (
        <Popover style={{maxWidth: "400px"}}>
            <Popover.Title as="h3">Skill Scale</Popover.Title>
            <Popover.Content>
                The purpose of the skill scale here is a rough estimate of both level of mastery 
                as well as level of current use. Once a skill reaches a high level of mastery, the reason
                for decrease is likely less frequent use.
                <ul className="skill-scale-list">
                    <li><b>1</b> represents a beginner level of mastery</li>
                    <li><b>2</b> represents a medium level of mastery</li>
                    <li><b>3</b> represents either an intermediate level of mastery or in-frequent use</li>
                    <li><b>4</b> represents a high degree of mastery or less frequent use</li>
                    <li><b>5</b> represents the highest degree of mastery with very frequent use</li>
                </ul>
            </Popover.Content>
        </Popover>
    );

    return (
        <div className="resume">
            <div className="resume-header">
                <h1>My Resume</h1>
                <OverlayTrigger trigger="hover" placement="right" overlay={scalePopover}>
                    <Button variant="success">Skill Scale</Button>
                </OverlayTrigger>
                <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                    Prefer a PDF?
                </a>
            </div>
            <h2>Languages</h2>
            <SkillGraph data={getLanguages()} updateAllSelectedSkills={toggleSelectedSkill} clearAllSkillsIn={clearAllSkillsIn} />
            <h2>Skills and Frameworks</h2>
            <SkillGraph data={getSkills()} updateAllSelectedSkills={toggleSelectedSkill} clearAllSkillsIn={clearAllSkillsIn} />
            <ProjectList
                projects={getProjects()}
                uniqueExperiences={getUniqueExperiences()}
                selectedSkills={selectedSkills}
                colorLookup={getColorMap()}
            />
        </div>
    );
}