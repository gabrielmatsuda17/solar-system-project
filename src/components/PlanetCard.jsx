import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    const { width } = this.props;
    const { height } = this.props;

    return (
      <div data-testid="planet-card" className="planet-card-container">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          style={ { width, height } }
          className="planet-card-image"
        />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default PlanetCard;
