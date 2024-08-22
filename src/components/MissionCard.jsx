import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/MissionCard.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card" className="mission-card-container">
        <p data-testid="mission-name" className="mission-card-name">{ name }</p>
        <p data-testid="mission-year" className="mission-card-year">{ year }</p>
        <p data-testid="mission-country" className="mission-card-country">{ country }</p>
        <p data-testid="mission-destination" className="mission-card-destionation">
          { destination }
        </p>
        <hr />
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
