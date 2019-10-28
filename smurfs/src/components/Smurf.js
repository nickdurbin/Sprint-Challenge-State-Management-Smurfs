import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSmurf } from '../actions/smurfs';

function Smurf() {
  const smurfs = useSelector(state => state.smurfs);
  const dispatch = useDispatch();

  console.log(smurfs)

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deleteSmurf(e.target.value))
  }

  return (
    <div className='smurfContainer'>
      {smurfs.map((smurf, index) => (
        <>
        <div className='smurfDetails' key={smurf.id} index={index}>
          <h2>{smurf.name}</h2>
          <h3>age: {smurf.age}</h3>
          <h3>size: {smurf.height}</h3>
        </div>
        <button className='deleteBtn btn' onClick={handleDelete} value={smurf.id}>
            Delete
        </button>
        </>
      ))}
    </div>
  )
}

export default Smurf;