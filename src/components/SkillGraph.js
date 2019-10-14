import React, { Component } from 'react';
import { Line } from '@nivo/line';
import Button from 'react-bootstrap/Button';

// TODO: Main languages as different line type? (dashed line? see https://nivo.rocks/storybook/?path=/story/line--custom-line-style)
// TODO: Don't move x-axis (see line 98 comment)
// TODO: Scale: 5 is mastery, actively practicing daily
// 4: Close to mastery or mastery but not actively practicing daily
// 3: Nearing expert
// 2: Intermediate
// 1: Beginner

export class SkillGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSkills: [],
      data: props.data
    };
  }

  handleSkillClick = skillButton => {
    const skill = skillButton.target.textContent;
    const index = this.state.selectedSkills.indexOf(skill);
    if (index === -1) {
      this.setState(prevState => ({
        selectedSkills: [...prevState.selectedSkills, skill]
      }));
    } else {
      this.setState(prevState => ({
        selectedSkills: prevState.selectedSkills.filter((_, i) => i !== index)
      }));
    }
  };

  // TODO: Review this jsx styling (component-styling? or just leave this one off here?
  skillButtonComponent = skill => (
    <Button
      variant={
        this.state.selectedSkills.indexOf(skill.id) === -1
          ? 'outline-primary'
          : 'primary'
      }
      onClick={this.handleSkillClick}
      style={this.state.selectedSkills.indexOf(skill.id) === -1 ?
          {color: `${skill.color}`, borderColor: `${skill.color}`} :
          {color: '#ffffff', borderColor: `${skill.color}`, backgroundColor: `${skill.color}`}
      }
    >
      {skill.id}
    </Button>
  );

  getSkills = () => {
    return this.state.data.filter(item => {
      return (
        this.state.selectedSkills.length === 0 ||
        this.state.selectedSkills.indexOf(item.id) !== -1
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <Line
          width="900"
          height="400"
          margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
          animate="true"
          enableSlices="x"
          data={this.getSkills()}
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
            format: '%b %Y',
            tickValues: 'every 6 months'
          }}
          curve="monotoneX"
          pointSize={8}
          pointBorderColor="#fff"
          pointBorderWidth={2}
          colors={{ datum: 'color' }}
        />
        <div className="skillButtons">
        {this.props.data.map(skill => this.skillButtonComponent(skill))}
        </div>
      </React.Fragment>
    );
  }
}