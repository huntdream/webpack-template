import * as React from 'react'
import './style.sass'

export type Shape = 'square' | 'circle'

export type Size = 'default' | 'small' | 'large'

export interface AvatarProps {
  src: string
  style?: React.CSSProperties
  shape?: Shape
  size?: Size
  alt?: string
}

export default class Avatar extends React.Component<AvatarProps> {
  render() {
    const { src, shape, size, alt, style } = this.props
    let sizeCal = ''
    switch (size) {
      case 'small':
        sizeCal = '40px'
        break
      case 'large':
        sizeCal = '60px'
        break
      default:
        break
    }
    return (
      <div
        className="avatar-wrap"
        style={{
          height: sizeCal,
          width: sizeCal,
        }}
      >
        <img
          src={src}
          className="avatar"
          style={{
            borderRadius: shape === 'circle' && '50%',
            ...style,
          }}
          alt={alt}
        />
      </div>
    )
  }
}
