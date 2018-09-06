import * as React from 'react';

export default class Playground extends React.Component<any> {
  renderCount(name: string) {
    return [1, 2, 3].map((item, index) => (
      <div>
        {item}-{name}
      </div>
    ));
  }

  render() {
    return <div className="playground">{this.renderCount('Yu')}</div>;
  }
}
