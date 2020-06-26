import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
//import DateYear from './DateYear';
import dateAPI from './dateAPI';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

configure({ adapter: new Adapter() });

describe('dateAPI', () => {

  it('should return data from response', (done) => {
    let mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet('https://jsonmock.hackerrank.com/datetime').reply(200, {
      "time": "06:10:39 PM",
      "date": "10-23-2013"
    });
    dateAPI.getAPIResponse().then(res => {
      expect(res).toBe('10-23-2013');

    }, (res) => {
      //console.log(res);
    }).then(done, done);

  });

  it('Should return error from response', (done) => {
    let mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet('http://date.jsontest.com').reply(500);
    dateAPI.getAPIResponse().then(res => {
    }, (res) => {
      console.log(res);
      expect(res).toEqual(Error("API Server not available."));
    }).then(done, done);

  });
});
