import React from 'react';
import PropTypes from "prop-types";

class Greetings extends React.Component {
  render () {
    return (
        <div>
          Greetings:
          {this.props.greeting}
        </div>
    );
  }
};

Greetings.propTypes = {
    greeting: PropTypes.string
};

export default Greetings;
