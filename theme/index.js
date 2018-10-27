import createTheming from './createTheming';

import * as COLORS from './colors';
import * as SIZES from './sizes';

const theming = createTheming({ COLORS, SIZES });
const { ThemeProvider, withTheme } = theming;
const defaultTheme = { COLORS, SIZES };

export { theming, ThemeProvider, withTheme, defaultTheme };
