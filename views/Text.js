import React from 'react';
import { Text, StyleSheet } from 'react-native';
import specs from '../constants';

class TextBlock extends React.Component {
  render() {
    const {
      center, left, right, bold, h1, h2, h3, h4, h5,size,
      link, primary, secondary, tertiary,
      white, black, warning, error, info, success,
      style, ...props
    } = this.props;

    const textStyles = [
      styles.baseText,
      center ? styles.center : null,
      left ? styles.left : null,
      right ? styles.right : null,
      bold ? styles.bold : null,
      h1 ? styles.h1 : null,
      h2 ? styles.h2 : null,
      h3 ? styles.h3 : null,
      h4 ? styles.h4 : null,
      h5 ? styles.h5 : null,
      link ? styles.link : null,
      primary ? styles.primary : null,
      secondary ? styles.secondary : null,
      tertiary ? styles.tertiary : null,
      white ? styles.white : null,
      black ? styles.black : null,
      warning ? styles.warning : null,
      error ? styles.error : null,
      info ? styles.info : null,
      success ? styles.success : null,
      size ? { fontSize: size } : null,
      style,
    ];

    return (
      <Text style={textStyles} {...props}>
        {this.props.children}
      </Text>
    );
  }
}

TextBlock.defaultProps = {
  black: false,
  bold: false,
  center: false,
  error: false,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  info: false,
  left: false,
  link: false,
  primary: false,
  right: false,
  secondary: false,
  size: false,
  style: {},
  success: false,
  tertiary: false,
  warning: false,
  white: false,
}

export default TextBlock;

const styles = StyleSheet.create({
  baseText: {
    color: specs.TEXT_COLOR,
    fontFamily: specs.FONT_NAME,
    fontSize: specs.FONT_SIZE,
  },
  left: {
    flex: 1,
    textAlign: 'left'
  },
  right: {
    flex: 1,
    textAlign: 'right'
  },
  center: {
    textAlign: 'center'
  },
  bold: {
    fontWeight: 'bold',
  },
  h1: {
    fontSize: specs.FONT_SIZE_H1,
  },
  h2: {
    fontSize: specs.FONT_SIZE_H2,
  },
  h3: {
    fontSize: specs.FONT_SIZE_H3,
  },
  h4: {
    fontSize: specs.FONT_SIZE_H4,
  },
  h5: {
    fontSize: specs.FONT_SIZE_H5,
  },
  primary: {
    color: specs.COLOR_PRIMARY
  },
  secondary: {
    color: specs.COLOR_SECONDARY
  },
  tertiary: {
    color: specs.COLOR_TERTIARY
  },
  link: {
    color: specs.LINK_COLOR
  },
  white: {
    color: specs.COLOR_WHITE
  },
  black: {
    color: specs.COLOR_BLACK
  },
  warning: {
    color: specs.COLOR_WARNING
  },
  error: {
    color: specs.COLOR_ERROR
  },
  info: {
    color: specs.COLOR_INFO
  },
  success: {
    color: specs.COLOR_SUCCESS
  },
});
