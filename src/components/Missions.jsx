import { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';
import '../styles/Missions.css';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="mission-container">
        <Title headline="Missões" />
        <div className="mission-list">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />

          ))}

        </div>
      </div>
    );
  }
}

export default Missions;
