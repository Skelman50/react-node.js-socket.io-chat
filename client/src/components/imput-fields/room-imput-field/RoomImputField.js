import React from 'react';
import '../imputs-field.css';

const RoomImputField = ({ roomValue, onChangeRoomValue }) => (
  <div className="input-field">
    <input
      onChange={onChangeRoomValue}
      value={roomValue}
      type="text"
      id="room"
      className="validate"
      name="room"
      required
    />
    <label htmlFor="room">Room</label>
  </div>
);

export default RoomImputField;
