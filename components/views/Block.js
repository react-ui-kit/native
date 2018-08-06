import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import * as specs from '../../utils/constants';

class Block extends React.PureComponent {
  render() {
    const {
      center,
      middle,
      inline,
      spaced,
      children,
      column,
      flex,
      margin,
      bottom,
      top,
      left,
      right,
      shadow,
      style,
    } = this.props;
    const viewStyle = [
      styles.block,
      styles.row,
      flex ? { flex: flex === true ? 1 : flex } : null,
      spaced ? styles.spaced : null,
      column ? styles.column : null,
      center ? styles.center : null,
      middle ? styles.middle : null,
      inline ? styles.inline : null,
      margin ? styles.margin : null,
      bottom ? styles.bottom : null,
      shadow ? styles.shadow : null,
      top ? styles.top : null,
      left ? styles.left : null,
      right ? styles.right : null,
      style,
    ];

    return <View style={viewStyle}>{children}</View>;
  }
}

Block.propTypes = {
  bottom: PropTypes.bool,
  center: PropTypes.bool,
  column: PropTypes.bool,
  flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  inline: PropTypes.bool,
  left: PropTypes.bool,
  margin: PropTypes.bool,
  middle: PropTypes.bool,
  right: PropTypes.bool,
  shadow: PropTypes.bool,
  spaced: PropTypes.bool,
  top: PropTypes.bool,
  style: View.propTypes.style,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Block.defaultProps = {
  bottom: false,
  center: false,
  column: false,
  flex: false,
  inline: false,
  left: false,
  margin: false,
  middle: false,
  right: false,
  shadow: false,
  spaced: false,
  top: false,
  style: {},
  children: null,
};

export default Block;

const styles = StyleSheet.create({
  block: {},
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  margin: {
    marginVertical: specs.MARGIN,
  },
  bottom: {
    bottom: '0%',
    alignItems: 'flex-end',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  top: {
    alignItems: 'flex-start',
  },
  spaced: {
    justifyContent: 'space-between',
  },
  right: {
    justifyContent: 'flex-end',
  },
  left: {
    justifyContent: 'flex-start',
  },
  shadow: {
    shadowColor: specs.COLOR_SECONDARY, // `#A7A5A5`,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
});
