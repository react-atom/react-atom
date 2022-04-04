import { COLORS } from './constants';

export const tokens = {
  fontFamily: {
    sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSize: {
    big1: 50,
    big2: 42,
    big3: 36,
    title1: 24,
    title2: 20,
    title3: 18,
    body1: 16,
    body2: 14,
    body3: 12,
    tiny: 10,
  },
  lineHeight: {
    title: 1.3,
    body: 1.5,
  },
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    heavy: 900,
  },
  color: {
    transparent: 'transparent',
    white: '#ffffff',
    black: '#000000',
    ...COLORS,
  },
  spacing: {
    fill: '100%',
    widthFull: '100vw',
    heightFull: '100vh',
    half: '4px',
    '1x': '8px',
    '2x': '16px',
    '3x': '24px',
    '4x': '32px',
    '8x': '64px',
  },
  border: {},
  shadow: {},
  zIndex: {},
};
