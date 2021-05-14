import axios from 'axios';

import { GET_LEADS } from './types';

// GET Leads
export const getLEADS = () => dispatch => {
  axios.get('/api/leads/')
  .then(res => {
    dispatch ({
      type: GET_LEADS,
      payload: res.data
    });
  }).catch(err => console.log(err));
}
