import React from 'react';
import '../imputs-field.css';

const NameImputField = ({ nameValue, onChangeNameValue }) => (
  <div className="input-field">
    <input
      onChange={onChangeNameValue}
      value={nameValue}
      type="text"
      id="name"
      className="validate"
      name="name"
      required
    />
    <label htmlFor="name">Name</label>
  </div>
);

export default NameImputField;
