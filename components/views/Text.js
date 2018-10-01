// font spacing inspiration
// https://github.com/hectahertz/react-native-typography/blob/master/src/helpers/sanFranciscoSpacing.js

// Typography component: https://github.com/hectahertz/react-native-typography

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const BASE_SIZE = 14;
const LINE_HEIGHT = 24; // ~ BASE_SIZE * 1.714
const COLOR_DEFAULT = '#808080';

export default class Typography extends Component {
  static defaultProps = {
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    h5: false,
    title: false,
    subtitle: false,
    caption: false,
    size: null,
    height: null,
    color: null,
    thin: false,
    bold: false,
    light: false,
    italic: false,
    align: null,
  }

  render() {
    const {
      style,
      children,
      h1,
      h2,
      h3,
      h4,
      h5,
      title,
      subtitle,
      caption,
      size,
      color,
      thin,
      bold,
      light,
      italic,
      align,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      h4 && styles.h4,
      h5 && styles.h5,
      title && styles.title,
      subtitle && styles.subtitle,
      caption && styles.caption,
      size && { fontSize: size },
      color && { color },
      thin && { fontWeight: '100' },
      light && { fontWeight: '300' },
      bold && { fontWeight: 'bold' },
      italic && { fontStyle: 'italic' },
      align && { textAlign: align },
      style,
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: BASE_SIZE,
    lineHeight: LINE_HEIGHT,
    color: COLOR_DEFAULT,
    letterSpacing: -0.154,
  },
  h1: {
    fontSize: BASE_SIZE * 8, // 112
    lineHeight: LINE_HEIGHT * 5.333, // ~128,
    letterSpacing: 0,
  },
  h2: {
    fontSize: BASE_SIZE * 4, // 56
    lineHeight: 64,
    letterSpacing: 0.273438,
  },
  h3: {
    fontSize: BASE_SIZE * 3.214, // ~45
    lineHeight: 52,
    letterSpacing: 0.351562,
  },
  h4: {
    fontSize: BASE_SIZE * 2.428, // ~34
    lineHeight: 40,
    letterSpacing: 0.381836,
  },
  h5: {
    fontSize: BASE_SIZE * 1.714, // ~24
    lineHeight: 32,
    letterSpacing: 0.351562,
  },
  title: {
    fontSize: BASE_SIZE * 1.428, // ~20
    lineHeight: 28,
    letterSpacing: 0.361328,
  },
  subtitle: {
    fontSize: BASE_SIZE * 1.142, // 16
    lineHeight: 24,
    letterSpacing: 0.361328,
  },
  caption: {
    fontSize: BASE_SIZE * 0.857, // 12
    lineHeight: 16,
    letterSpacing: 0.361328,
  }
});