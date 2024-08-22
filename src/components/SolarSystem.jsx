import { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';
import '../styles/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <div className="planets-container">
          {planets.map(({ name, image, width, height }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
              width={ width }
              height={ height }
            />))}

        </div>
      </>
    );
  }
}

export default SolarSystem;
