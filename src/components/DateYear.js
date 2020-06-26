import React, {Component} from 'react';
import API from '../services/dateAPI';
import DateYearClick from './DateYearClick';
import DateYearMessage from './DateYearMessage';

export default class DateYear extends Component {

  constructor() {
    super();
    this.state = {
      data: {},
      year: 0,
      isLoading: false
    }
  }

	handleClickButton() {
    // handle button click event and state changes here
    API.getAPIResponse().then( data => {
      var temp = data.date.split('-');
      var year = +temp[2];
      this.setState({
        data: data,
        year: year
      })
    });
	}

	render() {
        // complete the necessary application logic here
		return (
  <div className='container-fluid'>
    <div>
      <center>
        <h2>Date/Year Server</h2>
      </center>
    </div>
    <div className='text-center page-title'>
      <DateYearClick onClickButton={this.handleClickButton.bind(this)}/>
      <DateYearMessage  date = {this.state.data.date} year = {this.state.year}/>
    </div>
  </div>
);

	}
}

