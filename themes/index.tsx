import { Theme, ThemeOptions, createTheme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import componentStyleOverrides from './compStyleOverride';
import Palette from './palette';
import customShadows from './shadows';
import Typography from './typography';

const config = {
  borderRadius: 8,
  outlinedFilled: true,
  presetColor: 'default',
  rtlLayout: false,
  container: false,
};

const { borderRadius, outlinedFilled, presetColor, rtlLayout } = config;

const theme: Theme = Palette('light', presetColor);
const themeTypography: TypographyOptions = Typography(theme, borderRadius);
const themeCustomShadows = customShadows('light', theme);

const themeOptions: ThemeOptions = {
  direction: rtlLayout ? 'rtl' : 'ltr',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1400,
    },
  },
  palette: theme.palette,
  mixins: {
    toolbar: {
      minHeight: '48px',
      padding: '16px',
      '@media (min-width: 600px)': {
        minHeight: '48px',
      },
    },
  },
  typography: themeTypography,
  customShadows: themeCustomShadows,
};

const themes: Theme = createTheme(themeOptions);
const themeComponent = componentStyleOverrides(
  themes,
  borderRadius,
  outlinedFilled
);
themes.components = themeComponent;

export default themes;
