import axios from 'axios';

export const GET_SMURFS_REQUEST = 'GET_SMURFS_REQUEST'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_ERROR = 'GET_SMURFS_ERROR'

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_REQUEST })
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res =>
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: GET_SMURFS_ERROR, payload: err.response }))
}

export function createSmurf(smurf) {
  return dispatch => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_SMURFS_ERROR, payload: err.response });
      });
  };
}

export function deleteSmurf(id) {
  return dispatch => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_SMURFS_ERROR, payload: err.response });
      });
  };
}