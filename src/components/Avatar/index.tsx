import * as React from 'react';
import './style.sass';

export type Shape = 'square' | 'circle';

export type Size = 'default' | 'small' | 'large';

export interface AvatarProps {
  src: string;
  shape?: Shape;
  size?: Size;
}

export default class Avatar extends React.Component<AvatarProps> {
  render() {
    const { src, shape, size } = this.props;
    let sizeCal = '';
    switch (size) {
      case 'small':
        sizeCal = '40px';
        break;
      case 'large':
        sizeCal = '80px';
        break;
      default:
        break;
    }
    return (
      <div
        className="avatar-wrap"
        style={{
          width: sizeCal,
          height: sizeCal
        }}
      >
        <img
          src={src}
          className="avatar"
          alt="Avatar"
          style={{
            borderRadius: shape === 'circle' && '50%'
          }}
        />
      </div>
    );
  }
}
