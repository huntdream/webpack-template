import * as React from 'react';
import Avatar from '../Avatar';
import Playground from '../Playground';

import './style.sass';

export default class App extends React.Component<any> {
  render() {
    return (
      <div className="container">
        <Avatar
          src="http://p2.music.126.net/6CDzo-lIA0FIu6GwQrXqeQ==/3285340751745782.jpg"
          shape="circle"
          size="small"
        />
        <Playground />
      </div>
    );
  }
}
