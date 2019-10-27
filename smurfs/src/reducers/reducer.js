import { GET_SMURFS_REQUEST, GET_SMURFS_SUCCESS, GET_SMURFS_ERROR } from '../actions/smurfs';

const initialState = {
    isLoading: false,
    error: '',
    smurfs: []
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_SMURFS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
          isLoading: false,
          smurfs: action.payload
      }
    case GET_SMURFS_ERROR:
      return {
        ...state,
        isLoading: true,
        error: action.payload
      }
    default:
      return state
  }
}