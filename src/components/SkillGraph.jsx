import React, {useState} from 'react';
import { ResponsiveLine } from '@nivo/line';
import Button from 'react-bootstrap/Button';

// TODO: Main languages as different line type? (dashed line? see https://nivo.rocks/storybook/?path=/story/line--custom-line-style)
// TODO: Don't move x-axis (see line 98 comment)
// TODO: Scale: 5 is mastery, actively practicing daily
// 4: Close to mastery or mastery but not actively practicing daily
// 3: Nearing expert
// 2: Intermediate
// 1: Beginner
export function SkillGraph(props) {
    const [selectedSkills, setSelectedSkills] = useState([]);

    const toggleSelectedSkill = skill => {
        const index = selectedSkills.indexOf(skill);
        if (index === -1) {
            setSelectedSkills([...selectedSkills, skill]);
        } else {
            setSelectedSkills(selectedSkills.filter((_, i) => i !== index));
        }
    };

    const handleSkillClick = skillButton => {
        const skill = skillButton.target.textContent;
        toggleSelectedSkill(skill);
        // Track all selected skills in parent component
        props.updateAllSelectedSkills(skill);
    };

    const clearSkillsClick = () => {
        props.clearAllSkillsIn(selectedSkills);
        setSelectedSkills([]);
    };

    const getSkills = () => {
        return props.data.filter(item => {
            return (
                selectedSkills.length === 0 ||
                selectedSkills.indexOf(item.id) !== -1
            );
        });
    };

    // TODO: Review this jsx styling (component-styling? or just leave this one off here?
    const skillButtonComponent = (skill, index) => (
        <Button
            key={index}
            variant={
                selectedSkills.indexOf(skill.id) === -1
                    ? 'outline-primary'
                    : 'primary'
            }
            onClick={handleSkillClick}
            style={selectedSkills.indexOf(skill.id) === -1 ?
                {color: `${skill.color}`, borderColor: `${skill.color}`} :
                {color: '#ffffff', borderColor: `${skill.color}`, backgroundColor: `${skill.color}`}
            }
        >
            {skill.id}
        </Button>
    );

    return (
        <div className="skill-graph">
            <div className="skill-graph-svg">
                <ResponsiveLine
                    margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
                    animate={true}
                    enableSlices="x"
                    data={getSkills()}
                    yScale={{
                        type: 'linear',
                        stacked: false,
                        min: 0,
                        max: 5
                    }}
                    // TODO: Don't move axis when skills like python are selected
                    // TODO: PR to nivo to fix time min and max? values.min => just min?
                    // min and max waiting on bug fix: https://github.com/plouc/nivo/issues/675
                    xScale={{
                        type: 'time',
                        format: '%Y-%m',
                        precision: 'month'
                    }}
                    xFormat="time:%Y-%m"
                    axisBottom={{
                        format: '%Y',
                        tickValues: 'every 1 year'
                    }}
                    curve="monotoneX"
                    pointSize={8}
                    pointBorderColor="#fff"
                    pointBorderWidth={2}
                    colors={{ datum: 'color' }}
                />
            </div>
            <div className="skillButtons">
                {props.data.map((skill, index) => skillButtonComponent(skill, index))}
            </div>
            <div>
                <Button
                    variant="secondary"
                    onClick={clearSkillsClick}
                >
                 Clear
                </Button>
            </div>
        </div>
    );
}