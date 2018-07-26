import React from 'react';
import { Linking, Text, StyleSheet } from 'react-native';
import specs from '../constants';

class Link extends React.Component {
  navigateURL = () => {
    const { href, onPress } = this.props;

    Linking.openURL(href);
    onPress && onPress();
  }

  render() {
    const { style, color, onPress, ...props } = this.props;

    return (
      <Text
        onPress={this.navigateURL}
        style={[styles.link, { color: color }, style]} {...props}>
        {props.children}
      </Text>
    );
  }
}

Link.defaultProps = {
  color: specs.LINK_COLOR
  href: `null`,
}

export default Link;

const styles = StyleSheet.create({
  link: {
    fontFamily: specs.FONT_NAME,
    height: specs.BUTTON_HEIGHT,
    paddingVertical: specs.BUTTON_PADDING,
  }
});