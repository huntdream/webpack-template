import * as React from 'react';

interface State {
  readonly user: string;
}

export default class Playground extends React.Component<{}, State> {
  readonly state: State = {
    user: 'Yu'
  };

  _onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      user: e.currentTarget.value
    });
  };

  renderCount(name: string) {
    return [1, 2, 3].map((item, index) => (
      <div>
        {item}-{name}
      </div>
    ));
  }

  render() {
    const { user } = this.state;
    return (
      <div className="playground">
        {this.renderCount(user)}
        <input type="text" onChange={this._onChange} />
      </div>
    );
  }
}
