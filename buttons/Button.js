import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import specs from '../constants';

class Button extends React.Component {

  renderContent = () => {
    const { color, label, title, basic, inverted, size, bold, icon } = this.props;
    const textColor = color;
    const text = label || title || null;
    const textStyle = [
      { fontFamily: common.FONT_NAME },
      bold ? { fontWeight: `bold`, fontFamily: `${common.FONT_NAME}-Bold` } : null,
      color ? { color: color } : basic || inverted ? styles.basicText : { color: common.COLOR_WHITE },
      size ? { fontSize: size } : { fontSize: common.BUTTON_FONT_SIZE },
    ];

    if (icon && !text) return icon;

    return <Text style={textStyle}>{text}</Text>;
  }

  render() {
    const { color, label, title, disabled, basic, inverted, border, full, style, ...props } = this.props;
    const textColor = color;
    
    const buttonStyle = [
      styles.button,
      basic ? styles.basic : null,
      inverted ? styles.inverted : null,
      border ? styles.border : null,
      full ? styles.full : null,
      disabled ? styles.disabled : null,
      style
    ];

    return (
      <TouchableOpacity {...props} disabled={disabled} style={buttonStyle}>
        {this.renderContent()}
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  basic: false,
  bold: false,
  border: false,
  color: common.COLOR_WHITE,
  full: false,
  icon: false,
  inverted: false,
  label: false,
  size: false,
  style: {}
  title: false,
}

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: common.BUTTON_BACKGROUND,
    borderRadius: common.BUTTON_RADIUS,
    height: common.BUTTON_HEIGHT,
    justifyContent: 'center',
    marginBottom: common.MARGIN,
    marginTop: common.MARGIN,
    padding: common.BUTTON_PADDING,
    width: common.WIDTH * 0.5, // 50%
  },
  basic: {
    backgroundColor: 'transparent',
    padding: 0,
    width: 'auto',
  },
  inverted: {
    backgroundColor: common.COLOR_WHITE,
    borderColor: common.COLOR_ACCENT,
    borderWidth: 0.5,
  },
  border: {
    borderColor: common.COLOR_ACCENT,
    borderWidth: 0.5,
  },
  disabled: {
    backgroundColor: common.BUTTON_DISABLED,
  },
  full: {
    width: common.WIDTH * 0.8, // 80%
  },
  basicText: {
    color: common.COLOR_ACCENT,
  }
});