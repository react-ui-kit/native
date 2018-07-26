import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// global colors
export const COLOR_PRIMARY = '#EC008C';
export const COLOR_SECONDARY = '#464E5B';
export const COLOR_TERTIARY = '#F6F6F8';

export const COLOR_WHITE = '#FFFFFF';
export const COLOR_BLACK = '#000000';
export const COLOR_LIGHT = '#BBBBBB';

export const COLOR_WARNING = COLOR_PRIMARY;
export const COLOR_ERROR = '#CC333F';
export const COLOR_INFO = '#00A0B0';
export const COLOR_SUCCESS = '#8A9B0F';

export const HEADER_BACKGROUND = '#2A2C2E';
export const FOOTER_BACKGROUND = HEADER_BACKGROUND;
export const TEXT_COLOR = COLOR_WHITE;
export const LINK_COLOR = COLOR_PRIMARY;
export const PLACEHOLDER_COLOR = COLOR_WHITE;
export const DIVIDER_COLOR = `rgba(0, 0, 0, 0.3)`;
export const BACKGROUND_COLOR = COLOR_SECONDARY;
export const OVERLAY_BACKGROUND = `rgba(35, 35, 35, 0.70)` // #232323
export const INPUT_BACKGROUND = 'rgba(155, 155, 155, 0.4)'; // #9B9B9B -> rgb(155, 155, 155)
export const BUTTON_BACKGROUND = COLOR_PRIMARY;
export const BUTTON_DISABLED = COLOR_SECONDARY;
export const SHADOW_COLOR = COLOR_SECONDARY;

// global sizes
export const BASE_SIZE = 14;
export const FONT_NAME = `Lato`;
export const FONT_SIZE = BASE_SIZE;
export const FONT_SIZE_H1 = FONT_SIZE * 2;
export const FONT_SIZE_H2 = FONT_SIZE * 1.71;
export const FONT_SIZE_H3 = FONT_SIZE * 1.4;
export const FONT_SIZE_H4 = FONT_SIZE * 1.2;
export const FONT_SIZE_H5 = FONT_SIZE;

export const BORDER_RADIUS = 1;
export const INPUT_HEIGHT = BASE_SIZE * 3;
export const INPUT_RADIUS = BORDER_RADIUS;

export const BUTTON_RADIUS = BORDER_RADIUS;
export const BUTTON_HEIGHT = BASE_SIZE * 3;
export const BUTTON_FONT_SIZE = FONT_SIZE;
export const BUTTON_PADDING = (BUTTON_HEIGHT - BUTTON_FONT_SIZE - 2) / 2;

// global paddings & margins
export const PADDING = BASE_SIZE * 1.5;
export const MARGIN = BASE_SIZE / 2;

// device dimensions
export const WIDTH = width;
export const HEIGHT = height;
export const HEADER_HEIGHT = BASE_SIZE * 3.5;
export const FOOTER_HEIGHT = BASE_SIZE * 3.5;