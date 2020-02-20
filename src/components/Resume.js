import React, {useState} from 'react';
import {SkillGraph} from "./SkillGraph";
import {getLanguages, getProjects, getSkills, getUniqueExperiences, getOtherSkills} from "../utils/SkillData";
import {ProjectList} from "./ProjectList";
import resumePDF from '../resources/BMoranResume.pdf';

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

    return (
        <div className="resume">
            <div className="resume-header">
                <h1>My Resume</h1>
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