import React from 'react';
import { Image as ImageNative, StyleSheet } from 'react-native';

const BASE_SIZE = 16;
const SOURCE_DEFAULT = 'https://react-ui-kit.com/assets/img/react-ui-kit-logo.png';

class Image extends React.Component {
  static defaultProps = {
    avatar: false,
    width: null,
    height: null,
    size: null,
    source: { uri: SOURCE_DEFAULT },
  };

  render() {
    const { size, avatar, width, height, source, style, ...props } = this.props;

    const imageStyles = [
      styles.image,
      width && { width },
      height && { height },
      avatar && styles.avatar,
      style,
    ];

    if (size) {
      const { width: imageWidth, height: imageHeight } = StyleSheet.flatten(imageStyles);

      switch (size) {
        case 'tiny':
          imageStyles.push({ width: imageWidth / 2, height: imageHeight / 2 });
          break;
        case 'small':
          imageStyles.push({ width: imageWidth / 1.25, height: imageHeight / 1.25 });
          break;
        case 'large':
          imageStyles.push({ width: imageWidth * 2, height: imageHeight * 2 });
          break;
        default:
          break;
      }
    }

    if (avatar) {
      const { width: imageWidth, height: imageHeight } = StyleSheet.flatten(imageStyles);
      const min = Math.min(imageWidth, imageHeight);
      imageStyles.push({ borderRadius: min / 2, width: min, height: min });
    }

    return <ImageNative source={source} style={StyleSheet.flatten(imageStyles)} {...props} />;
  }
}

export default Image;

export const styles = StyleSheet.create({
  image: {
    overlayColor: 'transparent',
  },
  tiny: {
    width: BASE_SIZE / 2,
    height: BASE_SIZE / 2,
  },
  small: {
    width: BASE_SIZE,
    height: BASE_SIZE,
  },
  large: {
    width: BASE_SIZE * 4,
    height: BASE_SIZE * 4,
  },
  avatar: {
    borderRadius: BASE_SIZE * 2,
  },
});
