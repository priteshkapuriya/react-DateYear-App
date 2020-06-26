import React from 'react';
import ReactDOM from 'react-dom';
import DateYear from './components/DateYear';
import {HashRouter, Route} from 'react-router-dom';
import './index.css';

ReactDOM.render(<HashRouter>
	<Route path="/" component={DateYear}/>
</HashRouter>, document.getElementById('root'));
