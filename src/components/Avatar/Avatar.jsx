import * as React from 'react';

export default class Avatar extends React.Component {
  constructor() {}

  render() {
    return (
      <div className="avatar-wrap">
        <img src={this.props.avatarurl} className="avatar" alt="Avatar" />
      </div>
    );
  }
}
