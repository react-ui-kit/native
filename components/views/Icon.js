import React from 'react';
import Icons from 'react-native-vector-icons';

const BASE_SIZE = 16;
const COLOR_DEFAULT = '#808080';

class Icon extends React.Component {
  static defaultProps = {
    name: null,
    family: null,
    size: BASE_SIZE,
    color: COLOR_DEFAULT,
  };

  render() {
    const { name, family, size, color, ...rest } = this.props;
    const { [family]: IconInstance } = Icons;

    if (name && IconInstance) {
      return <IconInstance size={size} name={name} color={color} {...rest} />;
    }

    return null;
  }
}

export default Icon;
