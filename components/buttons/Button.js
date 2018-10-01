import React from 'react';
// eslint-disable-next-line
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import * as theme from '../../theme';

class Button extends React.Component {
  renderContent = () => {
    const { color, label, title, basic, inverted, size, bold, icon, textStyle } = this.props;
    const text = label || title || null;
    const textStyles = [
      bold && { fontWeight: 'bold' },
      color ? { color } : { color: theme.COLOR_WHITE },
      basic && styles.basicText,
      inverted && styles.basicText,
      textStyle && { ...textStyle },
      size ? { fontSize: size } : { fontSize: theme.BUTTON_FONT_SIZE },
    ];

    if (icon && !text) return icon;

    return <Text style={textStyles}>{text}</Text>;
  };

  render() {
    const { disabled, basic, inverted, border, full, style, opacity, rounded, ...props } = this.props;

    const buttonStyle = [
      styles.button,
      basic && styles.basic,
      inverted && styles.inverted,
      border && styles.border,
      full && styles.full,
      disabled && styles.disabled,
      rounded && styles.rounded,
      style,
    ];

    return (
      <TouchableOpacity {...props} disabled={disabled} activeOpacity={opacity} style={buttonStyle}>
        {this.renderContent()}
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  basic: PropTypes.bool,
  bold: PropTypes.bool,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  full: PropTypes.bool,
  icon: PropTypes.bool,
  inverted: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.number,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
  title: PropTypes.string,
  opacity: PropTypes.number,
  rounded: PropTypes.bool,
};

Button.defaultProps = {
  basic: false,
  bold: false,
  border: false,
  disabled: false,
  color: theme.COLOR_WHITE,
  full: false,
  icon: null,
  inverted: false,
  label: null,
  size: theme.FONT_SIZE,
  style: {},
  title: null,
  opacity: 0.8,
  rounded: false,
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.BUTTON_BACKGROUND,
    borderRadius: theme.BUTTON_RADIUS,
    height: theme.BUTTON_HEIGHT,
    justifyContent: 'center',
    paddingVertical: theme.BUTTON_PADDING,
    paddingHorizontal: theme.BUTTON_PADDING * 2,
  },
  basic: {
    backgroundColor: 'transparent',
    padding: 0,
    width: 'auto',
  },
  inverted: {
    backgroundColor: theme.COLOR_WHITE,
    borderColor: theme.COLOR_PRIMARY,
    borderWidth: 0.5,
  },
  border: {
    borderColor: theme.COLOR_PRIMARY,
    borderWidth: 0.5,
  },
  disabled: {
    backgroundColor: theme.BUTTON_DISABLED,
  },
  full: {
    width: theme.WIDTH * 0.8, // 80%
  },
  rounded: {
    borderRadius: theme.BUTTON_HEIGHT / 2,
  },
  basicText: {
    color: theme.COLOR_PRIMARY,
  },
});