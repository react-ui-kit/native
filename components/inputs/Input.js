import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

import Icon from '../views/Icon'

const { width } = Dimensions.get('window');

const BASE_SIZE = 14;
const COLOR_DEFAULT = `#293042`;
const COLOR_PLACEHOLDER = `#5E6D95`;
const COLOR_BACKGROUND = `#FFFFFF`;
const COLOR_ERROR = `#D44634`;
const COLOR_SUCCESS = `#7CB527`;

export default class Input extends Component {
  // to simplify the conditional logic we're using defaultProps
  // each time a prop value is not set, the default value will be used.
  static defaultProps = {
    color: COLOR_DEFAULT,
    placeHolderColor: COLOR_PLACEHOLDER,
    bgColor: COLOR_BACKGROUND,
    rounded: false,
    type: 'default',
    help: null,
    left: true,
    right: false,
    transparent: false,
    borderless: false,
    border: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      password: props.password,
    };
  }

  render() {
    const {
      style,
      label,
      help,
      type,
      password,
      color,
      placeHolderColor,
      bgColor,
      rounded,
      error,
      success,
      icon,
      family,
      left,
      right,
      transparent,
      borderless,
      ...props
    } = this.props;

    const inputStyle = [
      styles.input,
      styles.inputContainer,
      rounded && styles.rounded,
      bgColor && { backgroundColor: bgColor },
      { borderColor: placeHolderColor },
      error && styles.error,
      success && styles.success,
      borderless && styles.borderless,
      transparent && styles.transparent,
      style,
    ];

    const labelContent = label && <Text style={styles.label}>{label}</Text>;
    const { [family]: IconFamily } = Icon;
    let iconContent = icon && IconFamily ? <IconFamily name={icon} color={color} size={BASE_SIZE * 1.25} /> : null;
    const helpContent = help && <Text style={styles.help}>{help}</Text>;

    if (password) {
      iconContent = (
        <TouchableOpacity onPress={() => this.setState({ password: !this.state.password })}>
          <Icon.FontAwesome name="eye-slash" color={color} size={BASE_SIZE * 1.25} />
        </TouchableOpacity>
      );
    }

    return (
      <View style={{ marginVertical: BASE_SIZE / 2 }}>
        {labelContent}
        {helpContent}
        <View style={inputStyle}>
          {left && !right && !password && iconContent}
          <TextInput
            keyboardType={type}
            style={[styles.inputView, icon && styles.inputViewIcon]}
            secureTextEntry={this.state.password}
            underlineColorAndroid="transparent"
            placeholderTextColor={placeHolderColor}
            {...props}
          />
          {(right || password) && iconContent}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLOR_BACKGROUND,
    borderRadius: BASE_SIZE * 0.4,
    borderWidth: BASE_SIZE * 0.05,
    borderColor: COLOR_DEFAULT,
    paddingHorizontal: BASE_SIZE,
  },
  inputContainer: {
    height: BASE_SIZE * 3,
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputView: {
    flex: 1,
    color: COLOR_DEFAULT,
    fontSize: BASE_SIZE,
    textDecorationColor: 'transparent',
    textShadowColor: 'transparent',
  },
  inputViewIcon: {
    marginHorizontal: BASE_SIZE / 2,
  },
  label: {
    marginBottom: BASE_SIZE / 5,
    fontWeight: `bold`,
  },
  rounded: {
    borderRadius: BASE_SIZE * 2,
  },
  help: {
    fontSize: BASE_SIZE * 0.9,
    fontStyle: `italic`,
  },
  error: {
    borderColor: COLOR_ERROR,
    borderWidth: BASE_SIZE * 0.09,
  },
  success: {
    borderColor: COLOR_SUCCESS,
    borderWidth: BASE_SIZE * 0.09,
  },
  borderless: {
    borderColor: `transparent`,
    borderWidth: 0,
    borderRadius: 0,
  },
  transparent: {
    backgroundColor: `transparent`,
  },
});
