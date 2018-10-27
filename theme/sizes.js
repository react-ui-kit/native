import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const BASE_SIZE = 14;
export const FONT_NAME = undefined;
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
