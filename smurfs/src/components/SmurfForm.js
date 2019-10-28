import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createSmurf} from '../actions/smurfs';

const SmurfForm = () => {
  const dispatch = useDispatch()
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const handleChanges = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewSmurf({
      name: "",
      age: "",
      height: "",
      id: ""
    });
    dispatch(createSmurf(newSmurf));
  };

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
      <h1>Smurf Creator</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newSmurf.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={newSmurf.age}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={newSmurf.height}
          onChange={handleChanges}
        />
        <button className="addBtn btn" type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default SmurfForm;