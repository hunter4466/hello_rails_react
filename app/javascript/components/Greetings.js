import React from 'react';
import PropTypes from 'prop-types';

const Greetings = (props) => (
  <div>
    Greetings:
    {this.props.greeting}
  </div>
);

Greetings.propTypes = {
  greeting: PropTypes.string,
};

export default Greetings;
