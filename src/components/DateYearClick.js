import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DateYearClick extends Component {

  constructor(props) {
    super(props);
  }

	render() {
		return (
  <div className='col-xs-12  col-sm-12 col-md-12 col-lg-12'>
    <button className='fullwidth button btn-primary center-block' onClick = {this.props.onClickButton}>
      Display Date and Year
    </button>
  </div>
);
	}
}

// Uncomment the snippet below
  DateYearClick.propTypes = {
 	onClickButton: PropTypes.func
 } 

