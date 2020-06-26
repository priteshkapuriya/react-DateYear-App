import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DateYearMessage extends Component {
	render() {
        // use props from parent to diplay the current date and current year.

		return (
  <div className='info center-block'>
    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 date'>
      <strong>
        <h3>The current date is {this.props.date}</h3>
      </strong>
    </div>
    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 year'>
      <strong>
        <h3>The current year is {this.props.year === 0 ? '' : this.props.year}</h3>
      </strong>
    </div>
  </div>
);

	}
}

// Uncomment the below snippet
 DateYearMessage.propTypes = {
 	date: PropTypes.string,
 	year: PropTypes.number
 }

