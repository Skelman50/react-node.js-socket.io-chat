import React, { Component } from 'react';
import './Auth.css';
import CardTitle from '../../components/card-title/CardTitle';
import NameImputField from '../../components/imput-fields/name-imput-field/NameImputField';
import RoomImputField from '../../components/imput-fields/room-imput-field/RoomImputField';
import CardAction from '../../components/card-action/CardAction';

class Auth extends Component {
 
    state = {
      nameValue: '',
      roomValue: '',
    };


  resetInputs = (nameValue, roomValue) => {
    this.setState({
      nameValue,
      roomValue,
    });
  }

  onChangeRoomValue = (e) => {
    const { value } = e.target;
    const { nameValue } = this.state;
    this.resetInputs(nameValue, value);
  }

  onChangeNameValue = (e) => {
    const { value } = e.target;
    const { roomValue } = this.state;
    this.resetInputs(value, roomValue);
  }

  onHandleSubmit = (e) => {
    const { nameValue, roomValue } = this.state;
    e.preventDefault();
    this.resetInputs('', '');
    const { push } = this.props.history;
    push(`/chat?name=${nameValue}&room=${roomValue}`);
  }

  render() {
    const { nameValue, roomValue } = this.state;
    return (
      <form
        onSubmit={this.onHandleSubmit}
        className="auth"
      >
        <div className="card">
          <div className="card-content">
            <CardTitle />
            <NameImputField
              nameValue={nameValue}
              onChangeNameValue={this.onChangeNameValue}
            />
            <RoomImputField
              roomValue={roomValue}
              onChangeRoomValue={this.onChangeRoomValue}
            />
            <CardAction />
          </div>
        </div>
      </form>
    );
  }
}

export default Auth;
