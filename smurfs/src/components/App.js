import React, { useEffect } from "react";
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import { useSelector, useDispatch } from 'react-redux';
import { getSmurfs } from '../actions/smurfs';
 
function App() {
  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSmurfs())
  }, [dispatch])

  return (
    <div className="App">
      <SmurfForm />
      { isLoading ? <div className='spinner' /> : <Smurf /> }
    </div>
  );
}

export default App;